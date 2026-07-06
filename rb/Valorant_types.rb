# frozen_string_literal: true

# Typed models for the Valorant SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Agent entity data model.
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] background_gradient_color
#   @return [Array, nil]
#
# @!attribute [rw] bust_portrait
#   @return [String, nil]
#
# @!attribute [rw] character_tag
#   @return [Array, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer_name
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_icon_small
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] full_portrait
#   @return [String, nil]
#
# @!attribute [rw] full_portrait_v2
#   @return [String, nil]
#
# @!attribute [rw] is_available_for_test
#   @return [Boolean, nil]
#
# @!attribute [rw] is_base_content
#   @return [Boolean, nil]
#
# @!attribute [rw] is_full_portrait_right_facing
#   @return [Boolean, nil]
#
# @!attribute [rw] is_playable_character
#   @return [Boolean, nil]
#
# @!attribute [rw] killfeed_portrait
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] voice_line
#   @return [Hash, nil]
Agent = Struct.new(
  :ability,
  :asset_path,
  :background,
  :background_gradient_color,
  :bust_portrait,
  :character_tag,
  :data,
  :description,
  :developer_name,
  :display_icon,
  :display_icon_small,
  :display_name,
  :full_portrait,
  :full_portrait_v2,
  :is_available_for_test,
  :is_base_content,
  :is_full_portrait_right_facing,
  :is_playable_character,
  :killfeed_portrait,
  :role,
  :status,
  :uuid,
  :voice_line,
  keyword_init: true
)

# Request payload for Agent#load.
#
# @!attribute [rw] id
#   @return [String]
AgentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Agent#list.
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] background_gradient_color
#   @return [Array, nil]
#
# @!attribute [rw] bust_portrait
#   @return [String, nil]
#
# @!attribute [rw] character_tag
#   @return [Array, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer_name
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_icon_small
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] full_portrait
#   @return [String, nil]
#
# @!attribute [rw] full_portrait_v2
#   @return [String, nil]
#
# @!attribute [rw] is_available_for_test
#   @return [Boolean, nil]
#
# @!attribute [rw] is_base_content
#   @return [Boolean, nil]
#
# @!attribute [rw] is_full_portrait_right_facing
#   @return [Boolean, nil]
#
# @!attribute [rw] is_playable_character
#   @return [Boolean, nil]
#
# @!attribute [rw] killfeed_portrait
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] voice_line
#   @return [Hash, nil]
AgentListMatch = Struct.new(
  :ability,
  :asset_path,
  :background,
  :background_gradient_color,
  :bust_portrait,
  :character_tag,
  :data,
  :description,
  :developer_name,
  :display_icon,
  :display_icon_small,
  :display_name,
  :full_portrait,
  :full_portrait_v2,
  :is_available_for_test,
  :is_base_content,
  :is_full_portrait_right_facing,
  :is_playable_character,
  :killfeed_portrait,
  :role,
  :status,
  :uuid,
  :voice_line,
  keyword_init: true
)

# Competitive entity data model.
#
# @!attribute [rw] asset_object_name
#   @return [String, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] tier
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
Competitive = Struct.new(
  :asset_object_name,
  :asset_path,
  :tier,
  :uuid,
  keyword_init: true
)

# Request payload for Competitive#list.
#
# @!attribute [rw] asset_object_name
#   @return [String, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] tier
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
CompetitiveListMatch = Struct.new(
  :asset_object_name,
  :asset_path,
  :tier,
  :uuid,
  keyword_init: true
)

# Cosmetic entity data model.
#
# @!attribute [rw] animation_gif
#   @return [String, nil]
#
# @!attribute [rw] animation_png
#   @return [String, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] full_icon
#   @return [String, nil]
#
# @!attribute [rw] full_transparent_icon
#   @return [String, nil]
#
# @!attribute [rw] hide_if_not_owned
#   @return [Boolean, nil]
#
# @!attribute [rw] is_hidden_if_not_owned
#   @return [Boolean, nil]
#
# @!attribute [rw] is_null_spray
#   @return [Boolean, nil]
#
# @!attribute [rw] large_art
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Array, nil]
#
# @!attribute [rw] small_art
#   @return [String, nil]
#
# @!attribute [rw] theme_uuid
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] wide_art
#   @return [String, nil]
Cosmetic = Struct.new(
  :animation_gif,
  :animation_png,
  :asset_path,
  :category,
  :display_icon,
  :display_name,
  :full_icon,
  :full_transparent_icon,
  :hide_if_not_owned,
  :is_hidden_if_not_owned,
  :is_null_spray,
  :large_art,
  :level,
  :small_art,
  :theme_uuid,
  :uuid,
  :wide_art,
  keyword_init: true
)

# Request payload for Cosmetic#list.
#
# @!attribute [rw] animation_gif
#   @return [String, nil]
#
# @!attribute [rw] animation_png
#   @return [String, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] full_icon
#   @return [String, nil]
#
# @!attribute [rw] full_transparent_icon
#   @return [String, nil]
#
# @!attribute [rw] hide_if_not_owned
#   @return [Boolean, nil]
#
# @!attribute [rw] is_hidden_if_not_owned
#   @return [Boolean, nil]
#
# @!attribute [rw] is_null_spray
#   @return [Boolean, nil]
#
# @!attribute [rw] large_art
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Array, nil]
#
# @!attribute [rw] small_art
#   @return [String, nil]
#
# @!attribute [rw] theme_uuid
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] wide_art
#   @return [String, nil]
CosmeticListMatch = Struct.new(
  :animation_gif,
  :animation_png,
  :asset_path,
  :category,
  :display_icon,
  :display_name,
  :full_icon,
  :full_transparent_icon,
  :hide_if_not_owned,
  :is_hidden_if_not_owned,
  :is_null_spray,
  :large_art,
  :level,
  :small_art,
  :theme_uuid,
  :uuid,
  :wide_art,
  keyword_init: true
)

