# Valorant SDK configuration

module ValorantConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Valorant",
        "slug" => "valorant",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://valorant-api.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "agent" => {},
          "competitive" => {},
          "cosmetic" => {},
          "game_mode" => {},
          "map" => {},
          "weapon" => {},
        },
      },
      "entity" => {
        "agent" => {
          "fields" => [
            {
              "name" => "abilities",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "assetPath",
              "short" => "Asset path in game files",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "background",
              "short" => "URL to the agent's background image",
              "type" => "`$STRING`",
            },
            {
              "name" => "backgroundGradientColors",
              "short" => "Gradient colors for the agent's background",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uri",
              "name" => "bustPortrait",
              "short" => "URL to the agent's bust portrait",
              "type" => "`$STRING`",
            },
            {
              "name" => "characterTags",
              "short" => "Tags associated with the character",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "description",
              "short" => "Description of the agent",
              "type" => "`$STRING`",
            },
            {
              "name" => "developerName",
              "short" => "Internal developer name",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "displayIcon",
              "short" => "URL to the agent's display icon",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "displayIconSmall",
              "short" => "URL to the agent's small display icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "displayName",
              "short" => "Display name of the agent",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "fullPortrait",
              "short" => "URL to the agent's full portrait",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "fullPortraitV2",
              "short" => "URL to the agent's full portrait version 2",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "isAvailableForTest",
              "short" => "Whether the agent is available for testing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "isBaseContent",
              "short" => "Whether the agent is base content",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "isFullPortraitRightFacing",
              "short" => "Whether the full portrait faces right",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "isPlayableCharacter",
              "short" => "Whether the agent is playable",
              "type" => "`$BOOLEAN`",
            },
            {
              "format" => "uri",
              "name" => "killfeedPortrait",
              "short" => "URL to the agent's killfeed portrait",
              "type" => "`$STRING`",
            },
            {
              "name" => "role",
              "type" => "`$OBJECT`",
            },
            {
              "format" => "uuid",
              "name" => "uuid",
              "short" => "Unique identifier for the agent",
              "type" => "`$STRING`",
            },
            {
              "name" => "voiceLine",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "agent",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "is_playable_character",
                        "orig" => "is_playable_character",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/agents",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "is_playable_character",
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "agents",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "uuid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/agents/{uuid}",
                  "rename" => {
                    "param" => {
                      "uuid" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "agents",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "competitive" => {
          "fields" => [
            {
              "name" => "assetObjectName",
              "short" => "Asset object name",
              "type" => "`$STRING`",
            },
            {
              "name" => "assetPath",
              "short" => "Asset path in game files",
              "type" => "`$STRING`",
            },
            {
              "name" => "tiers",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uuid",
              "name" => "uuid",
              "short" => "Unique identifier for the competitive tier set",
              "type" => "`$STRING`",
            },
          ],
          "name" => "competitive",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/competitivetiers",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "competitivetiers",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "competitivetiers",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "cosmetic" => {
          "fields" => [
            {
              "format" => "uri",
              "name" => "animationGif",
              "short" => "URL to the spray's animation GIF",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "animationPng",
              "short" => "URL to the spray's animation PNG",
              "type" => "`$STRING`",
            },
            {
              "name" => "assetPath",
              "short" => "Asset path in game files",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "short" => "Category of the spray",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "displayIcon",
              "short" => "URL to the buddy's display icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "displayName",
              "short" => "Display name of the buddy",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "fullIcon",
              "short" => "URL to the spray's full icon",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "fullTransparentIcon",
              "short" => "URL to the spray's full transparent icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "hideIfNotOwned",
              "short" => "Whether the spray is hidden if not owned",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "isHiddenIfNotOwned",
              "short" => "Whether the buddy is hidden if not owned",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "isNullSpray",
              "short" => "Whether this is a null spray",
              "type" => "`$BOOLEAN`",
            },
            {
              "format" => "uri",
              "name" => "largeArt",
              "short" => "URL to the card's large art",
              "type" => "`$STRING`",
            },
            {
              "name" => "levels",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uri",
              "name" => "smallArt",
              "short" => "URL to the card's small art",
              "type" => "`$STRING`",
            },
            {
              "format" => "uuid",
              "name" => "themeUuid",
              "short" => "UUID of the theme",
              "type" => "`$STRING`",
            },
            {
              "format" => "uuid",
              "name" => "uuid",
              "short" => "Unique identifier for the buddy",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "wideArt",
              "short" => "URL to the card's wide art",
              "type" => "`$STRING`",
            },
          ],
          "name" => "cosmetic",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/buddies",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "buddies",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "buddies",
                  ],
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/cards",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "cards",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "cards",
                  ],
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/sprays",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "sprays",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "sprays",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "game_mode" => {
          "fields" => [
            {
              "name" => "allowsMatchTimeouts",
              "short" => "Whether match timeouts are allowed",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "assetPath",
              "short" => "Asset path in game files",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "displayIcon",
              "short" => "URL to the game mode's display icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "displayName",
              "short" => "Display name of the game mode",
              "type" => "`$STRING`",
            },
            {
              "name" => "duration",
              "short" => "Duration of the game mode",
              "type" => "`$STRING`",
            },
            {
              "name" => "economyType",
              "short" => "Type of economy system",
              "type" => "`$STRING`",
            },
            {
              "name" => "gameFeatureOverrides",
              "short" => "Game feature overrides",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "gameRuleBoolOverrides",
              "short" => "Game rule boolean overrides",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "isMinimapHidden",
              "short" => "Whether the minimap is hidden",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "isTeamVoiceAllowed",
              "short" => "Whether team voice chat is allowed",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "orbCount",
              "short" => "Number of orbs in the game mode",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "roundsPerHalf",
              "short" => "Number of rounds per half",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "teamRoles",
              "short" => "Team roles in the game mode",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uuid",
              "name" => "uuid",
              "short" => "Unique identifier for the game mode",
              "type" => "`$STRING`",
            },
          ],
          "name" => "game_mode",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/gamemodes",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "gamemodes",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "gamemodes",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "map" => {
          "fields" => [
            {
              "name" => "assetPath",
              "short" => "Asset path in game files",
              "type" => "`$STRING`",
            },
            {
              "name" => "callouts",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "coordinates",
              "short" => "Geographic coordinates of the map location",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "displayIcon",
              "short" => "URL to the map's display icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "displayName",
              "short" => "Display name of the map",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "listViewIcon",
              "short" => "URL to the map's list view icon",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "mapUrl",
              "short" => "URL to the map overview",
              "type" => "`$STRING`",
            },
            {
              "name" => "narrativeDescription",
              "short" => "Narrative description of the map",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "splash",
              "short" => "URL to the map's splash image",
              "type" => "`$STRING`",
            },
            {
              "name" => "tacticalDescription",
              "short" => "Tactical description of the map",
              "type" => "`$STRING`",
            },
            {
              "format" => "uuid",
              "name" => "uuid",
              "short" => "Unique identifier for the map",
              "type" => "`$STRING`",
            },
            {
              "name" => "xMultiplier",
              "short" => "X coordinate multiplier",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "xScalarToAdd",
              "short" => "X scalar to add",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "yMultiplier",
              "short" => "Y coordinate multiplier",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "yScalarToAdd",
              "short" => "Y scalar to add",
              "type" => "`$NUMBER`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "map",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/maps",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "maps",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "maps",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "uuid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/maps/{uuid}",
                  "rename" => {
                    "param" => {
                      "uuid" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "maps",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "maps",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "weapon" => {
          "fields" => [
            {
              "name" => "assetPath",
              "short" => "Asset path in game files",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "short" => "Weapon category (e.g., Rifle, Pistol)",
              "type" => "`$STRING`",
            },
            {
              "format" => "uuid",
              "name" => "defaultSkinUuid",
              "short" => "UUID of the default skin",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "displayIcon",
              "short" => "URL to the weapon's display icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "displayName",
              "short" => "Display name of the weapon",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "killStreamIcon",
              "short" => "URL to the weapon's kill stream icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "shopData",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "skins",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uuid",
              "name" => "uuid",
              "short" => "Unique identifier for the weapon",
              "type" => "`$STRING`",
            },
            {
              "name" => "weaponStats",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "weapon",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/weapons",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "weapons",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "weapons",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "uuid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "en-US",
                        "kind" => "query",
                        "name" => "language",
                        "orig" => "language",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/weapons/{uuid}",
                  "rename" => {
                    "param" => {
                      "uuid" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "weapons",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "language",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "v1",
                    "weapons",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ValorantFeatures.make_feature(name)
  end
end
