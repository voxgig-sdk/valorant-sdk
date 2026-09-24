// Typed models for the Valorant SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/valorant-sdk/go/core"
)

// Agent is the typed data model for the agent entity.
type Agent struct {
}

// AgentLoadMatch is the typed request payload for Agent.LoadTyped.
type AgentLoadMatch struct {
	Id string `json:"id"`
	Language *string `json:"language,omitempty"`
}

// AgentListMatch is the typed request payload for Agent.ListTyped.
type AgentListMatch struct {
	IsPlayableCharacter *bool `json:"is_playable_character,omitempty"`
	Language *string `json:"language,omitempty"`
}

// Competitive is the typed data model for the competitive entity.
type Competitive struct {
}

// CompetitiveListMatch is the typed request payload for Competitive.ListTyped.
type CompetitiveListMatch struct {
	Language *string `json:"language,omitempty"`
}

// Cosmetic is the typed data model for the cosmetic entity.
type Cosmetic struct {
}

// CosmeticListMatch is the typed request payload for Cosmetic.ListTyped.
type CosmeticListMatch struct {
	Language *string `json:"language,omitempty"`
}

// GameMode is the typed data model for the game_mode entity.
type GameMode struct {
}

// GameModeListMatch is the typed request payload for GameMode.ListTyped.
type GameModeListMatch struct {
	Language *string `json:"language,omitempty"`
}

// Map is the typed data model for the map entity.
type Map struct {
}

// MapLoadMatch is the typed request payload for Map.LoadTyped.
type MapLoadMatch struct {
	Id string `json:"id"`
	Language *string `json:"language,omitempty"`
}

// MapListMatch is the typed request payload for Map.ListTyped.
type MapListMatch struct {
	Language *string `json:"language,omitempty"`
}

// Weapon is the typed data model for the weapon entity.
type Weapon struct {
}

// WeaponLoadMatch is the typed request payload for Weapon.LoadTyped.
type WeaponLoadMatch struct {
	Id string `json:"id"`
	Language *string `json:"language,omitempty"`
}

// WeaponListMatch is the typed request payload for Weapon.ListTyped.
type WeaponListMatch struct {
	Language *string `json:"language,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
