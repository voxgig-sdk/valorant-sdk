
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Valorant',
        slug: "valorant",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://valorant-api.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      agent: {
      },

      competitive: {
      },

      cosmetic: {
      },

      game_mode: {
      },

      map: {
      },

      weapon: {
      },

    }
  }


  entity = {
    "agent": {
      "fields": [
        {
          "name": "abilities",
          "type": "`$ARRAY`"
        },
        {
          "name": "assetPath",
          "short": "Asset path in game files",
          "type": "`$STRING`"
        },
        {
          "name": "background",
          "short": "URL to the agent's background image",
          "type": "`$STRING`"
        },
        {
          "name": "backgroundGradientColors",
          "short": "Gradient colors for the agent's background",
          "type": "`$ARRAY`"
        },
        {
          "name": "bustPortrait",
          "short": "URL to the agent's bust portrait",
          "type": "`$STRING`"
        },
        {
          "name": "characterTags",
          "short": "Tags associated with the character",
          "type": "`$ARRAY`"
        },
        {
          "name": "description",
          "short": "Description of the agent",
          "type": "`$STRING`"
        },
        {
          "name": "developerName",
          "short": "Internal developer name",
          "type": "`$STRING`"
        },
        {
          "name": "displayIcon",
          "short": "URL to the agent's display icon",
          "type": "`$STRING`"
        },
        {
          "name": "displayIconSmall",
          "short": "URL to the agent's small display icon",
          "type": "`$STRING`"
        },
        {
          "name": "displayName",
          "short": "Display name of the agent",
          "type": "`$STRING`"
        },
        {
          "name": "fullPortrait",
          "short": "URL to the agent's full portrait",
          "type": "`$STRING`"
        },
        {
          "name": "fullPortraitV2",
          "short": "URL to the agent's full portrait version 2",
          "type": "`$STRING`"
        },
        {
          "name": "isAvailableForTest",
          "short": "Whether the agent is available for testing",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "isBaseContent",
          "short": "Whether the agent is base content",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "isFullPortraitRightFacing",
          "short": "Whether the full portrait faces right",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "isPlayableCharacter",
          "short": "Whether the agent is playable",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "killfeedPortrait",
          "short": "URL to the agent's killfeed portrait",
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "type": "`$OBJECT`"
        },
        {
          "name": "uuid",
          "short": "Unique identifier for the agent",
          "type": "`$STRING`"
        },
        {
          "name": "voiceLine",
          "type": "`$OBJECT`"
        }
      ],
      "name": "agent",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "is_playable_character",
                    "orig": "is_playable_character",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/agents",
              "parts": [
                "v1",
                "agents"
              ],
              "select": {
                "exist": [
                  "is_playable_character",
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "uuid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/agents/{uuid}",
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
              "select": {
                "exist": [
                  "id",
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
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
          "short": "Asset object name",
          "type": "`$STRING`"
        },
        {
          "name": "assetPath",
          "short": "Asset path in game files",
          "type": "`$STRING`"
        },
        {
          "name": "tiers",
          "type": "`$ARRAY`"
        },
        {
          "name": "uuid",
          "short": "Unique identifier for the competitive tier set",
          "type": "`$STRING`"
        }
      ],
      "name": "competitive",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/competitivetiers",
              "parts": [
                "v1",
                "competitivetiers"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
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
          "short": "URL to the spray's animation GIF",
          "type": "`$STRING`"
        },
        {
          "name": "animationPng",
          "short": "URL to the spray's animation PNG",
          "type": "`$STRING`"
        },
        {
          "name": "assetPath",
          "short": "Asset path in game files",
          "type": "`$STRING`"
        },
        {
          "name": "category",
          "short": "Category of the spray",
          "type": "`$STRING`"
        },
        {
          "name": "displayIcon",
          "short": "URL to the buddy's display icon",
          "type": "`$STRING`"
        },
        {
          "name": "displayName",
          "short": "Display name of the buddy",
          "type": "`$STRING`"
        },
        {
          "name": "fullIcon",
          "short": "URL to the spray's full icon",
          "type": "`$STRING`"
        },
        {
          "name": "fullTransparentIcon",
          "short": "URL to the spray's full transparent icon",
          "type": "`$STRING`"
        },
        {
          "name": "hideIfNotOwned",
          "short": "Whether the spray is hidden if not owned",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "isHiddenIfNotOwned",
          "short": "Whether the buddy is hidden if not owned",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "isNullSpray",
          "short": "Whether this is a null spray",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "largeArt",
          "short": "URL to the card's large art",
          "type": "`$STRING`"
        },
        {
          "name": "levels",
          "type": "`$ARRAY`"
        },
        {
          "name": "smallArt",
          "short": "URL to the card's small art",
          "type": "`$STRING`"
        },
        {
          "name": "themeUuid",
          "short": "UUID of the theme",
          "type": "`$STRING`"
        },
        {
          "name": "uuid",
          "short": "Unique identifier for the buddy",
          "type": "`$STRING`"
        },
        {
          "name": "wideArt",
          "short": "URL to the card's wide art",
          "type": "`$STRING`"
        }
      ],
      "name": "cosmetic",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/buddies",
              "parts": [
                "v1",
                "buddies"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            },
            {
              "args": {
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/cards",
              "parts": [
                "v1",
                "cards"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            },
            {
              "args": {
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/sprays",
              "parts": [
                "v1",
                "sprays"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
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
          "short": "Whether match timeouts are allowed",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "assetPath",
          "short": "Asset path in game files",
          "type": "`$STRING`"
        },
        {
          "name": "displayIcon",
          "short": "URL to the game mode's display icon",
          "type": "`$STRING`"
        },
        {
          "name": "displayName",
          "short": "Display name of the game mode",
          "type": "`$STRING`"
        },
        {
          "name": "duration",
          "short": "Duration of the game mode",
          "type": "`$STRING`"
        },
        {
          "name": "economyType",
          "short": "Type of economy system",
          "type": "`$STRING`"
        },
        {
          "name": "gameFeatureOverrides",
          "short": "Game feature overrides",
          "type": "`$ARRAY`"
        },
        {
          "name": "gameRuleBoolOverrides",
          "short": "Game rule boolean overrides",
          "type": "`$ARRAY`"
        },
        {
          "name": "isMinimapHidden",
          "short": "Whether the minimap is hidden",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "isTeamVoiceAllowed",
          "short": "Whether team voice chat is allowed",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "orbCount",
          "short": "Number of orbs in the game mode",
          "type": "`$INTEGER`"
        },
        {
          "name": "roundsPerHalf",
          "short": "Number of rounds per half",
          "type": "`$INTEGER`"
        },
        {
          "name": "teamRoles",
          "short": "Team roles in the game mode",
          "type": "`$ARRAY`"
        },
        {
          "name": "uuid",
          "short": "Unique identifier for the game mode",
          "type": "`$STRING`"
        }
      ],
      "name": "game_mode",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/gamemodes",
              "parts": [
                "v1",
                "gamemodes"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
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
          "short": "Asset path in game files",
          "type": "`$STRING`"
        },
        {
          "name": "callouts",
          "type": "`$ARRAY`"
        },
        {
          "name": "coordinates",
          "short": "Geographic coordinates of the map location",
          "type": "`$STRING`"
        },
        {
          "name": "displayIcon",
          "short": "URL to the map's display icon",
          "type": "`$STRING`"
        },
        {
          "name": "displayName",
          "short": "Display name of the map",
          "type": "`$STRING`"
        },
        {
          "name": "listViewIcon",
          "short": "URL to the map's list view icon",
          "type": "`$STRING`"
        },
        {
          "name": "mapUrl",
          "short": "URL to the map overview",
          "type": "`$STRING`"
        },
        {
          "name": "narrativeDescription",
          "short": "Narrative description of the map",
          "type": "`$STRING`"
        },
        {
          "name": "splash",
          "short": "URL to the map's splash image",
          "type": "`$STRING`"
        },
        {
          "name": "tacticalDescription",
          "short": "Tactical description of the map",
          "type": "`$STRING`"
        },
        {
          "name": "uuid",
          "short": "Unique identifier for the map",
          "type": "`$STRING`"
        },
        {
          "name": "xMultiplier",
          "short": "X coordinate multiplier",
          "type": "`$NUMBER`"
        },
        {
          "name": "xScalarToAdd",
          "short": "X scalar to add",
          "type": "`$NUMBER`"
        },
        {
          "name": "yMultiplier",
          "short": "Y coordinate multiplier",
          "type": "`$NUMBER`"
        },
        {
          "name": "yScalarToAdd",
          "short": "Y scalar to add",
          "type": "`$NUMBER`"
        }
      ],
      "name": "map",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/maps",
              "parts": [
                "v1",
                "maps"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "uuid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/maps/{uuid}",
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
              "select": {
                "exist": [
                  "id",
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
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
          "short": "Asset path in game files",
          "type": "`$STRING`"
        },
        {
          "name": "category",
          "short": "Weapon category (e.g., Rifle, Pistol)",
          "type": "`$STRING`"
        },
        {
          "name": "defaultSkinUuid",
          "short": "UUID of the default skin",
          "type": "`$STRING`"
        },
        {
          "name": "displayIcon",
          "short": "URL to the weapon's display icon",
          "type": "`$STRING`"
        },
        {
          "name": "displayName",
          "short": "Display name of the weapon",
          "type": "`$STRING`"
        },
        {
          "name": "killStreamIcon",
          "short": "URL to the weapon's kill stream icon",
          "type": "`$STRING`"
        },
        {
          "name": "shopData",
          "type": "`$OBJECT`"
        },
        {
          "name": "skins",
          "type": "`$ARRAY`"
        },
        {
          "name": "uuid",
          "short": "Unique identifier for the weapon",
          "type": "`$STRING`"
        },
        {
          "name": "weaponStats",
          "type": "`$OBJECT`"
        }
      ],
      "name": "weapon",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/weapons",
              "parts": [
                "v1",
                "weapons"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "uuid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "en-US",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/weapons/{uuid}",
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
              "select": {
                "exist": [
                  "id",
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

