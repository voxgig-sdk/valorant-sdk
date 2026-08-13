// Typed models for the Valorant SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Agent {
  abilities?: any[]
  assetPath?: string
  background?: string
  backgroundGradientColors?: any[]
  bustPortrait?: string
  characterTags?: any[]
  description?: string
  developerName?: string
  displayIcon?: string
  displayIconSmall?: string
  displayName?: string
  fullPortrait?: string
  fullPortraitV2?: string
  isAvailableForTest?: boolean
  isBaseContent?: boolean
  isFullPortraitRightFacing?: boolean
  isPlayableCharacter?: boolean
  killfeedPortrait?: string
  role?: Record<string, any>
  uuid?: string
  voiceLine?: Record<string, any>
}

export interface AgentLoadMatch {
  id: string
}

export interface AgentListMatch {
  abilities?: any[]
  assetPath?: string
  background?: string
  backgroundGradientColors?: any[]
  bustPortrait?: string
  characterTags?: any[]
  description?: string
  developerName?: string
  displayIcon?: string
  displayIconSmall?: string
  displayName?: string
  fullPortrait?: string
  fullPortraitV2?: string
  isAvailableForTest?: boolean
  isBaseContent?: boolean
  isFullPortraitRightFacing?: boolean
  isPlayableCharacter?: boolean
  killfeedPortrait?: string
  role?: Record<string, any>
  uuid?: string
  voiceLine?: Record<string, any>
}

export interface Competitive {
  assetObjectName?: string
  assetPath?: string
  tiers?: any[]
  uuid?: string
}

export interface CompetitiveListMatch {
  assetObjectName?: string
  assetPath?: string
  tiers?: any[]
  uuid?: string
}

export interface Cosmetic {
  animationGif?: string
  animationPng?: string
  assetPath?: string
  category?: string
  displayIcon?: string
  displayName?: string
  fullIcon?: string
  fullTransparentIcon?: string
  hideIfNotOwned?: boolean
  isHiddenIfNotOwned?: boolean
  isNullSpray?: boolean
  largeArt?: string
  levels?: any[]
  smallArt?: string
  themeUuid?: string
  uuid?: string
  wideArt?: string
}

export interface CosmeticListMatch {
  animationGif?: string
  animationPng?: string
  assetPath?: string
  category?: string
  displayIcon?: string
  displayName?: string
  fullIcon?: string
  fullTransparentIcon?: string
  hideIfNotOwned?: boolean
  isHiddenIfNotOwned?: boolean
  isNullSpray?: boolean
  largeArt?: string
  levels?: any[]
  smallArt?: string
  themeUuid?: string
  uuid?: string
  wideArt?: string
}

export interface GameMode {
  allowsMatchTimeouts?: boolean
  assetPath?: string
  displayIcon?: string
  displayName?: string
  duration?: string
  economyType?: string
  gameFeatureOverrides?: any[]
  gameRuleBoolOverrides?: any[]
  isMinimapHidden?: boolean
  isTeamVoiceAllowed?: boolean
  orbCount?: number
  roundsPerHalf?: number
  teamRoles?: any[]
  uuid?: string
}

export interface GameModeListMatch {
  allowsMatchTimeouts?: boolean
  assetPath?: string
  displayIcon?: string
  displayName?: string
  duration?: string
  economyType?: string
  gameFeatureOverrides?: any[]
  gameRuleBoolOverrides?: any[]
  isMinimapHidden?: boolean
  isTeamVoiceAllowed?: boolean
  orbCount?: number
  roundsPerHalf?: number
  teamRoles?: any[]
  uuid?: string
}

export interface Map {
  assetPath?: string
  callouts?: any[]
  coordinates?: string
  displayIcon?: string
  displayName?: string
  listViewIcon?: string
  mapUrl?: string
  narrativeDescription?: string
  splash?: string
  tacticalDescription?: string
  uuid?: string
  xMultiplier?: number
  xScalarToAdd?: number
  yMultiplier?: number
  yScalarToAdd?: number
}

export interface MapLoadMatch {
  id: string
}

export interface MapListMatch {
  assetPath?: string
  callouts?: any[]
  coordinates?: string
  displayIcon?: string
  displayName?: string
  listViewIcon?: string
  mapUrl?: string
  narrativeDescription?: string
  splash?: string
  tacticalDescription?: string
  uuid?: string
  xMultiplier?: number
  xScalarToAdd?: number
  yMultiplier?: number
  yScalarToAdd?: number
}

export interface Weapon {
  assetPath?: string
  category?: string
  defaultSkinUuid?: string
  displayIcon?: string
  displayName?: string
  killStreamIcon?: string
  shopData?: Record<string, any>
  skins?: any[]
  uuid?: string
  weaponStats?: Record<string, any>
}

export interface WeaponLoadMatch {
  id: string
}

export interface WeaponListMatch {
  assetPath?: string
  category?: string
  defaultSkinUuid?: string
  displayIcon?: string
  displayName?: string
  killStreamIcon?: string
  shopData?: Record<string, any>
  skins?: any[]
  uuid?: string
  weaponStats?: Record<string, any>
}

