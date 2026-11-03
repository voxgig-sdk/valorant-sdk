"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "agent",
        "accessor": "Agent",
        "op": "list",
        "method": "GET",
        "path": "/v1/agents",
        "args": [],
        "select": {
            "is_playable_character": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "isPlayableCharacter"
        ],
        "queryArgs": [
            {
                "name": "is_playable_character",
                "wire": "isPlayableCharacter"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": [
                {
                    "uuid": "x",
                    "displayName": "x",
                    "description": "x",
                    "developerName": "x",
                    "characterTags": [
                        "x"
                    ],
                    "displayIcon": "x",
                    "displayIconSmall": "x",
                    "bustPortrait": "x",
                    "fullPortrait": "x",
                    "fullPortraitV2": "x",
                    "killfeedPortrait": "x",
                    "background": "x",
                    "backgroundGradientColors": [
                        "x"
                    ],
                    "assetPath": "x",
                    "isFullPortraitRightFacing": true,
                    "isPlayableCharacter": true,
                    "isAvailableForTest": true,
                    "isBaseContent": true,
                    "role": {
                        "uuid": "x",
                        "displayName": "x",
                        "description": "x",
                        "displayIcon": "x",
                        "assetPath": "x"
                    },
                    "abilities": [
                        {
                            "slot": "x",
                            "displayName": "x",
                            "description": "x",
                            "displayIcon": "x"
                        }
                    ],
                    "voiceLine": {
                        "minDuration": 1,
                        "maxDuration": 1,
                        "mediaList": [
                            {}
                        ]
                    }
                }
            ]
        },
        "idField": "uuid"
    },
    {
        "entity": "agent",
        "accessor": "Agent",
        "op": "load",
        "method": "GET",
        "path": "/v1/agents/{uuid}",
        "args": [
            {
                "name": "id",
                "wire": "uuid",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": {
                "uuid": "x",
                "displayName": "x",
                "description": "x",
                "developerName": "x",
                "characterTags": [
                    "x"
                ],
                "displayIcon": "x",
                "displayIconSmall": "x",
                "bustPortrait": "x",
                "fullPortrait": "x",
                "fullPortraitV2": "x",
                "killfeedPortrait": "x",
                "background": "x",
                "backgroundGradientColors": [
                    "x"
                ],
                "assetPath": "x",
                "isFullPortraitRightFacing": true,
                "isPlayableCharacter": true,
                "isAvailableForTest": true,
                "isBaseContent": true,
                "role": {
                    "uuid": "x",
                    "displayName": "x",
                    "description": "x",
                    "displayIcon": "x",
                    "assetPath": "x"
                },
                "abilities": [
                    {
                        "slot": "x",
                        "displayName": "x",
                        "description": "x",
                        "displayIcon": "x"
                    }
                ],
                "voiceLine": {
                    "minDuration": 1,
                    "maxDuration": 1,
                    "mediaList": [
                        {}
                    ]
                }
            }
        },
        "idField": "uuid"
    },
    {
        "entity": "competitive",
        "accessor": "Competitive",
        "op": "list",
        "method": "GET",
        "path": "/v1/competitivetiers",
        "args": [],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": [
                {
                    "uuid": "x",
                    "assetObjectName": "x",
                    "tiers": [
                        {
                            "tier": 1,
                            "tierName": "x",
                            "division": "x",
                            "divisionName": "x",
                            "color": "x",
                            "backgroundColor": "x",
                            "smallIcon": "x",
                            "largeIcon": "x",
                            "rankTriangleDownIcon": "x",
                            "rankTriangleUpIcon": "x"
                        }
                    ],
                    "assetPath": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "game_mode",
        "accessor": "GameMode",
        "op": "list",
        "method": "GET",
        "path": "/v1/gamemodes",
        "args": [],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": [
                {
                    "uuid": "x",
                    "displayName": "x",
                    "duration": "x",
                    "economyType": "x",
                    "allowsMatchTimeouts": true,
                    "isTeamVoiceAllowed": true,
                    "isMinimapHidden": true,
                    "orbCount": 1,
                    "roundsPerHalf": 1,
                    "teamRoles": [
                        "x"
                    ],
                    "gameFeatureOverrides": [
                        {}
                    ],
                    "gameRuleBoolOverrides": [
                        {}
                    ],
                    "displayIcon": "x",
                    "assetPath": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "map",
        "accessor": "Map",
        "op": "list",
        "method": "GET",
        "path": "/v1/maps",
        "args": [],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": [
                {
                    "uuid": "x",
                    "displayName": "x",
                    "narrativeDescription": "x",
                    "tacticalDescription": "x",
                    "coordinates": "x",
                    "displayIcon": "x",
                    "listViewIcon": "x",
                    "splash": "x",
                    "assetPath": "x",
                    "mapUrl": "x",
                    "xMultiplier": 1,
                    "yMultiplier": 1,
                    "xScalarToAdd": 1,
                    "yScalarToAdd": 1,
                    "callouts": [
                        {
                            "regionName": "x",
                            "superRegionName": "x",
                            "location": {
                                "x": 1,
                                "y": 1
                            }
                        }
                    ]
                }
            ]
        },
        "idField": "uuid"
    },
    {
        "entity": "map",
        "accessor": "Map",
        "op": "load",
        "method": "GET",
        "path": "/v1/maps/{uuid}",
        "args": [
            {
                "name": "id",
                "wire": "uuid",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": {
                "uuid": "x",
                "displayName": "x",
                "narrativeDescription": "x",
                "tacticalDescription": "x",
                "coordinates": "x",
                "displayIcon": "x",
                "listViewIcon": "x",
                "splash": "x",
                "assetPath": "x",
                "mapUrl": "x",
                "xMultiplier": 1,
                "yMultiplier": 1,
                "xScalarToAdd": 1,
                "yScalarToAdd": 1,
                "callouts": [
                    {
                        "regionName": "x",
                        "superRegionName": "x",
                        "location": {
                            "x": 1,
                            "y": 1
                        }
                    }
                ]
            }
        },
        "idField": "uuid"
    },
    {
        "entity": "weapon",
        "accessor": "Weapon",
        "op": "list",
        "method": "GET",
        "path": "/v1/weapons",
        "args": [],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": [
                {
                    "uuid": "x",
                    "displayName": "x",
                    "category": "x",
                    "defaultSkinUuid": "x",
                    "displayIcon": "x",
                    "killStreamIcon": "x",
                    "assetPath": "x",
                    "weaponStats": {
                        "fireRate": 1,
                        "magazineSize": 1,
                        "runSpeedMultiplier": 1,
                        "equipTimeSeconds": 1,
                        "reloadTimeSeconds": 1,
                        "firstBulletAccuracy": 1,
                        "shotgunPelletCount": 1,
                        "wallPenetration": "x",
                        "feature": "x",
                        "fireMode": "x",
                        "altFireType": "x",
                        "adsStats": {},
                        "altShotgunStats": {},
                        "airBurstStats": {},
                        "damageRanges": [
                            {}
                        ]
                    },
                    "shopData": {
                        "cost": 1,
                        "category": "x",
                        "categoryText": "x",
                        "gridPosition": {},
                        "canBeTrashed": true,
                        "newImage": "x",
                        "newImage2": "x",
                        "assetPath": "x"
                    },
                    "skins": [
                        {}
                    ]
                }
            ]
        },
        "idField": "uuid"
    },
    {
        "entity": "weapon",
        "accessor": "Weapon",
        "op": "load",
        "method": "GET",
        "path": "/v1/weapons/{uuid}",
        "args": [
            {
                "name": "id",
                "wire": "uuid",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": 200,
            "data": {
                "uuid": "x",
                "displayName": "x",
                "category": "x",
                "defaultSkinUuid": "x",
                "displayIcon": "x",
                "killStreamIcon": "x",
                "assetPath": "x",
                "weaponStats": {
                    "fireRate": 1,
                    "magazineSize": 1,
                    "runSpeedMultiplier": 1,
                    "equipTimeSeconds": 1,
                    "reloadTimeSeconds": 1,
                    "firstBulletAccuracy": 1,
                    "shotgunPelletCount": 1,
                    "wallPenetration": "x",
                    "feature": "x",
                    "fireMode": "x",
                    "altFireType": "x",
                    "adsStats": {},
                    "altShotgunStats": {},
                    "airBurstStats": {},
                    "damageRanges": [
                        {}
                    ]
                },
                "shopData": {
                    "cost": 1,
                    "category": "x",
                    "categoryText": "x",
                    "gridPosition": {},
                    "canBeTrashed": true,
                    "newImage": "x",
                    "newImage2": "x",
                    "assetPath": "x"
                },
                "skins": [
                    {}
                ]
            }
        },
        "idField": "uuid"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map