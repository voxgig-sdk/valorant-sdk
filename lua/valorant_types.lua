-- Typed models for the Valorant SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Agent
---@field ability? table
---@field asset_path? string
---@field background? string
---@field background_gradient_color? table
---@field bust_portrait? string
---@field character_tag? table
---@field data? table
---@field description? string
---@field developer_name? string
---@field display_icon? string
---@field display_icon_small? string
---@field display_name? string
---@field full_portrait? string
---@field full_portrait_v2? string
---@field is_available_for_test? boolean
---@field is_base_content? boolean
---@field is_full_portrait_right_facing? boolean
---@field is_playable_character? boolean
---@field killfeed_portrait? string
---@field role? table
---@field status? number
---@field uuid? string
---@field voice_line? table

---@class AgentLoadMatch
---@field id string

---@class AgentListMatch

---@class Competitive
---@field asset_object_name? string
---@field asset_path? string
---@field tier? table
---@field uuid? string

---@class CompetitiveListMatch

---@class Cosmetic
---@field animation_gif? string
---@field animation_png? string
---@field asset_path? string
---@field category? string
---@field display_icon? string
---@field display_name? string
---@field full_icon? string
---@field full_transparent_icon? string
---@field hide_if_not_owned? boolean
---@field is_hidden_if_not_owned? boolean
---@field is_null_spray? boolean
---@field large_art? string
---@field level? table
---@field small_art? string
---@field theme_uuid? string
---@field uuid? string
---@field wide_art? string

---@class CosmeticListMatch

---@class GameMode
---@field allows_match_timeout? boolean
---@field asset_path? string
---@field display_icon? string
---@field display_name? string
---@field duration? string
---@field economy_type? string
---@field game_feature_override? table
---@field game_rule_bool_override? table
---@field is_minimap_hidden? boolean
---@field is_team_voice_allowed? boolean
---@field orb_count? number
---@field rounds_per_half? number
---@field team_role? table
---@field uuid? string

---@class GameModeListMatch

---@class Map
---@field asset_path? string
---@field callout? table
---@field coordinate? string
---@field data? table
---@field display_icon? string
---@field display_name? string
---@field list_view_icon? string
---@field map_url? string
---@field narrative_description? string
---@field splash? string
---@field status? number
---@field tactical_description? string
---@field uuid? string
---@field x_multiplier? number
---@field x_scalar_to_add? number
---@field y_multiplier? number
---@field y_scalar_to_add? number

---@class MapLoadMatch
---@field id string

---@class MapListMatch

---@class Weapon
---@field asset_path? string
---@field category? string
---@field data? table
---@field default_skin_uuid? string
---@field display_icon? string
---@field display_name? string
---@field kill_stream_icon? string
---@field shop_data? table
---@field skin? table
---@field status? number
---@field uuid? string
---@field weapon_stat? table

---@class WeaponLoadMatch
---@field id string

---@class WeaponListMatch

local M = {}

return M
