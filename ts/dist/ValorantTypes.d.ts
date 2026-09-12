export interface Agent {
    abilities?: any[];
    assetPath?: string;
    background?: string;
    backgroundGradientColors?: any[];
    bustPortrait?: string;
    characterTags?: any[];
    description?: string;
    developerName?: string;
    displayIcon?: string;
    displayIconSmall?: string;
    displayName?: string;
    fullPortrait?: string;
    fullPortraitV2?: string;
    id?: string;
    isAvailableForTest?: boolean;
    isBaseContent?: boolean;
    isFullPortraitRightFacing?: boolean;
    isPlayableCharacter?: boolean;
    killfeedPortrait?: string;
    role?: Record<string, any>;
    uuid?: string;
    voiceLine?: Record<string, any>;
}
export interface AgentLoadMatch {
    id: string;
    language?: string;
}
export interface AgentListMatch {
    is_playable_character?: boolean;
    language?: string;
}
export interface Competitive {
    assetObjectName?: string;
    assetPath?: string;
    tiers?: any[];
    uuid?: string;
}
export interface CompetitiveListMatch {
    language?: string;
}
export interface Cosmetic {
    animationGif?: string;
    animationPng?: string;
    assetPath?: string;
    category?: string;
    displayIcon?: string;
    displayName?: string;
    fullIcon?: string;
    fullTransparentIcon?: string;
    hideIfNotOwned?: boolean;
    isHiddenIfNotOwned?: boolean;
    isNullSpray?: boolean;
    largeArt?: string;
    levels?: any[];
    smallArt?: string;
    themeUuid?: string;
    uuid?: string;
    wideArt?: string;
}
export interface CosmeticListMatch {
    language?: string;
}
export interface GameMode {
    allowsMatchTimeouts?: boolean;
    assetPath?: string;
    displayIcon?: string;
    displayName?: string;
    duration?: string;
    economyType?: string;
    gameFeatureOverrides?: any[];
    gameRuleBoolOverrides?: any[];
    isMinimapHidden?: boolean;
    isTeamVoiceAllowed?: boolean;
    orbCount?: number;
    roundsPerHalf?: number;
    teamRoles?: any[];
    uuid?: string;
}
export interface GameModeListMatch {
    language?: string;
}
export interface MapType {
    assetPath?: string;
    callouts?: any[];
    coordinates?: string;
    displayIcon?: string;
    displayName?: string;
    id?: string;
    listViewIcon?: string;
    mapUrl?: string;
    narrativeDescription?: string;
    splash?: string;
    tacticalDescription?: string;
    uuid?: string;
    xMultiplier?: number;
    xScalarToAdd?: number;
    yMultiplier?: number;
    yScalarToAdd?: number;
}
export interface MapLoadMatch {
    id: string;
    language?: string;
}
export interface MapListMatch {
    language?: string;
}
export interface Weapon {
    assetPath?: string;
    category?: string;
    defaultSkinUuid?: string;
    displayIcon?: string;
    displayName?: string;
    id?: string;
    killStreamIcon?: string;
    shopData?: Record<string, any>;
    skins?: any[];
    uuid?: string;
    weaponStats?: Record<string, any>;
}
export interface WeaponLoadMatch {
    id: string;
    language?: string;
}
export interface WeaponListMatch {
    language?: string;
}
