package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Valorant",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://valorant-api.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"agent": map[string]any{},
				"competitive": map[string]any{},
				"cosmetic": map[string]any{},
				"game_mode": map[string]any{},
				"map": map[string]any{},
				"weapon": map[string]any{},
			},
		},
		"entity": map[string]any{
			"agent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abilities",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "assetPath",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "backgroundGradientColors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "bustPortrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "characterTags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "developerName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIconSmall",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullPortrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullPortraitV2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isAvailableForTest",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isBaseContent",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isFullPortraitRightFacing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isPlayableCharacter",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "killfeedPortrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voiceLine",
						"type": "`$OBJECT`",
					},
				},
				"name": "agent",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "is_playable_character",
											"orig": "is_playable_character",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agents",
								"parts": []any{
									"v1",
									"agents",
								},
								"select": map[string]any{
									"exist": []any{
										"is_playable_character",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "uuid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agents/{uuid}",
								"parts": []any{
									"v1",
									"agents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uuid": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"competitive": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assetObjectName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assetPath",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tiers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
				},
				"name": "competitive",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/competitivetiers",
								"parts": []any{
									"v1",
									"competitivetiers",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cosmetic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "animationGif",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "animationPng",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assetPath",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullTransparentIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hideIfNotOwned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isHiddenIfNotOwned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isNullSpray",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "largeArt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "levels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "smallArt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "themeUuid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wideArt",
						"type": "`$STRING`",
					},
				},
				"name": "cosmetic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/buddies",
								"parts": []any{
									"v1",
									"buddies",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cards",
								"parts": []any{
									"v1",
									"cards",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/sprays",
								"parts": []any{
									"v1",
									"sprays",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"game_mode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowsMatchTimeouts",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetPath",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "economyType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gameFeatureOverrides",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "gameRuleBoolOverrides",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "isMinimapHidden",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isTeamVoiceAllowed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "orbCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "roundsPerHalf",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "teamRoles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
				},
				"name": "game_mode",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/gamemodes",
								"parts": []any{
									"v1",
									"gamemodes",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"map": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assetPath",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "callouts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "coordinates",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "listViewIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mapUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "narrativeDescription",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "splash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tacticalDescription",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "xMultiplier",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "xScalarToAdd",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "yMultiplier",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "yScalarToAdd",
						"type": "`$NUMBER`",
					},
				},
				"name": "map",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/maps",
								"parts": []any{
									"v1",
									"maps",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "uuid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/maps/{uuid}",
								"parts": []any{
									"v1",
									"maps",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uuid": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"weapon": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assetPath",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "defaultSkinUuid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "killStreamIcon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shopData",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "skins",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weaponStats",
						"type": "`$OBJECT`",
					},
				},
				"name": "weapon",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/weapons",
								"parts": []any{
									"v1",
									"weapons",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "uuid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "en-US",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/weapons/{uuid}",
								"parts": []any{
									"v1",
									"weapons",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uuid": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
