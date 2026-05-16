package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/valorant-sdk"
	"github.com/voxgig-sdk/valorant-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestGameModeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GameMode(nil)
		if ent == nil {
			t.Fatal("expected non-nil GameModeEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := game_modeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "game_mode." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set VALORANT_TEST_GAME_MODE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		gameModeRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.game_mode", setup.data)))
		var gameModeRef01Data map[string]any
		if len(gameModeRef01DataRaw) > 0 {
			gameModeRef01Data = core.ToMapAny(gameModeRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = gameModeRef01Data

		// LIST
		gameModeRef01Ent := client.GameMode(nil)
		gameModeRef01Match := map[string]any{}

		gameModeRef01ListResult, err := gameModeRef01Ent.List(gameModeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, gameModeRef01ListOk := gameModeRef01ListResult.([]any)
		if !gameModeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", gameModeRef01ListResult)
		}

	})
}

func game_modeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "game_mode", "GameModeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read game_mode test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse game_mode test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"game_mode01", "game_mode02", "game_mode03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("VALORANT_TEST_GAME_MODE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VALORANT_TEST_GAME_MODE_ENTID": idmap,
		"VALORANT_TEST_LIVE":      "FALSE",
		"VALORANT_TEST_EXPLAIN":   "FALSE",
		"VALORANT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["VALORANT_TEST_GAME_MODE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["VALORANT_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["VALORANT_APIKEY"],
			},
			extra,
		})
		client = sdk.NewValorantSDK(core.ToMapAny(mergedOpts))
	}

	live := env["VALORANT_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["VALORANT_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