# GameMode entity data model.
#
# @!attribute [rw] allows_match_timeout
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] economy_type
#   @return [String, nil]
#
# @!attribute [rw] game_feature_override
#   @return [Array, nil]
#
# @!attribute [rw] game_rule_bool_override
#   @return [Array, nil]
#
# @!attribute [rw] is_minimap_hidden
#   @return [Boolean, nil]
#
# @!attribute [rw] is_team_voice_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] orb_count
#   @return [Integer, nil]
#
# @!attribute [rw] rounds_per_half
#   @return [Integer, nil]
#
# @!attribute [rw] team_role
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
GameMode = Struct.new(
  :allows_match_timeout,
  :asset_path,
  :display_icon,
  :display_name,
  :duration,
  :economy_type,
  :game_feature_override,
  :game_rule_bool_override,
  :is_minimap_hidden,
  :is_team_voice_allowed,
  :orb_count,
  :rounds_per_half,
  :team_role,
  :uuid,
  keyword_init: true
)

# Request payload for GameMode#list.
#
# @!attribute [rw] allows_match_timeout
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] economy_type
#   @return [String, nil]
#
# @!attribute [rw] game_feature_override
#   @return [Array, nil]
#
# @!attribute [rw] game_rule_bool_override
#   @return [Array, nil]
#
# @!attribute [rw] is_minimap_hidden
#   @return [Boolean, nil]
#
# @!attribute [rw] is_team_voice_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] orb_count
#   @return [Integer, nil]
#
# @!attribute [rw] rounds_per_half
#   @return [Integer, nil]
#
# @!attribute [rw] team_role
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
GameModeListMatch = Struct.new(
  :allows_match_timeout,
  :asset_path,
  :display_icon,
  :display_name,
  :duration,
  :economy_type,
  :game_feature_override,
  :game_rule_bool_override,
  :is_minimap_hidden,
  :is_team_voice_allowed,
  :orb_count,
  :rounds_per_half,
  :team_role,
  :uuid,
  keyword_init: true
)

# Map entity data model.
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] callout
#   @return [Array, nil]
#
# @!attribute [rw] coordinate
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] list_view_icon
#   @return [String, nil]
#
# @!attribute [rw] map_url
#   @return [String, nil]
#
# @!attribute [rw] narrative_description
#   @return [String, nil]
#
# @!attribute [rw] splash
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] tactical_description
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] x_multiplier
#   @return [Float, nil]
#
# @!attribute [rw] x_scalar_to_add
#   @return [Float, nil]
#
# @!attribute [rw] y_multiplier
#   @return [Float, nil]
#
# @!attribute [rw] y_scalar_to_add
#   @return [Float, nil]
Map = Struct.new(
  :asset_path,
  :callout,
  :coordinate,
  :data,
  :display_icon,
  :display_name,
  :list_view_icon,
  :map_url,
  :narrative_description,
  :splash,
  :status,
  :tactical_description,
  :uuid,
  :x_multiplier,
  :x_scalar_to_add,
  :y_multiplier,
  :y_scalar_to_add,
  keyword_init: true
)

# Request payload for Map#load.
#
# @!attribute [rw] id
#   @return [String]
MapLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Map#list.
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] callout
#   @return [Array, nil]
#
# @!attribute [rw] coordinate
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] list_view_icon
#   @return [String, nil]
#
# @!attribute [rw] map_url
#   @return [String, nil]
#
# @!attribute [rw] narrative_description
#   @return [String, nil]
#
# @!attribute [rw] splash
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] tactical_description
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] x_multiplier
#   @return [Float, nil]
#
# @!attribute [rw] x_scalar_to_add
#   @return [Float, nil]
#
# @!attribute [rw] y_multiplier
#   @return [Float, nil]
#
# @!attribute [rw] y_scalar_to_add
#   @return [Float, nil]
MapListMatch = Struct.new(
  :asset_path,
  :callout,
  :coordinate,
  :data,
  :display_icon,
  :display_name,
  :list_view_icon,
  :map_url,
  :narrative_description,
  :splash,
  :status,
  :tactical_description,
  :uuid,
  :x_multiplier,
  :x_scalar_to_add,
  :y_multiplier,
  :y_scalar_to_add,
  keyword_init: true
)

# Weapon entity data model.
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] default_skin_uuid
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] kill_stream_icon
#   @return [String, nil]
#
# @!attribute [rw] shop_data
#   @return [Hash, nil]
#
# @!attribute [rw] skin
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] weapon_stat
#   @return [Hash, nil]
Weapon = Struct.new(
  :asset_path,
  :category,
  :data,
  :default_skin_uuid,
  :display_icon,
  :display_name,
  :kill_stream_icon,
  :shop_data,
  :skin,
  :status,
  :uuid,
  :weapon_stat,
  keyword_init: true
)

# Request payload for Weapon#load.
#
# @!attribute [rw] id
#   @return [String]
WeaponLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Weapon#list.
#
# @!attribute [rw] asset_path
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] default_skin_uuid
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] kill_stream_icon
#   @return [String, nil]
#
# @!attribute [rw] shop_data
#   @return [Hash, nil]
#
# @!attribute [rw] skin
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] weapon_stat
#   @return [Hash, nil]
WeaponListMatch = Struct.new(
  :asset_path,
  :category,
  :data,
  :default_skin_uuid,
  :display_icon,
  :display_name,
  :kill_stream_icon,
  :shop_data,
  :skin,
  :status,
  :uuid,
  :weapon_stat,
  keyword_init: true
)

