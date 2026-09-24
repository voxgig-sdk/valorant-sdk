"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Valorant',
        slug: "valorant",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://valorant-api.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            agent: {},
            competitive: {},
            cosmetic: {},
            game_mode: {},
            map: {},
            weapon: {},
        }
    };
    entity = {
        "agent": {
            "fields": [
                {
                    "name": "abilities",
                    "title": "Abilities",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "assetPath",
                    "title": "Asset Path",
                    "type": "`$STRING`",
                    "short": "Asset path in game files"
                },
                {
                    "name": "background",
                    "title": "Background",
                    "type": "`$STRING`",
                    "short": "URL to the agent's background image",
                    "format": "uri"
                },
                {
                    "name": "backgroundGradientColors",
                    "title": "Background Gradient Colors",
                    "type": "`$ARRAY`",
                    "short": "Gradient colors for the agent's background"
                },
                {
                    "name": "bustPortrait",
                    "title": "Bust Portrait",
                    "type": "`$STRING`",
                    "short": "URL to the agent's bust portrait",
                    "format": "uri"
                },
                {
                    "name": "characterTags",
                    "title": "Character Tags",
                    "type": "`$ARRAY`",
                    "short": "Tags associated with the character"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Description of the agent"
                },
                {
                    "name": "developerName",
                    "title": "Developer Name",
                    "type": "`$STRING`",
                    "short": "Internal developer name"
                },
                {
                    "name": "displayIcon",
                    "title": "Display Icon",
                    "type": "`$STRING`",
                    "short": "URL to the agent's display icon",
                    "format": "uri"
                },
                {
                    "name": "displayIconSmall",
                    "title": "Display Icon Small",
                    "type": "`$STRING`",
                    "short": "URL to the agent's small display icon",
                    "format": "uri"
                },
                {
                    "name": "displayName",
                    "title": "Display Name",
                    "type": "`$STRING`",
                    "short": "Display name of the agent"
                },
                {
                    "name": "fullPortrait",
                    "title": "Full Portrait",
                    "type": "`$STRING`",
                    "short": "URL to the agent's full portrait",
                    "format": "uri"
                },
                {
                    "name": "fullPortraitV2",
                    "title": "Full Portrait V2",
                    "type": "`$STRING`",
                    "short": "URL to the agent's full portrait version 2",
                    "format": "uri"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "isAvailableForTest",
                    "title": "Is Available For Test",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the agent is available for testing"
                },
                {
                    "name": "isBaseContent",
                    "title": "Is Base Content",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the agent is base content"
                },
                {
                    "name": "isFullPortraitRightFacing",
                    "title": "Is Full Portrait Right Facing",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the full portrait faces right"
                },
                {
                    "name": "isPlayableCharacter",
                    "title": "Is Playable Character",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the agent is playable"
                },
                {
                    "name": "killfeedPortrait",
                    "title": "Killfeed Portrait",
                    "type": "`$STRING`",
                    "short": "URL to the agent's killfeed portrait",
                    "format": "uri"
                },
                {
                    "name": "role",
                    "title": "Role",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "uuid",
                    "title": "Uuid",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the agent",
                    "format": "uuid"
                },
                {
                    "name": "voiceLine",
                    "title": "Voice Line",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "agent",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/agents",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "agents"
                                }
                            ],
                            "parts": [
                                "v1",
                                "agents"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "is_playable_character",
                                        "orig": "is_playable_character",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "is_playable_character",
                                    "language"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/agents/{uuid}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "agents"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "v1",
                                "agents",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "uuid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uuid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "language"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "competitive": {
            "fields": [
                {
                    "name": "assetObjectName",
                    "title": "Asset Object Name",
                    "type": "`$STRING`",
                    "short": "Asset object name"
                },
                {
                    "name": "assetPath",
                    "title": "Asset Path",
                    "type": "`$STRING`",
                    "short": "Asset path in game files"
                },
                {
                    "name": "tiers",
                    "title": "Tiers",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "uuid",
                    "title": "Uuid",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the competitive tier set",
                    "format": "uuid"
                }
            ],
            "name": "competitive",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/competitivetiers",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "competitivetiers"
                                }
                            ],
                            "parts": [
                                "v1",
                                "competitivetiers"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "language"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "cosmetic": {
            "fields": [
                {
                    "name": "animationGif",
                    "title": "Animation Gif",
                    "type": "`$STRING`",
                    "short": "URL to the spray's animation GIF",
                    "format": "uri"
                },
                {
                    "name": "animationPng",
                    "title": "Animation Png",
                    "type": "`$STRING`",
                    "short": "URL to the spray's animation PNG",
                    "format": "uri"
                },
                {
                    "name": "assetPath",
                    "title": "Asset Path",
                    "type": "`$STRING`",
                    "short": "Asset path in game files"
                },
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "short": "Category of the spray"
                },
                {
                    "name": "displayIcon",
                    "title": "Display Icon",
                    "type": "`$STRING`",
                    "short": "URL to the buddy's display icon",
                    "format": "uri"
                },
                {
                    "name": "displayName",
                    "title": "Display Name",
                    "type": "`$STRING`",
                    "short": "Display name of the buddy"
                },
                {
                    "name": "fullIcon",
                    "title": "Full Icon",
                    "type": "`$STRING`",
                    "short": "URL to the spray's full icon",
                    "format": "uri"
                },
                {
                    "name": "fullTransparentIcon",
                    "title": "Full Transparent Icon",
                    "type": "`$STRING`",
                    "short": "URL to the spray's full transparent icon",
                    "format": "uri"
                },
                {
                    "name": "hideIfNotOwned",
                    "title": "Hide If Not Owned",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the spray is hidden if not owned"
                },
                {
                    "name": "isHiddenIfNotOwned",
                    "title": "Is Hidden If Not Owned",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the buddy is hidden if not owned"
                },
                {
                    "name": "isNullSpray",
                    "title": "Is Null Spray",
                    "type": "`$BOOLEAN`",
                    "short": "Whether this is a null spray"
                },
                {
                    "name": "largeArt",
                    "title": "Large Art",
                    "type": "`$STRING`",
                    "short": "URL to the card's large art",
                    "format": "uri"
                },
                {
                    "name": "levels",
                    "title": "Levels",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "smallArt",
                    "title": "Small Art",
                    "type": "`$STRING`",
                    "short": "URL to the card's small art",
                    "format": "uri"
                },
                {
                    "name": "themeUuid",
                    "title": "Theme Uuid",
                    "type": "`$STRING`",
                    "short": "UUID of the theme",
                    "format": "uuid"
                },
                {
                    "name": "uuid",
                    "title": "Uuid",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the buddy",
                    "format": "uuid"
                },
                {
                    "name": "wideArt",
                    "title": "Wide Art",
                    "type": "`$STRING`",
                    "short": "URL to the card's wide art",
                    "format": "uri"
                }
            ],
            "name": "cosmetic",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/buddies",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "buddies"
                                }
                            ],
                            "parts": [
                                "v1",
                                "buddies"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "language"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/cards",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cards"
                                }
                            ],
                            "parts": [
                                "v1",
                                "cards"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "language"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/sprays",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "sprays"
                                }
                            ],
                            "parts": [
                                "v1",
                                "sprays"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "language"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "game_mode": {
            "fields": [
                {
                    "name": "allowsMatchTimeouts",
                    "title": "Allows Match Timeouts",
                    "type": "`$BOOLEAN`",
                    "short": "Whether match timeouts are allowed"
                },
                {
                    "name": "assetPath",
                    "title": "Asset Path",
                    "type": "`$STRING`",
                    "short": "Asset path in game files"
                },
                {
                    "name": "displayIcon",
                    "title": "Display Icon",
                    "type": "`$STRING`",
                    "short": "URL to the game mode's display icon",
                    "format": "uri"
                },
                {
                    "name": "displayName",
                    "title": "Display Name",
                    "type": "`$STRING`",
                    "short": "Display name of the game mode"
                },
                {
                    "name": "duration",
                    "title": "Duration",
                    "type": "`$STRING`",
                    "short": "Duration of the game mode"
                },
                {
                    "name": "economyType",
                    "title": "Economy Type",
                    "type": "`$STRING`",
                    "short": "Type of economy system"
                },
                {
                    "name": "gameFeatureOverrides",
                    "title": "Game Feature Overrides",
                    "type": "`$ARRAY`",
                    "short": "Game feature overrides"
                },
                {
                    "name": "gameRuleBoolOverrides",
                    "title": "Game Rule Bool Overrides",
                    "type": "`$ARRAY`",
                    "short": "Game rule boolean overrides"
                },
                {
                    "name": "isMinimapHidden",
                    "title": "Is Minimap Hidden",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the minimap is hidden"
                },
                {
                    "name": "isTeamVoiceAllowed",
                    "title": "Is Team Voice Allowed",
                    "type": "`$BOOLEAN`",
                    "short": "Whether team voice chat is allowed"
                },
                {
                    "name": "orbCount",
                    "title": "Orb Count",
                    "type": "`$INTEGER`",
                    "short": "Number of orbs in the game mode"
                },
                {
                    "name": "roundsPerHalf",
                    "title": "Rounds Per Half",
                    "type": "`$INTEGER`",
                    "short": "Number of rounds per half"
                },
                {
                    "name": "teamRoles",
                    "title": "Team Roles",
                    "type": "`$ARRAY`",
                    "short": "Team roles in the game mode"
                },
                {
                    "name": "uuid",
                    "title": "Uuid",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the game mode",
                    "format": "uuid"
                }
            ],
            "name": "game_mode",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/gamemodes",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "gamemodes"
                                }
                            ],
                            "parts": [
                                "v1",
                                "gamemodes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "language"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "map": {
            "fields": [
                {
                    "name": "assetPath",
                    "title": "Asset Path",
                    "type": "`$STRING`",
                    "short": "Asset path in game files"
                },
                {
                    "name": "callouts",
                    "title": "Callouts",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "coordinates",
                    "title": "Coordinates",
                    "type": "`$STRING`",
                    "short": "Geographic coordinates of the map location"
                },
                {
                    "name": "displayIcon",
                    "title": "Display Icon",
                    "type": "`$STRING`",
                    "short": "URL to the map's display icon",
                    "format": "uri"
                },
                {
                    "name": "displayName",
                    "title": "Display Name",
                    "type": "`$STRING`",
                    "short": "Display name of the map"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "listViewIcon",
                    "title": "List View Icon",
                    "type": "`$STRING`",
                    "short": "URL to the map's list view icon",
                    "format": "uri"
                },
                {
                    "name": "mapUrl",
                    "title": "Map Url",
                    "type": "`$STRING`",
                    "short": "URL to the map overview",
                    "format": "uri"
                },
                {
                    "name": "narrativeDescription",
                    "title": "Narrative Description",
                    "type": "`$STRING`",
                    "short": "Narrative description of the map"
                },
                {
                    "name": "splash",
                    "title": "Splash",
                    "type": "`$STRING`",
                    "short": "URL to the map's splash image",
                    "format": "uri"
                },
                {
                    "name": "tacticalDescription",
                    "title": "Tactical Description",
                    "type": "`$STRING`",
                    "short": "Tactical description of the map"
                },
                {
                    "name": "uuid",
                    "title": "Uuid",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the map",
                    "format": "uuid"
                },
                {
                    "name": "xMultiplier",
                    "title": "X Multiplier",
                    "type": "`$NUMBER`",
                    "short": "X coordinate multiplier"
                },
                {
                    "name": "xScalarToAdd",
                    "title": "X Scalar To Add",
                    "type": "`$NUMBER`",
                    "short": "X scalar to add"
                },
                {
                    "name": "yMultiplier",
                    "title": "Y Multiplier",
                    "type": "`$NUMBER`",
                    "short": "Y coordinate multiplier"
                },
                {
                    "name": "yScalarToAdd",
                    "title": "Y Scalar To Add",
                    "type": "`$NUMBER`",
                    "short": "Y scalar to add"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "map",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/maps",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "maps"
                                }
                            ],
                            "parts": [
                                "v1",
                                "maps"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "language"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/maps/{uuid}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "maps"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "v1",
                                "maps",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "uuid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uuid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "language"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "weapon": {
            "fields": [
                {
                    "name": "assetPath",
                    "title": "Asset Path",
                    "type": "`$STRING`",
                    "short": "Asset path in game files"
                },
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "short": "Weapon category (e.g., Rifle, Pistol)"
                },
                {
                    "name": "defaultSkinUuid",
                    "title": "Default Skin Uuid",
                    "type": "`$STRING`",
                    "short": "UUID of the default skin",
                    "format": "uuid"
                },
                {
                    "name": "displayIcon",
                    "title": "Display Icon",
                    "type": "`$STRING`",
                    "short": "URL to the weapon's display icon",
                    "format": "uri"
                },
                {
                    "name": "displayName",
                    "title": "Display Name",
                    "type": "`$STRING`",
                    "short": "Display name of the weapon"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "killStreamIcon",
                    "title": "Kill Stream Icon",
                    "type": "`$STRING`",
                    "short": "URL to the weapon's kill stream icon",
                    "format": "uri"
                },
                {
                    "name": "shopData",
                    "title": "Shop Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "skins",
                    "title": "Skins",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "uuid",
                    "title": "Uuid",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the weapon",
                    "format": "uuid"
                },
                {
                    "name": "weaponStats",
                    "title": "Weapon Stats",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "weapon",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/weapons",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "weapons"
                                }
                            ],
                            "parts": [
                                "v1",
                                "weapons"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "language"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/weapons/{uuid}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "weapons"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "v1",
                                "weapons",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "uuid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uuid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "language"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map