// Typed models for the Valorant SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/valorant-sdk/go/core"
)

// Agent is the typed data model for the agent entity.
type Agent struct {
	Abilities *[]any `json:"abilities,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	Background *string `json:"background,omitempty"`
	BackgroundGradientColors *[]any `json:"backgroundGradientColors,omitempty"`
	BustPortrait *string `json:"bustPortrait,omitempty"`
	CharacterTags *[]any `json:"characterTags,omitempty"`
	Description *string `json:"description,omitempty"`
	DeveloperName *string `json:"developerName,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayIconSmall *string `json:"displayIconSmall,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	FullPortrait *string `json:"fullPortrait,omitempty"`
	FullPortraitV2 *string `json:"fullPortraitV2,omitempty"`
	IsAvailableForTest *bool `json:"isAvailableForTest,omitempty"`
	IsBaseContent *bool `json:"isBaseContent,omitempty"`
	IsFullPortraitRightFacing *bool `json:"isFullPortraitRightFacing,omitempty"`
	IsPlayableCharacter *bool `json:"isPlayableCharacter,omitempty"`
	KillfeedPortrait *string `json:"killfeedPortrait,omitempty"`
	Role *map[string]any `json:"role,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	VoiceLine *map[string]any `json:"voiceLine,omitempty"`
}

// AgentLoadMatch is the typed request payload for Agent.LoadTyped.
type AgentLoadMatch struct {
	Id string `json:"id"`
}

// AgentListMatch is the typed request payload for Agent.ListTyped.
type AgentListMatch struct {
	Abilities *[]any `json:"abilities,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	Background *string `json:"background,omitempty"`
	BackgroundGradientColors *[]any `json:"backgroundGradientColors,omitempty"`
	BustPortrait *string `json:"bustPortrait,omitempty"`
	CharacterTags *[]any `json:"characterTags,omitempty"`
	Description *string `json:"description,omitempty"`
	DeveloperName *string `json:"developerName,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayIconSmall *string `json:"displayIconSmall,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	FullPortrait *string `json:"fullPortrait,omitempty"`
	FullPortraitV2 *string `json:"fullPortraitV2,omitempty"`
	IsAvailableForTest *bool `json:"isAvailableForTest,omitempty"`
	IsBaseContent *bool `json:"isBaseContent,omitempty"`
	IsFullPortraitRightFacing *bool `json:"isFullPortraitRightFacing,omitempty"`
	IsPlayableCharacter *bool `json:"isPlayableCharacter,omitempty"`
	KillfeedPortrait *string `json:"killfeedPortrait,omitempty"`
	Role *map[string]any `json:"role,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	VoiceLine *map[string]any `json:"voiceLine,omitempty"`
}

// Competitive is the typed data model for the competitive entity.
type Competitive struct {
	AssetObjectName *string `json:"assetObjectName,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	Tiers *[]any `json:"tiers,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// CompetitiveListMatch is the typed request payload for Competitive.ListTyped.
type CompetitiveListMatch struct {
	AssetObjectName *string `json:"assetObjectName,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	Tiers *[]any `json:"tiers,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// Cosmetic is the typed data model for the cosmetic entity.
type Cosmetic struct {
	AnimationGif *string `json:"animationGif,omitempty"`
	AnimationPng *string `json:"animationPng,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	Category *string `json:"category,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	FullIcon *string `json:"fullIcon,omitempty"`
	FullTransparentIcon *string `json:"fullTransparentIcon,omitempty"`
	HideIfNotOwned *bool `json:"hideIfNotOwned,omitempty"`
	IsHiddenIfNotOwned *bool `json:"isHiddenIfNotOwned,omitempty"`
	IsNullSpray *bool `json:"isNullSpray,omitempty"`
	LargeArt *string `json:"largeArt,omitempty"`
	Levels *[]any `json:"levels,omitempty"`
	SmallArt *string `json:"smallArt,omitempty"`
	ThemeUuid *string `json:"themeUuid,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WideArt *string `json:"wideArt,omitempty"`
}

// CosmeticListMatch is the typed request payload for Cosmetic.ListTyped.
type CosmeticListMatch struct {
	AnimationGif *string `json:"animationGif,omitempty"`
	AnimationPng *string `json:"animationPng,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	Category *string `json:"category,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	FullIcon *string `json:"fullIcon,omitempty"`
	FullTransparentIcon *string `json:"fullTransparentIcon,omitempty"`
	HideIfNotOwned *bool `json:"hideIfNotOwned,omitempty"`
	IsHiddenIfNotOwned *bool `json:"isHiddenIfNotOwned,omitempty"`
	IsNullSpray *bool `json:"isNullSpray,omitempty"`
	LargeArt *string `json:"largeArt,omitempty"`
	Levels *[]any `json:"levels,omitempty"`
	SmallArt *string `json:"smallArt,omitempty"`
	ThemeUuid *string `json:"themeUuid,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WideArt *string `json:"wideArt,omitempty"`
}

// GameMode is the typed data model for the game_mode entity.
type GameMode struct {
	AllowsMatchTimeouts *bool `json:"allowsMatchTimeouts,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Duration *string `json:"duration,omitempty"`
	EconomyType *string `json:"economyType,omitempty"`
	GameFeatureOverrides *[]any `json:"gameFeatureOverrides,omitempty"`
	GameRuleBoolOverrides *[]any `json:"gameRuleBoolOverrides,omitempty"`
	IsMinimapHidden *bool `json:"isMinimapHidden,omitempty"`
	IsTeamVoiceAllowed *bool `json:"isTeamVoiceAllowed,omitempty"`
	OrbCount *int `json:"orbCount,omitempty"`
	RoundsPerHalf *int `json:"roundsPerHalf,omitempty"`
	TeamRoles *[]any `json:"teamRoles,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// GameModeListMatch is the typed request payload for GameMode.ListTyped.
type GameModeListMatch struct {
	AllowsMatchTimeouts *bool `json:"allowsMatchTimeouts,omitempty"`
	AssetPath *string `json:"assetPath,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Duration *string `json:"duration,omitempty"`
	EconomyType *string `json:"economyType,omitempty"`
	GameFeatureOverrides *[]any `json:"gameFeatureOverrides,omitempty"`
	GameRuleBoolOverrides *[]any `json:"gameRuleBoolOverrides,omitempty"`
	IsMinimapHidden *bool `json:"isMinimapHidden,omitempty"`
	IsTeamVoiceAllowed *bool `json:"isTeamVoiceAllowed,omitempty"`
	OrbCount *int `json:"orbCount,omitempty"`
	RoundsPerHalf *int `json:"roundsPerHalf,omitempty"`
	TeamRoles *[]any `json:"teamRoles,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// Map is the typed data model for the map entity.
type Map struct {
	AssetPath *string `json:"assetPath,omitempty"`
	Callouts *[]any `json:"callouts,omitempty"`
	Coordinates *string `json:"coordinates,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	ListViewIcon *string `json:"listViewIcon,omitempty"`
	MapUrl *string `json:"mapUrl,omitempty"`
	NarrativeDescription *string `json:"narrativeDescription,omitempty"`
	Splash *string `json:"splash,omitempty"`
	TacticalDescription *string `json:"tacticalDescription,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	XMultiplier *float64 `json:"xMultiplier,omitempty"`
	XScalarToAdd *float64 `json:"xScalarToAdd,omitempty"`
	YMultiplier *float64 `json:"yMultiplier,omitempty"`
	YScalarToAdd *float64 `json:"yScalarToAdd,omitempty"`
}

// MapLoadMatch is the typed request payload for Map.LoadTyped.
type MapLoadMatch struct {
	Id string `json:"id"`
}

// MapListMatch is the typed request payload for Map.ListTyped.
type MapListMatch struct {
	AssetPath *string `json:"assetPath,omitempty"`
	Callouts *[]any `json:"callouts,omitempty"`
	Coordinates *string `json:"coordinates,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	ListViewIcon *string `json:"listViewIcon,omitempty"`
	MapUrl *string `json:"mapUrl,omitempty"`
	NarrativeDescription *string `json:"narrativeDescription,omitempty"`
	Splash *string `json:"splash,omitempty"`
	TacticalDescription *string `json:"tacticalDescription,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	XMultiplier *float64 `json:"xMultiplier,omitempty"`
	XScalarToAdd *float64 `json:"xScalarToAdd,omitempty"`
	YMultiplier *float64 `json:"yMultiplier,omitempty"`
	YScalarToAdd *float64 `json:"yScalarToAdd,omitempty"`
}

// Weapon is the typed data model for the weapon entity.
type Weapon struct {
	AssetPath *string `json:"assetPath,omitempty"`
	Category *string `json:"category,omitempty"`
	DefaultSkinUuid *string `json:"defaultSkinUuid,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	KillStreamIcon *string `json:"killStreamIcon,omitempty"`
	ShopData *map[string]any `json:"shopData,omitempty"`
	Skins *[]any `json:"skins,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WeaponStats *map[string]any `json:"weaponStats,omitempty"`
}

// WeaponLoadMatch is the typed request payload for Weapon.LoadTyped.
type WeaponLoadMatch struct {
	Id string `json:"id"`
}

// WeaponListMatch is the typed request payload for Weapon.ListTyped.
type WeaponListMatch struct {
	AssetPath *string `json:"assetPath,omitempty"`
	Category *string `json:"category,omitempty"`
	DefaultSkinUuid *string `json:"defaultSkinUuid,omitempty"`
	DisplayIcon *string `json:"displayIcon,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	KillStreamIcon *string `json:"killStreamIcon,omitempty"`
	ShopData *map[string]any `json:"shopData,omitempty"`
	Skins *[]any `json:"skins,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WeaponStats *map[string]any `json:"weaponStats,omitempty"`
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
