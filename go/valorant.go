package voxgigvalorantsdk

import (
	"github.com/voxgig-sdk/valorant-sdk/core"
	"github.com/voxgig-sdk/valorant-sdk/entity"
	"github.com/voxgig-sdk/valorant-sdk/feature"
	_ "github.com/voxgig-sdk/valorant-sdk/utility"
)

// Type aliases preserve external API.
type ValorantSDK = core.ValorantSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ValorantEntity = core.ValorantEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ValorantError = core.ValorantError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAgentEntityFunc = func(client *core.ValorantSDK, entopts map[string]any) core.ValorantEntity {
		return entity.NewAgentEntity(client, entopts)
	}
	core.NewCompetitiveEntityFunc = func(client *core.ValorantSDK, entopts map[string]any) core.ValorantEntity {
		return entity.NewCompetitiveEntity(client, entopts)
	}
	core.NewCosmeticEntityFunc = func(client *core.ValorantSDK, entopts map[string]any) core.ValorantEntity {
		return entity.NewCosmeticEntity(client, entopts)
	}
	core.NewGameModeEntityFunc = func(client *core.ValorantSDK, entopts map[string]any) core.ValorantEntity {
		return entity.NewGameModeEntity(client, entopts)
	}
	core.NewMapEntityFunc = func(client *core.ValorantSDK, entopts map[string]any) core.ValorantEntity {
		return entity.NewMapEntity(client, entopts)
	}
	core.NewWeaponEntityFunc = func(client *core.ValorantSDK, entopts map[string]any) core.ValorantEntity {
		return entity.NewWeaponEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewValorantSDK = core.NewValorantSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
