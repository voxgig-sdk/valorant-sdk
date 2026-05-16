package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAgentEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntity

var NewCompetitiveEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntity

var NewCosmeticEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntity

var NewGameModeEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntity

var NewMapEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntity

var NewWeaponEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntity

