// Typed models for the Valorant SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Agent is the typed data model for the agent entity.
type Agent struct {
	Ability *[]any `json:"ability,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	Background *string `json:"background,omitempty"`
	BackgroundGradientColor *[]any `json:"background_gradient_color,omitempty"`
	BustPortrait *string `json:"bust_portrait,omitempty"`
	CharacterTag *[]any `json:"character_tag,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	DeveloperName *string `json:"developer_name,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayIconSmall *string `json:"display_icon_small,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	FullPortrait *string `json:"full_portrait,omitempty"`
	FullPortraitV2 *string `json:"full_portrait_v2,omitempty"`
	IsAvailableForTest *bool `json:"is_available_for_test,omitempty"`
	IsBaseContent *bool `json:"is_base_content,omitempty"`
	IsFullPortraitRightFacing *bool `json:"is_full_portrait_right_facing,omitempty"`
	IsPlayableCharacter *bool `json:"is_playable_character,omitempty"`
	KillfeedPortrait *string `json:"killfeed_portrait,omitempty"`
	Role *map[string]any `json:"role,omitempty"`
	Status *int `json:"status,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	VoiceLine *map[string]any `json:"voice_line,omitempty"`
}

// AgentLoadMatch is the typed request payload for Agent.LoadTyped.
type AgentLoadMatch struct {
	Id string `json:"id"`
}

// AgentListMatch is the typed request payload for Agent.ListTyped.
type AgentListMatch struct {
	Ability *[]any `json:"ability,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	Background *string `json:"background,omitempty"`
	BackgroundGradientColor *[]any `json:"background_gradient_color,omitempty"`
	BustPortrait *string `json:"bust_portrait,omitempty"`
	CharacterTag *[]any `json:"character_tag,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	DeveloperName *string `json:"developer_name,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayIconSmall *string `json:"display_icon_small,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	FullPortrait *string `json:"full_portrait,omitempty"`
	FullPortraitV2 *string `json:"full_portrait_v2,omitempty"`
	IsAvailableForTest *bool `json:"is_available_for_test,omitempty"`
	IsBaseContent *bool `json:"is_base_content,omitempty"`
	IsFullPortraitRightFacing *bool `json:"is_full_portrait_right_facing,omitempty"`
	IsPlayableCharacter *bool `json:"is_playable_character,omitempty"`
	KillfeedPortrait *string `json:"killfeed_portrait,omitempty"`
	Role *map[string]any `json:"role,omitempty"`
	Status *int `json:"status,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	VoiceLine *map[string]any `json:"voice_line,omitempty"`
}

