<?php
declare(strict_types=1);

// Valorant SDK configuration

class ValorantConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Valorant",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://valorant-api.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "agent" => [],
                    "competitive" => [],
                    "cosmetic" => [],
                    "game_mode" => [],
                    "map" => [],
                    "weapon" => [],
                ],
            ],
            "entity" => [
        'agent' => [
          'fields' => [
            [
              'name' => 'ability',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'asset_path',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'background',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'background_gradient_color',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'bust_portrait',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'character_tag',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'data',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'developer_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'display_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'display_icon_small',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'display_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'full_portrait',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'full_portrait_v2',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'is_available_for_test',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'is_base_content',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'is_full_portrait_right_facing',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 16,
            ],
            [
              'name' => 'is_playable_character',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 17,
            ],
            [
              'name' => 'killfeed_portrait',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 18,
            ],
            [
              'name' => 'role',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 19,
            ],
            [
              'name' => 'status',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 20,
            ],
            [
              'name' => 'uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 21,
            ],
            [
              'name' => 'voice_line',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 22,
            ],
          ],
          'name' => 'agent',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'is_playable_character',
                        'orig' => 'is_playable_character',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/agents',
                  'parts' => [
                    'v1',
                    'agents',
                  ],
                  'select' => [
                    'exist' => [
                      'is_playable_character',
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'uuid',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/agents/{uuid}',
                  'parts' => [
                    'v1',
                    'agents',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'uuid' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'competitive' => [
          'fields' => [
            [
              'name' => 'asset_object_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'asset_path',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'tier',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
          ],
          'name' => 'competitive',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/competitivetiers',
                  'parts' => [
                    'v1',
                    'competitivetiers',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'cosmetic' => [
          'fields' => [
            [
              'name' => 'animation_gif',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'animation_png',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'asset_path',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'category',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'display_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'display_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'full_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'full_transparent_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'hide_if_not_owned',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'is_hidden_if_not_owned',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'is_null_spray',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'large_art',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'level',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'small_art',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'theme_uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'wide_art',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 16,
            ],
          ],
          'name' => 'cosmetic',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/buddies',
                  'parts' => [
                    'v1',
                    'buddies',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/cards',
                  'parts' => [
                    'v1',
                    'cards',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 1,
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/sprays',
                  'parts' => [
                    'v1',
                    'sprays',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 2,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'game_mode' => [
          'fields' => [
            [
              'name' => 'allows_match_timeout',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'asset_path',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'display_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'display_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'duration',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'economy_type',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'game_feature_override',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'game_rule_bool_override',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'is_minimap_hidden',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'is_team_voice_allowed',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'orb_count',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'rounds_per_half',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'team_role',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
          ],
          'name' => 'game_mode',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/gamemodes',
                  'parts' => [
                    'v1',
                    'gamemodes',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'map' => [
          'fields' => [
            [
              'name' => 'asset_path',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'callout',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'coordinate',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'data',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'display_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'display_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'list_view_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'map_url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'narrative_description',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'splash',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'status',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'tactical_description',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'x_multiplier',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'x_scalar_to_add',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'y_multiplier',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'y_scalar_to_add',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 16,
            ],
          ],
          'name' => 'map',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/maps',
                  'parts' => [
                    'v1',
                    'maps',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'uuid',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/maps/{uuid}',
                  'parts' => [
                    'v1',
                    'maps',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'uuid' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'weapon' => [
          'fields' => [
            [
              'name' => 'asset_path',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'category',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'data',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'default_skin_uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'display_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'display_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'kill_stream_icon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'shop_data',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'skin',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'status',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'uuid',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'weapon_stat',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 11,
            ],
          ],
          'name' => 'weapon',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/weapons',
                  'parts' => [
                    'v1',
                    'weapons',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'uuid',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/weapons/{uuid}',
                  'parts' => [
                    'v1',
                    'weapons',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'uuid' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ValorantFeatures::make_feature($name);
    }
}
