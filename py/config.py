# Valorant SDK configuration


def make_config():
    return {
        "main": {
            "name": "Valorant",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://valorant-api.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "agent": {},
                "competitive": {},
                "cosmetic": {},
                "game_mode": {},
                "map": {},
                "weapon": {},
            },
        },
        "entity": {
      "agent": {
        "fields": [
          {
            "name": "ability",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "asset_path",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "background",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "background_gradient_color",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "bust_portrait",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "character_tag",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "developer_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "display_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "display_icon_small",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "display_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "full_portrait",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "full_portrait_v2",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "is_available_for_test",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "is_base_content",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "is_full_portrait_right_facing",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "is_playable_character",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "killfeed_portrait",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "role",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 20,
          },
          {
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 21,
          },
          {
            "name": "voice_line",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 22,
          },
        ],
        "name": "agent",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "is_playable_character",
                      "orig": "is_playable_character",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "example": "en-US",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/agents",
                "parts": [
                  "v1",
                  "agents",
                ],
                "select": {
                  "exist": [
                    "is_playable_character",
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "uuid",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "en-US",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/agents/{uuid}",
                "parts": [
                  "v1",
                  "agents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "uuid": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "competitive": {
        "fields": [
          {
            "name": "asset_object_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "asset_path",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "tier",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "competitive",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/competitivetiers",
                "parts": [
                  "v1",
                  "competitivetiers",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cosmetic": {
        "fields": [
          {
            "name": "animation_gif",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "animation_png",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "asset_path",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "display_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "display_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "full_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "full_transparent_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "hide_if_not_owned",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "is_hidden_if_not_owned",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "is_null_spray",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "large_art",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "level",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "small_art",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "theme_uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "wide_art",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 16,
          },
        ],
        "name": "cosmetic",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/buddies",
                "parts": [
                  "v1",
                  "buddies",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "en-US",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/cards",
                "parts": [
                  "v1",
                  "cards",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 1,
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "en-US",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/sprays",
                "parts": [
                  "v1",
                  "sprays",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 2,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "game_mode": {
        "fields": [
          {
            "name": "allows_match_timeout",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "asset_path",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "display_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "display_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "duration",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "economy_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "game_feature_override",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "game_rule_bool_override",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "is_minimap_hidden",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "is_team_voice_allowed",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "orb_count",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "rounds_per_half",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "team_role",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
        ],
        "name": "game_mode",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/gamemodes",
                "parts": [
                  "v1",
                  "gamemodes",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "map": {
        "fields": [
          {
            "name": "asset_path",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "callout",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "coordinate",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "display_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "display_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "list_view_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "map_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "narrative_description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "splash",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "tactical_description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "x_multiplier",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "x_scalar_to_add",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "y_multiplier",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "y_scalar_to_add",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 16,
          },
        ],
        "name": "map",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/maps",
                "parts": [
                  "v1",
                  "maps",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "uuid",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "en-US",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/maps/{uuid}",
                "parts": [
                  "v1",
                  "maps",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "uuid": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "weapon": {
        "fields": [
          {
            "name": "asset_path",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "default_skin_uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "display_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "display_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "kill_stream_icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "shop_data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "skin",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "weapon_stat",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 11,
          },
        ],
        "name": "weapon",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/weapons",
                "parts": [
                  "v1",
                  "weapons",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "uuid",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "en-US",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/weapons/{uuid}",
                "parts": [
                  "v1",
                  "weapons",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "uuid": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
