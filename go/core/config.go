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
			"slug": "valorant",
			"version": "0.0.1",
			"target": "go",
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
						"short": "Asset path in game files",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "background",
						"short": "URL to the agent's background image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "backgroundGradientColors",
						"short": "Gradient colors for the agent's background",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "bustPortrait",
						"short": "URL to the agent's bust portrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "characterTags",
						"short": "Tags associated with the character",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of the agent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "developerName",
						"short": "Internal developer name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"short": "URL to the agent's display icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIconSmall",
						"short": "URL to the agent's small display icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"short": "Display name of the agent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullPortrait",
						"short": "URL to the agent's full portrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullPortraitV2",
						"short": "URL to the agent's full portrait version 2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isAvailableForTest",
						"short": "Whether the agent is available for testing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isBaseContent",
						"short": "Whether the agent is base content",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isFullPortraitRightFacing",
						"short": "Whether the full portrait faces right",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isPlayableCharacter",
						"short": "Whether the agent is playable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "killfeedPortrait",
						"short": "URL to the agent's killfeed portrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "uuid",
						"short": "Unique identifier for the agent",
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
						"short": "Asset object name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assetPath",
						"short": "Asset path in game files",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tiers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uuid",
						"short": "Unique identifier for the competitive tier set",
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
						"short": "URL to the spray's animation GIF",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "animationPng",
						"short": "URL to the spray's animation PNG",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assetPath",
						"short": "Asset path in game files",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of the spray",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"short": "URL to the buddy's display icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"short": "Display name of the buddy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullIcon",
						"short": "URL to the spray's full icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullTransparentIcon",
						"short": "URL to the spray's full transparent icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hideIfNotOwned",
						"short": "Whether the spray is hidden if not owned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isHiddenIfNotOwned",
						"short": "Whether the buddy is hidden if not owned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isNullSpray",
						"short": "Whether this is a null spray",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "largeArt",
						"short": "URL to the card's large art",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "levels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "smallArt",
						"short": "URL to the card's small art",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "themeUuid",
						"short": "UUID of the theme",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uuid",
						"short": "Unique identifier for the buddy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wideArt",
						"short": "URL to the card's wide art",
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
						"short": "Whether match timeouts are allowed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetPath",
						"short": "Asset path in game files",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"short": "URL to the game mode's display icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"short": "Display name of the game mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"short": "Duration of the game mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "economyType",
						"short": "Type of economy system",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gameFeatureOverrides",
						"short": "Game feature overrides",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "gameRuleBoolOverrides",
						"short": "Game rule boolean overrides",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "isMinimapHidden",
						"short": "Whether the minimap is hidden",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isTeamVoiceAllowed",
						"short": "Whether team voice chat is allowed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "orbCount",
						"short": "Number of orbs in the game mode",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "roundsPerHalf",
						"short": "Number of rounds per half",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "teamRoles",
						"short": "Team roles in the game mode",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uuid",
						"short": "Unique identifier for the game mode",
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
						"short": "Asset path in game files",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "callouts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "coordinates",
						"short": "Geographic coordinates of the map location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"short": "URL to the map's display icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"short": "Display name of the map",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "listViewIcon",
						"short": "URL to the map's list view icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mapUrl",
						"short": "URL to the map overview",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "narrativeDescription",
						"short": "Narrative description of the map",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "splash",
						"short": "URL to the map's splash image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tacticalDescription",
						"short": "Tactical description of the map",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uuid",
						"short": "Unique identifier for the map",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "xMultiplier",
						"short": "X coordinate multiplier",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "xScalarToAdd",
						"short": "X scalar to add",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "yMultiplier",
						"short": "Y coordinate multiplier",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "yScalarToAdd",
						"short": "Y scalar to add",
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
						"short": "Asset path in game files",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Weapon category (e.g., Rifle, Pistol)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "defaultSkinUuid",
						"short": "UUID of the default skin",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayIcon",
						"short": "URL to the weapon's display icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"short": "Display name of the weapon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "killStreamIcon",
						"short": "URL to the weapon's kill stream icon",
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
						"short": "Unique identifier for the weapon",
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
