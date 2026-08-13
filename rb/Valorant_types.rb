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
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] backgroundGradientColors
#   @return [Array, nil]
#
# @!attribute [rw] bustPortrait
#   @return [String, nil]
#
# @!attribute [rw] characterTags
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developerName
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayIconSmall
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] fullPortrait
#   @return [String, nil]
#
# @!attribute [rw] fullPortraitV2
#   @return [String, nil]
#
# @!attribute [rw] isAvailableForTest
#   @return [Boolean, nil]
#
# @!attribute [rw] isBaseContent
#   @return [Boolean, nil]
#
# @!attribute [rw] isFullPortraitRightFacing
#   @return [Boolean, nil]
#
# @!attribute [rw] isPlayableCharacter
#   @return [Boolean, nil]
#
# @!attribute [rw] killfeedPortrait
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Hash, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] voiceLine
#   @return [Hash, nil]
Agent = Struct.new(
  :abilities,
  :assetPath,
  :background,
  :backgroundGradientColors,
  :bustPortrait,
  :characterTags,
  :description,
  :developerName,
  :displayIcon,
  :displayIconSmall,
  :displayName,
  :fullPortrait,
  :fullPortraitV2,
  :isAvailableForTest,
  :isBaseContent,
  :isFullPortraitRightFacing,
  :isPlayableCharacter,
  :killfeedPortrait,
  :role,
  :uuid,
  :voiceLine,
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
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] backgroundGradientColors
#   @return [Array, nil]
#
# @!attribute [rw] bustPortrait
#   @return [String, nil]
#
# @!attribute [rw] characterTags
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developerName
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayIconSmall
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] fullPortrait
#   @return [String, nil]
#
# @!attribute [rw] fullPortraitV2
#   @return [String, nil]
#
# @!attribute [rw] isAvailableForTest
#   @return [Boolean, nil]
#
# @!attribute [rw] isBaseContent
#   @return [Boolean, nil]
#
# @!attribute [rw] isFullPortraitRightFacing
#   @return [Boolean, nil]
#
# @!attribute [rw] isPlayableCharacter
#   @return [Boolean, nil]
#
# @!attribute [rw] killfeedPortrait
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Hash, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] voiceLine
#   @return [Hash, nil]
AgentListMatch = Struct.new(
  :abilities,
  :assetPath,
  :background,
  :backgroundGradientColors,
  :bustPortrait,
  :characterTags,
  :description,
  :developerName,
  :displayIcon,
  :displayIconSmall,
  :displayName,
  :fullPortrait,
  :fullPortraitV2,
  :isAvailableForTest,
  :isBaseContent,
  :isFullPortraitRightFacing,
  :isPlayableCharacter,
  :killfeedPortrait,
  :role,
  :uuid,
  :voiceLine,
  keyword_init: true
)

# Competitive entity data model.
#
# @!attribute [rw] assetObjectName
#   @return [String, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] tiers
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
Competitive = Struct.new(
  :assetObjectName,
  :assetPath,
  :tiers,
  :uuid,
  keyword_init: true
)

# Request payload for Competitive#list.
#
# @!attribute [rw] assetObjectName
#   @return [String, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] tiers
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
CompetitiveListMatch = Struct.new(
  :assetObjectName,
  :assetPath,
  :tiers,
  :uuid,
  keyword_init: true
)

