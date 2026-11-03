package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAgentEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntityBase

var NewCompetitiveEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntityBase

var NewCosmeticEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntityBase

var NewGameModeEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntityBase

var NewMapEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntityBase

var NewWeaponEntityFunc func(client *ValorantSDK, entopts map[string]any) ValorantEntityBase

