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
					"now": "`$FUNCTION`",
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
						"title": "Abilities",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "assetPath",
						"title": "Asset Path",
						"type": "`$STRING`",
						"short": "Asset path in game files",
					},
					map[string]any{
						"name": "background",
						"title": "Background",
						"type": "`$STRING`",
						"short": "URL to the agent's background image",
						"format": "uri",
					},
					map[string]any{
						"name": "backgroundGradientColors",
						"title": "Background Gradient Colors",
						"type": "`$ARRAY`",
						"short": "Gradient colors for the agent's background",
					},
					map[string]any{
						"name": "bustPortrait",
						"title": "Bust Portrait",
						"type": "`$STRING`",
						"short": "URL to the agent's bust portrait",
						"format": "uri",
					},
					map[string]any{
						"name": "characterTags",
						"title": "Character Tags",
						"type": "`$ARRAY`",
						"short": "Tags associated with the character",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the agent",
					},
					map[string]any{
						"name": "developerName",
						"title": "Developer Name",
						"type": "`$STRING`",
						"short": "Internal developer name",
					},
					map[string]any{
						"name": "displayIcon",
						"title": "Display Icon",
						"type": "`$STRING`",
						"short": "URL to the agent's display icon",
						"format": "uri",
					},
					map[string]any{
						"name": "displayIconSmall",
						"title": "Display Icon Small",
						"type": "`$STRING`",
						"short": "URL to the agent's small display icon",
						"format": "uri",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"short": "Display name of the agent",
					},
					map[string]any{
						"name": "fullPortrait",
						"title": "Full Portrait",
						"type": "`$STRING`",
						"short": "URL to the agent's full portrait",
						"format": "uri",
					},
					map[string]any{
						"name": "fullPortraitV2",
						"title": "Full Portrait V2",
						"type": "`$STRING`",
						"short": "URL to the agent's full portrait version 2",
						"format": "uri",
					},
					map[string]any{
						"name": "isAvailableForTest",
						"title": "Is Available For Test",
						"type": "`$BOOLEAN`",
						"short": "Whether the agent is available for testing",
					},
					map[string]any{
						"name": "isBaseContent",
						"title": "Is Base Content",
						"type": "`$BOOLEAN`",
						"short": "Whether the agent is base content",
					},
					map[string]any{
						"name": "isFullPortraitRightFacing",
						"title": "Is Full Portrait Right Facing",
						"type": "`$BOOLEAN`",
						"short": "Whether the full portrait faces right",
					},
					map[string]any{
						"name": "isPlayableCharacter",
						"title": "Is Playable Character",
						"type": "`$BOOLEAN`",
						"short": "Whether the agent is playable",
					},
					map[string]any{
						"name": "killfeedPortrait",
						"title": "Killfeed Portrait",
						"type": "`$STRING`",
						"short": "URL to the agent's killfeed portrait",
						"format": "uri",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "uuid",
						"title": "Uuid",
						"type": "`$STRING`",
						"short": "Unique identifier for the agent",
						"format": "uuid",
					},
					map[string]any{
						"name": "voiceLine",
						"title": "Voice Line",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "uuid",
					"name": "id",
				},
				"name": "agent",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "is_playable_character",
											"orig": "isPlayableCharacter",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "uuid",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agents/{uuid}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uuid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "uuid",
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
						"title": "Asset Object Name",
						"type": "`$STRING`",
						"short": "Asset object name",
					},
					map[string]any{
						"name": "assetPath",
						"title": "Asset Path",
						"type": "`$STRING`",
						"short": "Asset path in game files",
					},
					map[string]any{
						"name": "tiers",
						"title": "Tiers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uuid",
						"title": "Uuid",
						"type": "`$STRING`",
						"short": "Unique identifier for the competitive tier set",
						"format": "uuid",
					},
				},
				"name": "competitive",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"competitivetiers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Animation Gif",
						"type": "`$STRING`",
						"short": "URL to the spray's animation GIF",
						"format": "uri",
					},
					map[string]any{
						"name": "animationPng",
						"title": "Animation Png",
						"type": "`$STRING`",
						"short": "URL to the spray's animation PNG",
						"format": "uri",
					},
					map[string]any{
						"name": "assetPath",
						"title": "Asset Path",
						"type": "`$STRING`",
						"short": "Asset path in game files",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"short": "Category of the spray",
					},
					map[string]any{
						"name": "displayIcon",
						"title": "Display Icon",
						"type": "`$STRING`",
						"short": "URL to the buddy's display icon",
						"format": "uri",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"short": "Display name of the buddy",
					},
					map[string]any{
						"name": "fullIcon",
						"title": "Full Icon",
						"type": "`$STRING`",
						"short": "URL to the spray's full icon",
						"format": "uri",
					},
					map[string]any{
						"name": "fullTransparentIcon",
						"title": "Full Transparent Icon",
						"type": "`$STRING`",
						"short": "URL to the spray's full transparent icon",
						"format": "uri",
					},
					map[string]any{
						"name": "hideIfNotOwned",
						"title": "Hide If Not Owned",
						"type": "`$BOOLEAN`",
						"short": "Whether the spray is hidden if not owned",
					},
					map[string]any{
						"name": "isHiddenIfNotOwned",
						"title": "Is Hidden If Not Owned",
						"type": "`$BOOLEAN`",
						"short": "Whether the buddy is hidden if not owned",
					},
					map[string]any{
						"name": "isNullSpray",
						"title": "Is Null Spray",
						"type": "`$BOOLEAN`",
						"short": "Whether this is a null spray",
					},
					map[string]any{
						"name": "largeArt",
						"title": "Large Art",
						"type": "`$STRING`",
						"short": "URL to the card's large art",
						"format": "uri",
					},
					map[string]any{
						"name": "levels",
						"title": "Levels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "smallArt",
						"title": "Small Art",
						"type": "`$STRING`",
						"short": "URL to the card's small art",
						"format": "uri",
					},
					map[string]any{
						"name": "themeUuid",
						"title": "Theme Uuid",
						"type": "`$STRING`",
						"short": "UUID of the theme",
						"format": "uuid",
					},
					map[string]any{
						"name": "uuid",
						"title": "Uuid",
						"type": "`$STRING`",
						"short": "Unique identifier for the buddy",
						"format": "uuid",
					},
					map[string]any{
						"name": "wideArt",
						"title": "Wide Art",
						"type": "`$STRING`",
						"short": "URL to the card's wide art",
						"format": "uri",
					},
				},
				"name": "cosmetic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"buddies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"cards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"sprays",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Allows Match Timeouts",
						"type": "`$BOOLEAN`",
						"short": "Whether match timeouts are allowed",
					},
					map[string]any{
						"name": "assetPath",
						"title": "Asset Path",
						"type": "`$STRING`",
						"short": "Asset path in game files",
					},
					map[string]any{
						"name": "displayIcon",
						"title": "Display Icon",
						"type": "`$STRING`",
						"short": "URL to the game mode's display icon",
						"format": "uri",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"short": "Display name of the game mode",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$STRING`",
						"short": "Duration of the game mode",
					},
					map[string]any{
						"name": "economyType",
						"title": "Economy Type",
						"type": "`$STRING`",
						"short": "Type of economy system",
					},
					map[string]any{
						"name": "gameFeatureOverrides",
						"title": "Game Feature Overrides",
						"type": "`$ARRAY`",
						"short": "Game feature overrides",
					},
					map[string]any{
						"name": "gameRuleBoolOverrides",
						"title": "Game Rule Bool Overrides",
						"type": "`$ARRAY`",
						"short": "Game rule boolean overrides",
					},
					map[string]any{
						"name": "isMinimapHidden",
						"title": "Is Minimap Hidden",
						"type": "`$BOOLEAN`",
						"short": "Whether the minimap is hidden",
					},
					map[string]any{
						"name": "isTeamVoiceAllowed",
						"title": "Is Team Voice Allowed",
						"type": "`$BOOLEAN`",
						"short": "Whether team voice chat is allowed",
					},
					map[string]any{
						"name": "orbCount",
						"title": "Orb Count",
						"type": "`$INTEGER`",
						"short": "Number of orbs in the game mode",
					},
					map[string]any{
						"name": "roundsPerHalf",
						"title": "Rounds Per Half",
						"type": "`$INTEGER`",
						"short": "Number of rounds per half",
					},
					map[string]any{
						"name": "teamRoles",
						"title": "Team Roles",
						"type": "`$ARRAY`",
						"short": "Team roles in the game mode",
					},
					map[string]any{
						"name": "uuid",
						"title": "Uuid",
						"type": "`$STRING`",
						"short": "Unique identifier for the game mode",
						"format": "uuid",
					},
				},
				"name": "game_mode",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"gamemodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Asset Path",
						"type": "`$STRING`",
						"short": "Asset path in game files",
					},
					map[string]any{
						"name": "callouts",
						"title": "Callouts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "coordinates",
						"title": "Coordinates",
						"type": "`$STRING`",
						"short": "Geographic coordinates of the map location",
					},
					map[string]any{
						"name": "displayIcon",
						"title": "Display Icon",
						"type": "`$STRING`",
						"short": "URL to the map's display icon",
						"format": "uri",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"short": "Display name of the map",
					},
					map[string]any{
						"name": "listViewIcon",
						"title": "List View Icon",
						"type": "`$STRING`",
						"short": "URL to the map's list view icon",
						"format": "uri",
					},
					map[string]any{
						"name": "mapUrl",
						"title": "Map Url",
						"type": "`$STRING`",
						"short": "URL to the map overview",
						"format": "uri",
					},
					map[string]any{
						"name": "narrativeDescription",
						"title": "Narrative Description",
						"type": "`$STRING`",
						"short": "Narrative description of the map",
					},
					map[string]any{
						"name": "splash",
						"title": "Splash",
						"type": "`$STRING`",
						"short": "URL to the map's splash image",
						"format": "uri",
					},
					map[string]any{
						"name": "tacticalDescription",
						"title": "Tactical Description",
						"type": "`$STRING`",
						"short": "Tactical description of the map",
					},
					map[string]any{
						"name": "uuid",
						"title": "Uuid",
						"type": "`$STRING`",
						"short": "Unique identifier for the map",
						"format": "uuid",
					},
					map[string]any{
						"name": "xMultiplier",
						"title": "X Multiplier",
						"type": "`$NUMBER`",
						"short": "X coordinate multiplier",
					},
					map[string]any{
						"name": "xScalarToAdd",
						"title": "X Scalar To Add",
						"type": "`$NUMBER`",
						"short": "X scalar to add",
					},
					map[string]any{
						"name": "yMultiplier",
						"title": "Y Multiplier",
						"type": "`$NUMBER`",
						"short": "Y coordinate multiplier",
					},
					map[string]any{
						"name": "yScalarToAdd",
						"title": "Y Scalar To Add",
						"type": "`$NUMBER`",
						"short": "Y scalar to add",
					},
				},
				"id": map[string]any{
					"field": "uuid",
					"name": "id",
				},
				"name": "map",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"maps",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "uuid",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/maps/{uuid}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uuid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "uuid",
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
						"title": "Asset Path",
						"type": "`$STRING`",
						"short": "Asset path in game files",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"short": "Weapon category (e.g., Rifle, Pistol)",
					},
					map[string]any{
						"name": "defaultSkinUuid",
						"title": "Default Skin Uuid",
						"type": "`$STRING`",
						"short": "UUID of the default skin",
						"format": "uuid",
					},
					map[string]any{
						"name": "displayIcon",
						"title": "Display Icon",
						"type": "`$STRING`",
						"short": "URL to the weapon's display icon",
						"format": "uri",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"short": "Display name of the weapon",
					},
					map[string]any{
						"name": "killStreamIcon",
						"title": "Kill Stream Icon",
						"type": "`$STRING`",
						"short": "URL to the weapon's kill stream icon",
						"format": "uri",
					},
					map[string]any{
						"name": "shopData",
						"title": "Shop Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "skins",
						"title": "Skins",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uuid",
						"title": "Uuid",
						"type": "`$STRING`",
						"short": "Unique identifier for the weapon",
						"format": "uuid",
					},
					map[string]any{
						"name": "weaponStats",
						"title": "Weapon Stats",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "uuid",
					"name": "id",
				},
				"name": "weapon",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"weapons",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "uuid",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/weapons/{uuid}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uuid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en-US",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "uuid",
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