# Cosmetic entity data model.
#
# @!attribute [rw] animationGif
#   @return [String, nil]
#
# @!attribute [rw] animationPng
#   @return [String, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] fullIcon
#   @return [String, nil]
#
# @!attribute [rw] fullTransparentIcon
#   @return [String, nil]
#
# @!attribute [rw] hideIfNotOwned
#   @return [Boolean, nil]
#
# @!attribute [rw] isHiddenIfNotOwned
#   @return [Boolean, nil]
#
# @!attribute [rw] isNullSpray
#   @return [Boolean, nil]
#
# @!attribute [rw] largeArt
#   @return [String, nil]
#
# @!attribute [rw] levels
#   @return [Array, nil]
#
# @!attribute [rw] smallArt
#   @return [String, nil]
#
# @!attribute [rw] themeUuid
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] wideArt
#   @return [String, nil]
Cosmetic = Struct.new(
  :animationGif,
  :animationPng,
  :assetPath,
  :category,
  :displayIcon,
  :displayName,
  :fullIcon,
  :fullTransparentIcon,
  :hideIfNotOwned,
  :isHiddenIfNotOwned,
  :isNullSpray,
  :largeArt,
  :levels,
  :smallArt,
  :themeUuid,
  :uuid,
  :wideArt,
  keyword_init: true
)

# Request payload for Cosmetic#list.
#
# @!attribute [rw] animationGif
#   @return [String, nil]
#
# @!attribute [rw] animationPng
#   @return [String, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] fullIcon
#   @return [String, nil]
#
# @!attribute [rw] fullTransparentIcon
#   @return [String, nil]
#
# @!attribute [rw] hideIfNotOwned
#   @return [Boolean, nil]
#
# @!attribute [rw] isHiddenIfNotOwned
#   @return [Boolean, nil]
#
# @!attribute [rw] isNullSpray
#   @return [Boolean, nil]
#
# @!attribute [rw] largeArt
#   @return [String, nil]
#
# @!attribute [rw] levels
#   @return [Array, nil]
#
# @!attribute [rw] smallArt
#   @return [String, nil]
#
# @!attribute [rw] themeUuid
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] wideArt
#   @return [String, nil]
CosmeticListMatch = Struct.new(
  :animationGif,
  :animationPng,
  :assetPath,
  :category,
  :displayIcon,
  :displayName,
  :fullIcon,
  :fullTransparentIcon,
  :hideIfNotOwned,
  :isHiddenIfNotOwned,
  :isNullSpray,
  :largeArt,
  :levels,
  :smallArt,
  :themeUuid,
  :uuid,
  :wideArt,
  keyword_init: true
)

# GameMode entity data model.
#
# @!attribute [rw] allowsMatchTimeouts
#   @return [Boolean, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] economyType
#   @return [String, nil]
#
# @!attribute [rw] gameFeatureOverrides
#   @return [Array, nil]
#
# @!attribute [rw] gameRuleBoolOverrides
#   @return [Array, nil]
#
# @!attribute [rw] isMinimapHidden
#   @return [Boolean, nil]
#
# @!attribute [rw] isTeamVoiceAllowed
#   @return [Boolean, nil]
#
# @!attribute [rw] orbCount
#   @return [Integer, nil]
#
# @!attribute [rw] roundsPerHalf
#   @return [Integer, nil]
#
# @!attribute [rw] teamRoles
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
GameMode = Struct.new(
  :allowsMatchTimeouts,
  :assetPath,
  :displayIcon,
  :displayName,
  :duration,
  :economyType,
  :gameFeatureOverrides,
  :gameRuleBoolOverrides,
  :isMinimapHidden,
  :isTeamVoiceAllowed,
  :orbCount,
  :roundsPerHalf,
  :teamRoles,
  :uuid,
  keyword_init: true
)

# Request payload for GameMode#list.
#
# @!attribute [rw] allowsMatchTimeouts
#   @return [Boolean, nil]
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] economyType
#   @return [String, nil]
#
# @!attribute [rw] gameFeatureOverrides
#   @return [Array, nil]
#
# @!attribute [rw] gameRuleBoolOverrides
#   @return [Array, nil]
#
# @!attribute [rw] isMinimapHidden
#   @return [Boolean, nil]
#
# @!attribute [rw] isTeamVoiceAllowed
#   @return [Boolean, nil]
#
# @!attribute [rw] orbCount
#   @return [Integer, nil]
#
# @!attribute [rw] roundsPerHalf
#   @return [Integer, nil]
#
# @!attribute [rw] teamRoles
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
GameModeListMatch = Struct.new(
  :allowsMatchTimeouts,
  :assetPath,
  :displayIcon,
  :displayName,
  :duration,
  :economyType,
  :gameFeatureOverrides,
  :gameRuleBoolOverrides,
  :isMinimapHidden,
  :isTeamVoiceAllowed,
  :orbCount,
  :roundsPerHalf,
  :teamRoles,
  :uuid,
  keyword_init: true
)

