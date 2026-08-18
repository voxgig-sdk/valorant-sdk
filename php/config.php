<?php
declare(strict_types=1);

// Valorant SDK configuration

class ValorantConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
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
              'name' => 'abilities',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'assetPath',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'background',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'backgroundGradientColors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'bustPortrait',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'characterTags',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'developerName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayIconSmall',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fullPortrait',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fullPortraitV2',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'isAvailableForTest',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'isBaseContent',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'isFullPortraitRightFacing',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'isPlayableCharacter',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'killfeedPortrait',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'role',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'uuid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'voiceLine',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'agent',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'is_playable_character',
                        'orig' => 'is_playable_character',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
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
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'competitive' => [
          'fields' => [
            [
              'name' => 'assetObjectName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'assetPath',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tiers',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'uuid',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'competitive',
          'op' => [
            'list' => [
              'input' => 'data',
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
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'cosmetic' => [
          'fields' => [
            [
              'name' => 'animationGif',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'animationPng',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'assetPath',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fullIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fullTransparentIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hideIfNotOwned',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'isHiddenIfNotOwned',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'isNullSpray',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'largeArt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'levels',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'smallArt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'themeUuid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'uuid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wideArt',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'cosmetic',
          'op' => [
            'list' => [
              'input' => 'data',
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
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'game_mode' => [
          'fields' => [
            [
              'name' => 'allowsMatchTimeouts',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'assetPath',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'duration',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'economyType',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'gameFeatureOverrides',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'gameRuleBoolOverrides',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'isMinimapHidden',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'isTeamVoiceAllowed',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'orbCount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'roundsPerHalf',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'teamRoles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'uuid',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'game_mode',
          'op' => [
            'list' => [
              'input' => 'data',
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
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'map' => [
          'fields' => [
            [
              'name' => 'assetPath',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'callouts',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'coordinates',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'listViewIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mapUrl',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'narrativeDescription',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'splash',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tacticalDescription',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'uuid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'xMultiplier',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'xScalarToAdd',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'yMultiplier',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'yScalarToAdd',
              'type' => '`$NUMBER`',
            ],
          ],
          'name' => 'map',
          'op' => [
            'list' => [
              'input' => 'data',
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
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
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
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'weapon' => [
          'fields' => [
            [
              'name' => 'assetPath',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'defaultSkinUuid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'killStreamIcon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'shopData',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'skins',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'uuid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weaponStats',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'weapon',
          'op' => [
            'list' => [
              'input' => 'data',
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
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
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
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'en-US',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
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
                    'res' => '`body.data`',
                  ],
                ],
              ],
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
