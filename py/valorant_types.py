# Typed models for the Valorant SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Agent(TypedDict, total=False):
    ability: list
    asset_path: str
    background: str
    background_gradient_color: list
    bust_portrait: str
    character_tag: list
    data: dict
    description: str
    developer_name: str
    display_icon: str
    display_icon_small: str
    display_name: str
    full_portrait: str
    full_portrait_v2: str
    is_available_for_test: bool
    is_base_content: bool
    is_full_portrait_right_facing: bool
    is_playable_character: bool
    killfeed_portrait: str
    role: dict
    status: int
    uuid: str
    voice_line: dict


class AgentLoadMatch(TypedDict):
    id: str


class AgentListMatch(TypedDict, total=False):
    ability: list
    asset_path: str
    background: str
    background_gradient_color: list
    bust_portrait: str
    character_tag: list
    data: dict
    description: str
    developer_name: str
    display_icon: str
    display_icon_small: str
    display_name: str
    full_portrait: str
    full_portrait_v2: str
    is_available_for_test: bool
    is_base_content: bool
    is_full_portrait_right_facing: bool
    is_playable_character: bool
    killfeed_portrait: str
    role: dict
    status: int
    uuid: str
    voice_line: dict


class Competitive(TypedDict, total=False):
    asset_object_name: str
    asset_path: str
    tier: list
    uuid: str


class CompetitiveListMatch(TypedDict, total=False):
    asset_object_name: str
    asset_path: str
    tier: list
    uuid: str


class Cosmetic(TypedDict, total=False):
    animation_gif: str
    animation_png: str
    asset_path: str
    category: str
    display_icon: str
    display_name: str
    full_icon: str
    full_transparent_icon: str
    hide_if_not_owned: bool
    is_hidden_if_not_owned: bool
    is_null_spray: bool
    large_art: str
    level: list
    small_art: str
    theme_uuid: str
    uuid: str
    wide_art: str


class CosmeticListMatch(TypedDict, total=False):
    animation_gif: str
    animation_png: str
    asset_path: str
    category: str
    display_icon: str
    display_name: str
    full_icon: str
    full_transparent_icon: str
    hide_if_not_owned: bool
    is_hidden_if_not_owned: bool
    is_null_spray: bool
    large_art: str
    level: list
    small_art: str
    theme_uuid: str
    uuid: str
    wide_art: str


class GameMode(TypedDict, total=False):
    allows_match_timeout: bool
    asset_path: str
    display_icon: str
    display_name: str
    duration: str
    economy_type: str
    game_feature_override: list
    game_rule_bool_override: list
    is_minimap_hidden: bool
    is_team_voice_allowed: bool
    orb_count: int
    rounds_per_half: int
    team_role: list
    uuid: str


class GameModeListMatch(TypedDict, total=False):
    allows_match_timeout: bool
    asset_path: str
    display_icon: str
    display_name: str
    duration: str
    economy_type: str
    game_feature_override: list
    game_rule_bool_override: list
    is_minimap_hidden: bool
    is_team_voice_allowed: bool
    orb_count: int
    rounds_per_half: int
    team_role: list
    uuid: str


class Map(TypedDict, total=False):
    asset_path: str
    callout: list
    coordinate: str
    data: dict
    display_icon: str
    display_name: str
    list_view_icon: str
    map_url: str
    narrative_description: str
    splash: str
    status: int
    tactical_description: str
    uuid: str
    x_multiplier: float
    x_scalar_to_add: float
    y_multiplier: float
    y_scalar_to_add: float


class MapLoadMatch(TypedDict):
    id: str


class MapListMatch(TypedDict, total=False):
    asset_path: str
    callout: list
    coordinate: str
    data: dict
    display_icon: str
    display_name: str
    list_view_icon: str
    map_url: str
    narrative_description: str
    splash: str
    status: int
    tactical_description: str
    uuid: str
    x_multiplier: float
    x_scalar_to_add: float
    y_multiplier: float
    y_scalar_to_add: float


class Weapon(TypedDict, total=False):
    asset_path: str
    category: str
    data: dict
    default_skin_uuid: str
    display_icon: str
    display_name: str
    kill_stream_icon: str
    shop_data: dict
    skin: list
    status: int
    uuid: str
    weapon_stat: dict


class WeaponLoadMatch(TypedDict):
    id: str


class WeaponListMatch(TypedDict, total=False):
    asset_path: str
    category: str
    data: dict
    default_skin_uuid: str
    display_icon: str
    display_name: str
    kill_stream_icon: str
    shop_data: dict
    skin: list
    status: int
    uuid: str
    weapon_stat: dict