# Map entity data model.
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] callouts
#   @return [Array, nil]
#
# @!attribute [rw] coordinates
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] listViewIcon
#   @return [String, nil]
#
# @!attribute [rw] mapUrl
#   @return [String, nil]
#
# @!attribute [rw] narrativeDescription
#   @return [String, nil]
#
# @!attribute [rw] splash
#   @return [String, nil]
#
# @!attribute [rw] tacticalDescription
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] xMultiplier
#   @return [Float, nil]
#
# @!attribute [rw] xScalarToAdd
#   @return [Float, nil]
#
# @!attribute [rw] yMultiplier
#   @return [Float, nil]
#
# @!attribute [rw] yScalarToAdd
#   @return [Float, nil]
Map = Struct.new(
  :assetPath,
  :callouts,
  :coordinates,
  :displayIcon,
  :displayName,
  :listViewIcon,
  :mapUrl,
  :narrativeDescription,
  :splash,
  :tacticalDescription,
  :uuid,
  :xMultiplier,
  :xScalarToAdd,
  :yMultiplier,
  :yScalarToAdd,
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
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] callouts
#   @return [Array, nil]
#
# @!attribute [rw] coordinates
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] listViewIcon
#   @return [String, nil]
#
# @!attribute [rw] mapUrl
#   @return [String, nil]
#
# @!attribute [rw] narrativeDescription
#   @return [String, nil]
#
# @!attribute [rw] splash
#   @return [String, nil]
#
# @!attribute [rw] tacticalDescription
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] xMultiplier
#   @return [Float, nil]
#
# @!attribute [rw] xScalarToAdd
#   @return [Float, nil]
#
# @!attribute [rw] yMultiplier
#   @return [Float, nil]
#
# @!attribute [rw] yScalarToAdd
#   @return [Float, nil]
MapListMatch = Struct.new(
  :assetPath,
  :callouts,
  :coordinates,
  :displayIcon,
  :displayName,
  :listViewIcon,
  :mapUrl,
  :narrativeDescription,
  :splash,
  :tacticalDescription,
  :uuid,
  :xMultiplier,
  :xScalarToAdd,
  :yMultiplier,
  :yScalarToAdd,
  keyword_init: true
)

# Weapon entity data model.
#
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] defaultSkinUuid
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] killStreamIcon
#   @return [String, nil]
#
# @!attribute [rw] shopData
#   @return [Hash, nil]
#
# @!attribute [rw] skins
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] weaponStats
#   @return [Hash, nil]
Weapon = Struct.new(
  :assetPath,
  :category,
  :defaultSkinUuid,
  :displayIcon,
  :displayName,
  :killStreamIcon,
  :shopData,
  :skins,
  :uuid,
  :weaponStats,
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
# @!attribute [rw] assetPath
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] defaultSkinUuid
#   @return [String, nil]
#
# @!attribute [rw] displayIcon
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] killStreamIcon
#   @return [String, nil]
#
# @!attribute [rw] shopData
#   @return [Hash, nil]
#
# @!attribute [rw] skins
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] weaponStats
#   @return [Hash, nil]
WeaponListMatch = Struct.new(
  :assetPath,
  :category,
  :defaultSkinUuid,
  :displayIcon,
  :displayName,
  :killStreamIcon,
  :shopData,
  :skins,
  :uuid,
  :weaponStats,
  keyword_init: true
)

