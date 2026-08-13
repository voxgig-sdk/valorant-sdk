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
    public ?array $abilities = null;
    public ?string $assetPath = null;
    public ?string $background = null;
    public ?array $backgroundGradientColors = null;
    public ?string $bustPortrait = null;
    public ?array $characterTags = null;
    public ?string $description = null;
    public ?string $developerName = null;
    public ?string $displayIcon = null;
    public ?string $displayIconSmall = null;
    public ?string $displayName = null;
    public ?string $fullPortrait = null;
    public ?string $fullPortraitV2 = null;
    public ?bool $isAvailableForTest = null;
    public ?bool $isBaseContent = null;
    public ?bool $isFullPortraitRightFacing = null;
    public ?bool $isPlayableCharacter = null;
    public ?string $killfeedPortrait = null;
    public ?array $role = null;
    public ?string $uuid = null;
    public ?array $voiceLine = null;
}

/** Request payload for Agent#load. */
class AgentLoadMatch
{
    public string $id;
}

/** Request payload for Agent#list. */
class AgentListMatch
{
    public ?array $abilities = null;
    public ?string $assetPath = null;
    public ?string $background = null;
    public ?array $backgroundGradientColors = null;
    public ?string $bustPortrait = null;
    public ?array $characterTags = null;
    public ?string $description = null;
    public ?string $developerName = null;
    public ?string $displayIcon = null;
    public ?string $displayIconSmall = null;
    public ?string $displayName = null;
    public ?string $fullPortrait = null;
    public ?string $fullPortraitV2 = null;
    public ?bool $isAvailableForTest = null;
    public ?bool $isBaseContent = null;
    public ?bool $isFullPortraitRightFacing = null;
    public ?bool $isPlayableCharacter = null;
    public ?string $killfeedPortrait = null;
    public ?array $role = null;
    public ?string $uuid = null;
    public ?array $voiceLine = null;
}

/** Competitive entity data model. */
class Competitive
{
    public ?string $assetObjectName = null;
    public ?string $assetPath = null;
    public ?array $tiers = null;
    public ?string $uuid = null;
}

/** Request payload for Competitive#list. */
class CompetitiveListMatch
{
    public ?string $assetObjectName = null;
    public ?string $assetPath = null;
    public ?array $tiers = null;
    public ?string $uuid = null;
}

/** Cosmetic entity data model. */
class Cosmetic
{
    public ?string $animationGif = null;
    public ?string $animationPng = null;
    public ?string $assetPath = null;
    public ?string $category = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $fullIcon = null;
    public ?string $fullTransparentIcon = null;
    public ?bool $hideIfNotOwned = null;
    public ?bool $isHiddenIfNotOwned = null;
    public ?bool $isNullSpray = null;
    public ?string $largeArt = null;
    public ?array $levels = null;
    public ?string $smallArt = null;
    public ?string $themeUuid = null;
    public ?string $uuid = null;
    public ?string $wideArt = null;
}

/** Request payload for Cosmetic#list. */
class CosmeticListMatch
{
    public ?string $animationGif = null;
    public ?string $animationPng = null;
    public ?string $assetPath = null;
    public ?string $category = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $fullIcon = null;
    public ?string $fullTransparentIcon = null;
    public ?bool $hideIfNotOwned = null;
    public ?bool $isHiddenIfNotOwned = null;
    public ?bool $isNullSpray = null;
    public ?string $largeArt = null;
    public ?array $levels = null;
    public ?string $smallArt = null;
    public ?string $themeUuid = null;
    public ?string $uuid = null;
    public ?string $wideArt = null;
}

/** GameMode entity data model. */
class GameMode
{
    public ?bool $allowsMatchTimeouts = null;
    public ?string $assetPath = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $duration = null;
    public ?string $economyType = null;
    public ?array $gameFeatureOverrides = null;
    public ?array $gameRuleBoolOverrides = null;
    public ?bool $isMinimapHidden = null;
    public ?bool $isTeamVoiceAllowed = null;
    public ?int $orbCount = null;
    public ?int $roundsPerHalf = null;
    public ?array $teamRoles = null;
    public ?string $uuid = null;
}

/** Request payload for GameMode#list. */
class GameModeListMatch
{
    public ?bool $allowsMatchTimeouts = null;
    public ?string $assetPath = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $duration = null;
    public ?string $economyType = null;
    public ?array $gameFeatureOverrides = null;
    public ?array $gameRuleBoolOverrides = null;
    public ?bool $isMinimapHidden = null;
    public ?bool $isTeamVoiceAllowed = null;
    public ?int $orbCount = null;
    public ?int $roundsPerHalf = null;
    public ?array $teamRoles = null;
    public ?string $uuid = null;
}

/** Map entity data model. */
class Map
{
    public ?string $assetPath = null;
    public ?array $callouts = null;
    public ?string $coordinates = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $listViewIcon = null;
    public ?string $mapUrl = null;
    public ?string $narrativeDescription = null;
    public ?string $splash = null;
    public ?string $tacticalDescription = null;
    public ?string $uuid = null;
    public ?float $xMultiplier = null;
    public ?float $xScalarToAdd = null;
    public ?float $yMultiplier = null;
    public ?float $yScalarToAdd = null;
}

/** Request payload for Map#load. */
class MapLoadMatch
{
    public string $id;
}

/** Request payload for Map#list. */
class MapListMatch
{
    public ?string $assetPath = null;
    public ?array $callouts = null;
    public ?string $coordinates = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $listViewIcon = null;
    public ?string $mapUrl = null;
    public ?string $narrativeDescription = null;
    public ?string $splash = null;
    public ?string $tacticalDescription = null;
    public ?string $uuid = null;
    public ?float $xMultiplier = null;
    public ?float $xScalarToAdd = null;
    public ?float $yMultiplier = null;
    public ?float $yScalarToAdd = null;
}

/** Weapon entity data model. */
class Weapon
{
    public ?string $assetPath = null;
    public ?string $category = null;
    public ?string $defaultSkinUuid = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $killStreamIcon = null;
    public ?array $shopData = null;
    public ?array $skins = null;
    public ?string $uuid = null;
    public ?array $weaponStats = null;
}

/** Request payload for Weapon#load. */
class WeaponLoadMatch
{
    public string $id;
}

/** Request payload for Weapon#list. */
class WeaponListMatch
{
    public ?string $assetPath = null;
    public ?string $category = null;
    public ?string $defaultSkinUuid = null;
    public ?string $displayIcon = null;
    public ?string $displayName = null;
    public ?string $killStreamIcon = null;
    public ?array $shopData = null;
    public ?array $skins = null;
    public ?string $uuid = null;
    public ?array $weaponStats = null;
}

