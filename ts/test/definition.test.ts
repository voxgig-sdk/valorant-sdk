import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "list",
    "method": "GET",
    "path": "/v1/agents",
    "args": [],
    "select": {
      "is_playable_character": "v1",
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language",
      "isPlayableCharacter"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": 200,
      "data": [
        {
          "abilities": [
            {
              "description": "x",
              "displayIcon": "x",
              "displayName": "x",
              "slot": "x"
            }
          ],
          "assetPath": "x",
          "background": "x",
          "backgroundGradientColors": [
            "x"
          ],
          "bustPortrait": "x",
          "characterTags": [
            "x"
          ],
          "description": "x",
          "developerName": "x",
          "displayIcon": "x",
          "displayIconSmall": "x",
          "displayName": "x",
          "fullPortrait": "x",
          "fullPortraitV2": "x",
          "isAvailableForTest": true,
          "isBaseContent": true,
          "isFullPortraitRightFacing": true,
          "isPlayableCharacter": true,
          "killfeedPortrait": "x",
          "role": {
            "assetPath": "x",
            "description": "x",
            "displayIcon": "x",
            "displayName": "x",
            "uuid": "x"
          },
          "uuid": "x",
          "voiceLine": {
            "maxDuration": 1,
            "mediaList": [
              {}
            ],
            "minDuration": 1
          }
        }
      ]
    },
    "idField": "id"
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
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language"
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
          "assetPath": "x",
          "description": "x",
          "displayIcon": "x",
          "displayName": "x",
          "uuid": "x"
        },
        "abilities": [
          {
            "description": "x",
            "displayIcon": "x",
            "displayName": "x",
            "slot": "x"
          }
        ],
        "voiceLine": {
          "maxDuration": 1,
          "mediaList": [
            {}
          ],
          "minDuration": 1
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "competitive",
    "accessor": "Competitive",
    "op": "list",
    "method": "GET",
    "path": "/v1/competitivetiers",
    "args": [],
    "select": {
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": 200,
      "data": [
        {
          "assetObjectName": "x",
          "assetPath": "x",
          "tiers": [
            {
              "backgroundColor": "x",
              "color": "x",
              "division": "x",
              "divisionName": "x",
              "largeIcon": "x",
              "rankTriangleDownIcon": "x",
              "rankTriangleUpIcon": "x",
              "smallIcon": "x",
              "tier": 1,
              "tierName": "x"
            }
          ],
          "uuid": "x"
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
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": 200,
      "data": [
        {
          "allowsMatchTimeouts": true,
          "assetPath": "x",
          "displayIcon": "x",
          "displayName": "x",
          "duration": "x",
          "economyType": "x",
          "gameFeatureOverrides": [
            {}
          ],
          "gameRuleBoolOverrides": [
            {}
          ],
          "isMinimapHidden": true,
          "isTeamVoiceAllowed": true,
          "orbCount": 1,
          "roundsPerHalf": 1,
          "teamRoles": [
            "x"
          ],
          "uuid": "x"
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
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": 200,
      "data": [
        {
          "assetPath": "x",
          "callouts": [
            {
              "location": {
                "x": 1,
                "y": 1
              },
              "regionName": "x",
              "superRegionName": "x"
            }
          ],
          "coordinates": "x",
          "displayIcon": "x",
          "displayName": "x",
          "listViewIcon": "x",
          "mapUrl": "x",
          "narrativeDescription": "x",
          "splash": "x",
          "tacticalDescription": "x",
          "uuid": "x",
          "xMultiplier": 1,
          "xScalarToAdd": 1,
          "yMultiplier": 1,
          "yScalarToAdd": 1
        }
      ]
    },
    "idField": "id"
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
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language"
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
            "location": {
              "x": 1,
              "y": 1
            },
            "regionName": "x",
            "superRegionName": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "weapon",
    "accessor": "Weapon",
    "op": "list",
    "method": "GET",
    "path": "/v1/weapons",
    "args": [],
    "select": {
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": 200,
      "data": [
        {
          "assetPath": "x",
          "category": "x",
          "defaultSkinUuid": "x",
          "displayIcon": "x",
          "displayName": "x",
          "killStreamIcon": "x",
          "shopData": {
            "assetPath": "x",
            "canBeTrashed": true,
            "category": "x",
            "categoryText": "x",
            "cost": 1,
            "gridPosition": {},
            "newImage": "x",
            "newImage2": "x"
          },
          "skins": [
            {}
          ],
          "uuid": "x",
          "weaponStats": {
            "adsStats": {},
            "airBurstStats": {},
            "altFireType": "x",
            "altShotgunStats": {},
            "damageRanges": [
              {}
            ],
            "equipTimeSeconds": 1,
            "feature": "x",
            "fireMode": "x",
            "fireRate": 1,
            "firstBulletAccuracy": 1,
            "magazineSize": 1,
            "reloadTimeSeconds": 1,
            "runSpeedMultiplier": 1,
            "shotgunPelletCount": 1,
            "wallPenetration": "x"
          }
        }
      ]
    },
    "idField": "id"
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
      "language": "v1"
    },
    "headers": [],
    "query": [
      "language"
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
          "adsStats": {},
          "airBurstStats": {},
          "altFireType": "x",
          "altShotgunStats": {},
          "damageRanges": [
            {}
          ],
          "equipTimeSeconds": 1,
          "feature": "x",
          "fireMode": "x",
          "fireRate": 1,
          "firstBulletAccuracy": 1,
          "magazineSize": 1,
          "reloadTimeSeconds": 1,
          "runSpeedMultiplier": 1,
          "shotgunPelletCount": 1,
          "wallPenetration": "x"
        },
        "shopData": {
          "assetPath": "x",
          "canBeTrashed": true,
          "category": "x",
          "categoryText": "x",
          "cost": 1,
          "gridPosition": {},
          "newImage": "x",
          "newImage2": "x"
        },
        "skins": [
          {}
        ]
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
