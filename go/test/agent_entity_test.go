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

func TestAgentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Agent(nil)
		if ent == nil {
			t.Fatal("expected non-nil AgentEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := agentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "agent." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VALORANT_TEST_AGENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		agentRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.agent", setup.data)))
		var agentRef01Data map[string]any
		if len(agentRef01DataRaw) > 0 {
			agentRef01Data = core.ToMapAny(agentRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = agentRef01Data

		// LIST
		agentRef01Ent := client.Agent(nil)
		agentRef01Match := map[string]any{}

		agentRef01ListResult, err := agentRef01Ent.List(agentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, agentRef01ListOk := agentRef01ListResult.([]any)
		if !agentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", agentRef01ListResult)
		}

		// LOAD
		agentRef01MatchDt0 := map[string]any{}
		agentRef01DataDt0Loaded, err := agentRef01Ent.Load(agentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if agentRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func agentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "agent", "AgentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read agent test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse agent test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"agent01", "agent02", "agent03"},
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
	entidEnvRaw := os.Getenv("VALORANT_TEST_AGENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VALORANT_TEST_AGENT_ENTID": idmap,
		"VALORANT_TEST_LIVE":      "FALSE",
		"VALORANT_TEST_EXPLAIN":   "FALSE",
		"VALORANT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["VALORANT_TEST_AGENT_ENTID"])
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