// Competitive is the typed data model for the competitive entity.
type Competitive struct {
	AssetObjectName *string `json:"asset_object_name,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	Tier *[]any `json:"tier,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// CompetitiveListMatch is the typed request payload for Competitive.ListTyped.
type CompetitiveListMatch struct {
	AssetObjectName *string `json:"asset_object_name,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	Tier *[]any `json:"tier,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// Cosmetic is the typed data model for the cosmetic entity.
type Cosmetic struct {
	AnimationGif *string `json:"animation_gif,omitempty"`
	AnimationPng *string `json:"animation_png,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	Category *string `json:"category,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	FullIcon *string `json:"full_icon,omitempty"`
	FullTransparentIcon *string `json:"full_transparent_icon,omitempty"`
	HideIfNotOwned *bool `json:"hide_if_not_owned,omitempty"`
	IsHiddenIfNotOwned *bool `json:"is_hidden_if_not_owned,omitempty"`
	IsNullSpray *bool `json:"is_null_spray,omitempty"`
	LargeArt *string `json:"large_art,omitempty"`
	Level *[]any `json:"level,omitempty"`
	SmallArt *string `json:"small_art,omitempty"`
	ThemeUuid *string `json:"theme_uuid,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WideArt *string `json:"wide_art,omitempty"`
}

// CosmeticListMatch is the typed request payload for Cosmetic.ListTyped.
type CosmeticListMatch struct {
	AnimationGif *string `json:"animation_gif,omitempty"`
	AnimationPng *string `json:"animation_png,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	Category *string `json:"category,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	FullIcon *string `json:"full_icon,omitempty"`
	FullTransparentIcon *string `json:"full_transparent_icon,omitempty"`
	HideIfNotOwned *bool `json:"hide_if_not_owned,omitempty"`
	IsHiddenIfNotOwned *bool `json:"is_hidden_if_not_owned,omitempty"`
	IsNullSpray *bool `json:"is_null_spray,omitempty"`
	LargeArt *string `json:"large_art,omitempty"`
	Level *[]any `json:"level,omitempty"`
	SmallArt *string `json:"small_art,omitempty"`
	ThemeUuid *string `json:"theme_uuid,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WideArt *string `json:"wide_art,omitempty"`
}

// GameMode is the typed data model for the game_mode entity.
type GameMode struct {
	AllowsMatchTimeout *bool `json:"allows_match_timeout,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Duration *string `json:"duration,omitempty"`
	EconomyType *string `json:"economy_type,omitempty"`
	GameFeatureOverride *[]any `json:"game_feature_override,omitempty"`
	GameRuleBoolOverride *[]any `json:"game_rule_bool_override,omitempty"`
	IsMinimapHidden *bool `json:"is_minimap_hidden,omitempty"`
	IsTeamVoiceAllowed *bool `json:"is_team_voice_allowed,omitempty"`
	OrbCount *int `json:"orb_count,omitempty"`
	RoundsPerHalf *int `json:"rounds_per_half,omitempty"`
	TeamRole *[]any `json:"team_role,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// GameModeListMatch is the typed request payload for GameMode.ListTyped.
type GameModeListMatch struct {
	AllowsMatchTimeout *bool `json:"allows_match_timeout,omitempty"`
	AssetPath *string `json:"asset_path,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Duration *string `json:"duration,omitempty"`
	EconomyType *string `json:"economy_type,omitempty"`
	GameFeatureOverride *[]any `json:"game_feature_override,omitempty"`
	GameRuleBoolOverride *[]any `json:"game_rule_bool_override,omitempty"`
	IsMinimapHidden *bool `json:"is_minimap_hidden,omitempty"`
	IsTeamVoiceAllowed *bool `json:"is_team_voice_allowed,omitempty"`
	OrbCount *int `json:"orb_count,omitempty"`
	RoundsPerHalf *int `json:"rounds_per_half,omitempty"`
	TeamRole *[]any `json:"team_role,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// Map is the typed data model for the map entity.
type Map struct {
	AssetPath *string `json:"asset_path,omitempty"`
	Callout *[]any `json:"callout,omitempty"`
	Coordinate *string `json:"coordinate,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	ListViewIcon *string `json:"list_view_icon,omitempty"`
	MapUrl *string `json:"map_url,omitempty"`
	NarrativeDescription *string `json:"narrative_description,omitempty"`
	Splash *string `json:"splash,omitempty"`
	Status *int `json:"status,omitempty"`
	TacticalDescription *string `json:"tactical_description,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	XMultiplier *float64 `json:"x_multiplier,omitempty"`
	XScalarToAdd *float64 `json:"x_scalar_to_add,omitempty"`
	YMultiplier *float64 `json:"y_multiplier,omitempty"`
	YScalarToAdd *float64 `json:"y_scalar_to_add,omitempty"`
}

// MapLoadMatch is the typed request payload for Map.LoadTyped.
type MapLoadMatch struct {
	Id string `json:"id"`
}

// MapListMatch is the typed request payload for Map.ListTyped.
type MapListMatch struct {
	AssetPath *string `json:"asset_path,omitempty"`
	Callout *[]any `json:"callout,omitempty"`
	Coordinate *string `json:"coordinate,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	ListViewIcon *string `json:"list_view_icon,omitempty"`
	MapUrl *string `json:"map_url,omitempty"`
	NarrativeDescription *string `json:"narrative_description,omitempty"`
	Splash *string `json:"splash,omitempty"`
	Status *int `json:"status,omitempty"`
	TacticalDescription *string `json:"tactical_description,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	XMultiplier *float64 `json:"x_multiplier,omitempty"`
	XScalarToAdd *float64 `json:"x_scalar_to_add,omitempty"`
	YMultiplier *float64 `json:"y_multiplier,omitempty"`
	YScalarToAdd *float64 `json:"y_scalar_to_add,omitempty"`
}

// Weapon is the typed data model for the weapon entity.
type Weapon struct {
	AssetPath *string `json:"asset_path,omitempty"`
	Category *string `json:"category,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DefaultSkinUuid *string `json:"default_skin_uuid,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	KillStreamIcon *string `json:"kill_stream_icon,omitempty"`
	ShopData *map[string]any `json:"shop_data,omitempty"`
	Skin *[]any `json:"skin,omitempty"`
	Status *int `json:"status,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WeaponStat *map[string]any `json:"weapon_stat,omitempty"`
}

// WeaponLoadMatch is the typed request payload for Weapon.LoadTyped.
type WeaponLoadMatch struct {
	Id string `json:"id"`
}

// WeaponListMatch is the typed request payload for Weapon.ListTyped.
type WeaponListMatch struct {
	AssetPath *string `json:"asset_path,omitempty"`
	Category *string `json:"category,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DefaultSkinUuid *string `json:"default_skin_uuid,omitempty"`
	DisplayIcon *string `json:"display_icon,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	KillStreamIcon *string `json:"kill_stream_icon,omitempty"`
	ShopData *map[string]any `json:"shop_data,omitempty"`
	Skin *[]any `json:"skin,omitempty"`
	Status *int `json:"status,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WeaponStat *map[string]any `json:"weapon_stat,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
