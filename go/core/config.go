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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"format": "uri",
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
						"format": "uri",
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
						"format": "uri",
						"name": "displayIcon",
						"short": "URL to the agent's display icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
						"format": "uri",
						"name": "fullPortrait",
						"short": "URL to the agent's full portrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "fullPortraitV2",
						"short": "URL to the agent's full portrait version 2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
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
						"format": "uri",
						"name": "killfeedPortrait",
						"short": "URL to the agent's killfeed portrait",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "uuid",
						"name": "uuid",
						"short": "Unique identifier for the agent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voiceLine",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
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
								"parts": []any{
									"v1",
									"agents",
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
								"rename": map[string]any{
									"param": map[string]any{
										"uuid": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"v1",
									"agents",
									"{id}",
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
						"format": "uuid",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "competitivetiers",
									},
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
								"parts": []any{
									"v1",
									"competitivetiers",
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
						"format": "uri",
						"name": "animationGif",
						"short": "URL to the spray's animation GIF",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
						"format": "uri",
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
						"format": "uri",
						"name": "fullIcon",
						"short": "URL to the spray's full icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
						"format": "uri",
						"name": "largeArt",
						"short": "URL to the card's large art",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "levels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "uri",
						"name": "smallArt",
						"short": "URL to the card's small art",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "themeUuid",
						"short": "UUID of the theme",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "uuid",
						"short": "Unique identifier for the buddy",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "buddies",
									},
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
								"parts": []any{
									"v1",
									"buddies",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "cards",
									},
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
								"parts": []any{
									"v1",
									"cards",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "sprays",
									},
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
								"parts": []any{
									"v1",
									"sprays",
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
						"format": "uri",
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
						"format": "uuid",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "gamemodes",
									},
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
								"parts": []any{
									"v1",
									"gamemodes",
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
						"format": "uri",
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
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "listViewIcon",
						"short": "URL to the map's list view icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
						"format": "uri",
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
						"format": "uuid",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "maps",
									},
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
								"parts": []any{
									"v1",
									"maps",
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
								"rename": map[string]any{
									"param": map[string]any{
										"uuid": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "maps",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"v1",
									"maps",
									"{id}",
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
						"format": "uuid",
						"name": "defaultSkinUuid",
						"short": "UUID of the default skin",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
						"format": "uuid",
						"name": "uuid",
						"short": "Unique identifier for the weapon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weaponStats",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "weapons",
									},
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
								"parts": []any{
									"v1",
									"weapons",
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
								"rename": map[string]any{
									"param": map[string]any{
										"uuid": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "weapons",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"v1",
									"weapons",
									"{id}",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
