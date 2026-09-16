

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ValorantSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GameModeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
  afterEach(liveDelay('VALORANT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ValorantSDK.test()
    const ent = testsdk.GameMode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VALORANT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'game_mode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allowsMatchTimeouts","req":false,"short":"Whether match timeouts are allowed","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"assetPath","req":false,"short":"Asset path in game files","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"displayIcon","req":false,"short":"URL to the game mode's display icon","type":"`$STRING`","index$":2},{"active":true,"name":"displayName","req":false,"short":"Display name of the game mode","type":"`$STRING`","index$":3},{"active":true,"name":"duration","req":false,"short":"Duration of the game mode","type":"`$STRING`","index$":4},{"active":true,"name":"economyType","req":false,"short":"Type of economy system","type":"`$STRING`","index$":5},{"active":true,"name":"gameFeatureOverrides","req":false,"short":"Game feature overrides","type":"`$ARRAY`","index$":6},{"active":true,"name":"gameRuleBoolOverrides","req":false,"short":"Game rule boolean overrides","type":"`$ARRAY`","index$":7},{"active":true,"name":"isMinimapHidden","req":false,"short":"Whether the minimap is hidden","type":"`$BOOLEAN`","index$":8},{"active":true,"name":"isTeamVoiceAllowed","req":false,"short":"Whether team voice chat is allowed","type":"`$BOOLEAN`","index$":9},{"active":true,"name":"orbCount","req":false,"short":"Number of orbs in the game mode","type":"`$INTEGER`","index$":10},{"active":true,"name":"roundsPerHalf","req":false,"short":"Number of rounds per half","type":"`$INTEGER`","index$":11},{"active":true,"name":"teamRoles","req":false,"short":"Team roles in the game mode","type":"`$ARRAY`","index$":12},{"active":true,"format":"uuid","name":"uuid","req":false,"short":"Unique identifier for the game mode","type":"`$STRING`","index$":13}],"name":"game_mode","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"en-US","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/gamemodes","json":"{\"operationId\":\"getGameModes\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"allowsMatchTimeouts\":{\"description\":\"Whether match timeouts are allowed\",\"type\":\"boolean\"},\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the game mode's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the game mode\",\"type\":\"string\"},\"duration\":{\"description\":\"Duration of the game mode\",\"type\":\"string\"},\"economyType\":{\"description\":\"Type of economy system\",\"type\":\"string\"},\"gameFeatureOverrides\":{\"description\":\"Game feature overrides\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"gameRuleBoolOverrides\":{\"description\":\"Game rule boolean overrides\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"isMinimapHidden\":{\"description\":\"Whether the minimap is hidden\",\"type\":\"boolean\"},\"isTeamVoiceAllowed\":{\"description\":\"Whether team voice chat is allowed\",\"type\":\"boolean\"},\"orbCount\":{\"description\":\"Number of orbs in the game mode\",\"type\":\"integer\"},\"roundsPerHalf\":{\"description\":\"Number of rounds per half\",\"type\":\"integer\"},\"teamRoles\":{\"description\":\"Team roles in the game mode\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"uuid\":{\"description\":\"Unique identifier for the game mode\",\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of game modes\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/gamemodes","segments":[{"lit":"v1"},{"lit":"gamemodes"}],"select":{"exist":["language"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"game_mode","name__orig":"game_mode","Name":"GameMode","name_":"game_mode","name-":"game-mode","NAME":"GAME_MODE","index$":3}, {"active":true,"entity":"game_mode","key$":"BasicGameModeFlow","kind":"basic","name":"BasicGameModeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"game_mode_ref01"}}],"index$":0}]}, 'GameMode')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let game_mode_ref01_data = Object.values(setup.data.existing.game_mode)[0] as any

    // LIST
    const game_mode_ref01_ent = client.GameMode()
    const game_mode_ref01_match: any = {}

    const game_mode_ref01_list = (await game_mode_ref01_ent.list(game_mode_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/game_mode/GameModeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ValorantSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['game_mode01','game_mode02','game_mode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VALORANT_TEST_GAME_MODE_ENTID': idmap,
    'VALORANT_TEST_LIVE': 'FALSE',
    'VALORANT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VALORANT_TEST_GAME_MODE_ENTID']

  const live = 'TRUE' === env.VALORANT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VALORANT_TEST_GAME_MODE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ValorantSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.VALORANT_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
