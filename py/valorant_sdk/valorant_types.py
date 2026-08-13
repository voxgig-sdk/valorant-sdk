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
    abilities: list
    assetPath: str
    background: str
    backgroundGradientColors: list
    bustPortrait: str
    characterTags: list
    description: str
    developerName: str
    displayIcon: str
    displayIconSmall: str
    displayName: str
    fullPortrait: str
    fullPortraitV2: str
    isAvailableForTest: bool
    isBaseContent: bool
    isFullPortraitRightFacing: bool
    isPlayableCharacter: bool
    killfeedPortrait: str
    role: dict
    uuid: str
    voiceLine: dict


class AgentLoadMatch(TypedDict):
    id: str


class AgentListMatch(TypedDict, total=False):
    abilities: list
    assetPath: str
    background: str
    backgroundGradientColors: list
    bustPortrait: str
    characterTags: list
    description: str
    developerName: str
    displayIcon: str
    displayIconSmall: str
    displayName: str
    fullPortrait: str
    fullPortraitV2: str
    isAvailableForTest: bool
    isBaseContent: bool
    isFullPortraitRightFacing: bool
    isPlayableCharacter: bool
    killfeedPortrait: str
    role: dict
    uuid: str
    voiceLine: dict


class Competitive(TypedDict, total=False):
    assetObjectName: str
    assetPath: str
    tiers: list
    uuid: str


class CompetitiveListMatch(TypedDict, total=False):
    assetObjectName: str
    assetPath: str
    tiers: list
    uuid: str


class Cosmetic(TypedDict, total=False):
    animationGif: str
    animationPng: str
    assetPath: str
    category: str
    displayIcon: str
    displayName: str
    fullIcon: str
    fullTransparentIcon: str
    hideIfNotOwned: bool
    isHiddenIfNotOwned: bool
    isNullSpray: bool
    largeArt: str
    levels: list
    smallArt: str
    themeUuid: str
    uuid: str
    wideArt: str


class CosmeticListMatch(TypedDict, total=False):
    animationGif: str
    animationPng: str
    assetPath: str
    category: str
    displayIcon: str
    displayName: str
    fullIcon: str
    fullTransparentIcon: str
    hideIfNotOwned: bool
    isHiddenIfNotOwned: bool
    isNullSpray: bool
    largeArt: str
    levels: list
    smallArt: str
    themeUuid: str
    uuid: str
    wideArt: str


class GameMode(TypedDict, total=False):
    allowsMatchTimeouts: bool
    assetPath: str
    displayIcon: str
    displayName: str
    duration: str
    economyType: str
    gameFeatureOverrides: list
    gameRuleBoolOverrides: list
    isMinimapHidden: bool
    isTeamVoiceAllowed: bool
    orbCount: int
    roundsPerHalf: int
    teamRoles: list
    uuid: str


class GameModeListMatch(TypedDict, total=False):
    allowsMatchTimeouts: bool
    assetPath: str
    displayIcon: str
    displayName: str
    duration: str
    economyType: str
    gameFeatureOverrides: list
    gameRuleBoolOverrides: list
    isMinimapHidden: bool
    isTeamVoiceAllowed: bool
    orbCount: int
    roundsPerHalf: int
    teamRoles: list
    uuid: str


class Map(TypedDict, total=False):
    assetPath: str
    callouts: list
    coordinates: str
    displayIcon: str
    displayName: str
    listViewIcon: str
    mapUrl: str
    narrativeDescription: str
    splash: str
    tacticalDescription: str
    uuid: str
    xMultiplier: float
    xScalarToAdd: float
    yMultiplier: float
    yScalarToAdd: float


class MapLoadMatch(TypedDict):
    id: str


class MapListMatch(TypedDict, total=False):
    assetPath: str
    callouts: list
    coordinates: str
    displayIcon: str
    displayName: str
    listViewIcon: str
    mapUrl: str
    narrativeDescription: str
    splash: str
    tacticalDescription: str
    uuid: str
    xMultiplier: float
    xScalarToAdd: float
    yMultiplier: float
    yScalarToAdd: float


class Weapon(TypedDict, total=False):
    assetPath: str
    category: str
    defaultSkinUuid: str
    displayIcon: str
    displayName: str
    killStreamIcon: str
    shopData: dict
    skins: list
    uuid: str
    weaponStats: dict


class WeaponLoadMatch(TypedDict):
    id: str


class WeaponListMatch(TypedDict, total=False):
    assetPath: str
    category: str
    defaultSkinUuid: str
    displayIcon: str
    displayName: str
    killStreamIcon: str
    shopData: dict
    skins: list
    uuid: str
    weaponStats: dict
