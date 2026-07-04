<?php
declare(strict_types=1);

// Typed models for the Valorant SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Agent entity data model. */
class Agent
{
    public ?array $ability = null;
    public ?string $asset_path = null;
    public ?string $background = null;
    public ?array $background_gradient_color = null;
    public ?string $bust_portrait = null;
    public ?array $character_tag = null;
    public ?array $data = null;
    public ?string $description = null;
    public ?string $developer_name = null;
    public ?string $display_icon = null;
    public ?string $display_icon_small = null;
    public ?string $display_name = null;
    public ?string $full_portrait = null;
    public ?string $full_portrait_v2 = null;
    public ?bool $is_available_for_test = null;
    public ?bool $is_base_content = null;
    public ?bool $is_full_portrait_right_facing = null;
    public ?bool $is_playable_character = null;
    public ?string $killfeed_portrait = null;
    public ?array $role = null;
    public ?int $status = null;
    public ?string $uuid = null;
    public ?array $voice_line = null;
}

/** Request payload for Agent#load. */
class AgentLoadMatch
{
    public string $id;
}

/** Match filter for Agent#list (any subset of Agent fields). */
class AgentListMatch
{
    public ?array $ability = null;
    public ?string $asset_path = null;
    public ?string $background = null;
    public ?array $background_gradient_color = null;
    public ?string $bust_portrait = null;
    public ?array $character_tag = null;
    public ?array $data = null;
    public ?string $description = null;
    public ?string $developer_name = null;
    public ?string $display_icon = null;
    public ?string $display_icon_small = null;
    public ?string $display_name = null;
    public ?string $full_portrait = null;
    public ?string $full_portrait_v2 = null;
    public ?bool $is_available_for_test = null;
    public ?bool $is_base_content = null;
    public ?bool $is_full_portrait_right_facing = null;
    public ?bool $is_playable_character = null;
    public ?string $killfeed_portrait = null;
    public ?array $role = null;
    public ?int $status = null;
    public ?string $uuid = null;
    public ?array $voice_line = null;
}

/** Competitive entity data model. */
class Competitive
{
    public ?string $asset_object_name = null;
    public ?string $asset_path = null;
    public ?array $tier = null;
    public ?string $uuid = null;
}

/** Match filter for Competitive#list (any subset of Competitive fields). */
class CompetitiveListMatch
{
    public ?string $asset_object_name = null;
    public ?string $asset_path = null;
    public ?array $tier = null;
    public ?string $uuid = null;
}

/** Cosmetic entity data model. */
class Cosmetic
{
    public ?string $animation_gif = null;
    public ?string $animation_png = null;
    public ?string $asset_path = null;
    public ?string $category = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $full_icon = null;
    public ?string $full_transparent_icon = null;
    public ?bool $hide_if_not_owned = null;
    public ?bool $is_hidden_if_not_owned = null;
    public ?bool $is_null_spray = null;
    public ?string $large_art = null;
    public ?array $level = null;
    public ?string $small_art = null;
    public ?string $theme_uuid = null;
    public ?string $uuid = null;
    public ?string $wide_art = null;
}

/** Match filter for Cosmetic#list (any subset of Cosmetic fields). */
class CosmeticListMatch
{
    public ?string $animation_gif = null;
    public ?string $animation_png = null;
    public ?string $asset_path = null;
    public ?string $category = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $full_icon = null;
    public ?string $full_transparent_icon = null;
    public ?bool $hide_if_not_owned = null;
    public ?bool $is_hidden_if_not_owned = null;
    public ?bool $is_null_spray = null;
    public ?string $large_art = null;
    public ?array $level = null;
    public ?string $small_art = null;
    public ?string $theme_uuid = null;
    public ?string $uuid = null;
    public ?string $wide_art = null;
}

/** GameMode entity data model. */
class GameMode
{
    public ?bool $allows_match_timeout = null;
    public ?string $asset_path = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $duration = null;
    public ?string $economy_type = null;
    public ?array $game_feature_override = null;
    public ?array $game_rule_bool_override = null;
    public ?bool $is_minimap_hidden = null;
    public ?bool $is_team_voice_allowed = null;
    public ?int $orb_count = null;
    public ?int $rounds_per_half = null;
    public ?array $team_role = null;
    public ?string $uuid = null;
}

/** Match filter for GameMode#list (any subset of GameMode fields). */
class GameModeListMatch
{
    public ?bool $allows_match_timeout = null;
    public ?string $asset_path = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $duration = null;
    public ?string $economy_type = null;
    public ?array $game_feature_override = null;
    public ?array $game_rule_bool_override = null;
    public ?bool $is_minimap_hidden = null;
    public ?bool $is_team_voice_allowed = null;
    public ?int $orb_count = null;
    public ?int $rounds_per_half = null;
    public ?array $team_role = null;
    public ?string $uuid = null;
}

/** Map entity data model. */
class Map
{
    public ?string $asset_path = null;
    public ?array $callout = null;
    public ?string $coordinate = null;
    public ?array $data = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $list_view_icon = null;
    public ?string $map_url = null;
    public ?string $narrative_description = null;
    public ?string $splash = null;
    public ?int $status = null;
    public ?string $tactical_description = null;
    public ?string $uuid = null;
    public ?float $x_multiplier = null;
    public ?float $x_scalar_to_add = null;
    public ?float $y_multiplier = null;
    public ?float $y_scalar_to_add = null;
}

/** Request payload for Map#load. */
class MapLoadMatch
{
    public string $id;
}

/** Match filter for Map#list (any subset of Map fields). */
class MapListMatch
{
    public ?string $asset_path = null;
    public ?array $callout = null;
    public ?string $coordinate = null;
    public ?array $data = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $list_view_icon = null;
    public ?string $map_url = null;
    public ?string $narrative_description = null;
    public ?string $splash = null;
    public ?int $status = null;
    public ?string $tactical_description = null;
    public ?string $uuid = null;
    public ?float $x_multiplier = null;
    public ?float $x_scalar_to_add = null;
    public ?float $y_multiplier = null;
    public ?float $y_scalar_to_add = null;
}

/** Weapon entity data model. */
class Weapon
{
    public ?string $asset_path = null;
    public ?string $category = null;
    public ?array $data = null;
    public ?string $default_skin_uuid = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $kill_stream_icon = null;
    public ?array $shop_data = null;
    public ?array $skin = null;
    public ?int $status = null;
    public ?string $uuid = null;
    public ?array $weapon_stat = null;
}

/** Request payload for Weapon#load. */
class WeaponLoadMatch
{
    public string $id;
}

/** Match filter for Weapon#list (any subset of Weapon fields). */
class WeaponListMatch
{
    public ?string $asset_path = null;
    public ?string $category = null;
    public ?array $data = null;
    public ?string $default_skin_uuid = null;
    public ?string $display_icon = null;
    public ?string $display_name = null;
    public ?string $kill_stream_icon = null;
    public ?array $shop_data = null;
    public ?array $skin = null;
    public ?int $status = null;
    public ?string $uuid = null;
    public ?array $weapon_stat = null;
}

