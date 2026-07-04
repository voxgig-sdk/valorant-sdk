// Typed models for the Valorant SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Agent {
  ability?: any[]
  asset_path?: string
  background?: string
  background_gradient_color?: any[]
  bust_portrait?: string
  character_tag?: any[]
  data?: Record<string, any>
  description?: string
  developer_name?: string
  display_icon?: string
  display_icon_small?: string
  display_name?: string
  full_portrait?: string
  full_portrait_v2?: string
  is_available_for_test?: boolean
  is_base_content?: boolean
  is_full_portrait_right_facing?: boolean
  is_playable_character?: boolean
  killfeed_portrait?: string
  role?: Record<string, any>
  status?: number
  uuid?: string
  voice_line?: Record<string, any>
}

export interface AgentLoadMatch {
  id: string
}

export type AgentListMatch = Partial<Agent>

export interface Competitive {
  asset_object_name?: string
  asset_path?: string
  tier?: any[]
  uuid?: string
}

export type CompetitiveListMatch = Partial<Competitive>

export interface Cosmetic {
  animation_gif?: string
  animation_png?: string
  asset_path?: string
  category?: string
  display_icon?: string
  display_name?: string
  full_icon?: string
  full_transparent_icon?: string
  hide_if_not_owned?: boolean
  is_hidden_if_not_owned?: boolean
  is_null_spray?: boolean
  large_art?: string
  level?: any[]
  small_art?: string
  theme_uuid?: string
  uuid?: string
  wide_art?: string
}

export type CosmeticListMatch = Partial<Cosmetic>

export interface GameMode {
  allows_match_timeout?: boolean
  asset_path?: string
  display_icon?: string
  display_name?: string
  duration?: string
  economy_type?: string
  game_feature_override?: any[]
  game_rule_bool_override?: any[]
  is_minimap_hidden?: boolean
  is_team_voice_allowed?: boolean
  orb_count?: number
  rounds_per_half?: number
  team_role?: any[]
  uuid?: string
}

export type GameModeListMatch = Partial<GameMode>

export interface Map {
  asset_path?: string
  callout?: any[]
  coordinate?: string
  data?: Record<string, any>
  display_icon?: string
  display_name?: string
  list_view_icon?: string
  map_url?: string
  narrative_description?: string
  splash?: string
  status?: number
  tactical_description?: string
  uuid?: string
  x_multiplier?: number
  x_scalar_to_add?: number
  y_multiplier?: number
  y_scalar_to_add?: number
}

export interface MapLoadMatch {
  id: string
}

export type MapListMatch = Partial<Map>

export interface Weapon {
  asset_path?: string
  category?: string
  data?: Record<string, any>
  default_skin_uuid?: string
  display_icon?: string
  display_name?: string
  kill_stream_icon?: string
  shop_data?: Record<string, any>
  skin?: any[]
  status?: number
  uuid?: string
  weapon_stat?: Record<string, any>
}

export interface WeaponLoadMatch {
  id: string
}

export type WeaponListMatch = Partial<Weapon>

