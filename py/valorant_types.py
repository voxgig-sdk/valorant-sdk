# Typed models for the Valorant SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Agent:
    ability: Optional[list] = None
    asset_path: Optional[str] = None
    background: Optional[str] = None
    background_gradient_color: Optional[list] = None
    bust_portrait: Optional[str] = None
    character_tag: Optional[list] = None
    data: Optional[dict] = None
    description: Optional[str] = None
    developer_name: Optional[str] = None
    display_icon: Optional[str] = None
    display_icon_small: Optional[str] = None
    display_name: Optional[str] = None
    full_portrait: Optional[str] = None
    full_portrait_v2: Optional[str] = None
    is_available_for_test: Optional[bool] = None
    is_base_content: Optional[bool] = None
    is_full_portrait_right_facing: Optional[bool] = None
    is_playable_character: Optional[bool] = None
    killfeed_portrait: Optional[str] = None
    role: Optional[dict] = None
    status: Optional[int] = None
    uuid: Optional[str] = None
    voice_line: Optional[dict] = None


@dataclass
class AgentLoadMatch:
    id: str


@dataclass
class AgentListMatch:
    ability: Optional[list] = None
    asset_path: Optional[str] = None
    background: Optional[str] = None
    background_gradient_color: Optional[list] = None
    bust_portrait: Optional[str] = None
    character_tag: Optional[list] = None
    data: Optional[dict] = None
    description: Optional[str] = None
    developer_name: Optional[str] = None
    display_icon: Optional[str] = None
    display_icon_small: Optional[str] = None
    display_name: Optional[str] = None
    full_portrait: Optional[str] = None
    full_portrait_v2: Optional[str] = None
    is_available_for_test: Optional[bool] = None
    is_base_content: Optional[bool] = None
    is_full_portrait_right_facing: Optional[bool] = None
    is_playable_character: Optional[bool] = None
    killfeed_portrait: Optional[str] = None
    role: Optional[dict] = None
    status: Optional[int] = None
    uuid: Optional[str] = None
    voice_line: Optional[dict] = None


@dataclass
class Competitive:
    asset_object_name: Optional[str] = None
    asset_path: Optional[str] = None
    tier: Optional[list] = None
    uuid: Optional[str] = None


@dataclass
class CompetitiveListMatch:
    asset_object_name: Optional[str] = None
    asset_path: Optional[str] = None
    tier: Optional[list] = None
    uuid: Optional[str] = None


@dataclass
class Cosmetic:
    animation_gif: Optional[str] = None
    animation_png: Optional[str] = None
    asset_path: Optional[str] = None
    category: Optional[str] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    full_icon: Optional[str] = None
    full_transparent_icon: Optional[str] = None
    hide_if_not_owned: Optional[bool] = None
    is_hidden_if_not_owned: Optional[bool] = None
    is_null_spray: Optional[bool] = None
    large_art: Optional[str] = None
    level: Optional[list] = None
    small_art: Optional[str] = None
    theme_uuid: Optional[str] = None
    uuid: Optional[str] = None
    wide_art: Optional[str] = None


@dataclass
class CosmeticListMatch:
    animation_gif: Optional[str] = None
    animation_png: Optional[str] = None
    asset_path: Optional[str] = None
    category: Optional[str] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    full_icon: Optional[str] = None
    full_transparent_icon: Optional[str] = None
    hide_if_not_owned: Optional[bool] = None
    is_hidden_if_not_owned: Optional[bool] = None
    is_null_spray: Optional[bool] = None
    large_art: Optional[str] = None
    level: Optional[list] = None
    small_art: Optional[str] = None
    theme_uuid: Optional[str] = None
    uuid: Optional[str] = None
    wide_art: Optional[str] = None


@dataclass
class GameMode:
    allows_match_timeout: Optional[bool] = None
    asset_path: Optional[str] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    duration: Optional[str] = None
    economy_type: Optional[str] = None
    game_feature_override: Optional[list] = None
    game_rule_bool_override: Optional[list] = None
    is_minimap_hidden: Optional[bool] = None
    is_team_voice_allowed: Optional[bool] = None
    orb_count: Optional[int] = None
    rounds_per_half: Optional[int] = None
    team_role: Optional[list] = None
    uuid: Optional[str] = None


@dataclass
class GameModeListMatch:
    allows_match_timeout: Optional[bool] = None
    asset_path: Optional[str] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    duration: Optional[str] = None
    economy_type: Optional[str] = None
    game_feature_override: Optional[list] = None
    game_rule_bool_override: Optional[list] = None
    is_minimap_hidden: Optional[bool] = None
    is_team_voice_allowed: Optional[bool] = None
    orb_count: Optional[int] = None
    rounds_per_half: Optional[int] = None
    team_role: Optional[list] = None
    uuid: Optional[str] = None


@dataclass
class Map:
    asset_path: Optional[str] = None
    callout: Optional[list] = None
    coordinate: Optional[str] = None
    data: Optional[dict] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    list_view_icon: Optional[str] = None
    map_url: Optional[str] = None
    narrative_description: Optional[str] = None
    splash: Optional[str] = None
    status: Optional[int] = None
    tactical_description: Optional[str] = None
    uuid: Optional[str] = None
    x_multiplier: Optional[float] = None
    x_scalar_to_add: Optional[float] = None
    y_multiplier: Optional[float] = None
    y_scalar_to_add: Optional[float] = None


@dataclass
class MapLoadMatch:
    id: str


@dataclass
class MapListMatch:
    asset_path: Optional[str] = None
    callout: Optional[list] = None
    coordinate: Optional[str] = None
    data: Optional[dict] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    list_view_icon: Optional[str] = None
    map_url: Optional[str] = None
    narrative_description: Optional[str] = None
    splash: Optional[str] = None
    status: Optional[int] = None
    tactical_description: Optional[str] = None
    uuid: Optional[str] = None
    x_multiplier: Optional[float] = None
    x_scalar_to_add: Optional[float] = None
    y_multiplier: Optional[float] = None
    y_scalar_to_add: Optional[float] = None


@dataclass
class Weapon:
    asset_path: Optional[str] = None
    category: Optional[str] = None
    data: Optional[dict] = None
    default_skin_uuid: Optional[str] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    kill_stream_icon: Optional[str] = None
    shop_data: Optional[dict] = None
    skin: Optional[list] = None
    status: Optional[int] = None
    uuid: Optional[str] = None
    weapon_stat: Optional[dict] = None


@dataclass
class WeaponLoadMatch:
    id: str


@dataclass
class WeaponListMatch:
    asset_path: Optional[str] = None
    category: Optional[str] = None
    data: Optional[dict] = None
    default_skin_uuid: Optional[str] = None
    display_icon: Optional[str] = None
    display_name: Optional[str] = None
    kill_stream_icon: Optional[str] = None
    shop_data: Optional[dict] = None
    skin: Optional[list] = None
    status: Optional[int] = None
    uuid: Optional[str] = None
    weapon_stat: Optional[dict] = None

