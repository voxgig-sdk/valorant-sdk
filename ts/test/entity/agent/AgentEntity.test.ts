

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


describe('AgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
  afterEach(liveDelay('VALORANT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ValorantSDK.test()
    const ent = testsdk.Agent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VALORANT_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"abilities","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"assetPath","req":false,"short":"Asset path in game files","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"background","req":false,"short":"URL to the agent's background image","type":"`$STRING`","index$":2},{"active":true,"name":"backgroundGradientColors","req":false,"short":"Gradient colors for the agent's background","type":"`$ARRAY`","index$":3},{"active":true,"format":"uri","name":"bustPortrait","req":false,"short":"URL to the agent's bust portrait","type":"`$STRING`","index$":4},{"active":true,"name":"characterTags","req":false,"short":"Tags associated with the character","type":"`$ARRAY`","index$":5},{"active":true,"name":"description","req":false,"short":"Description of the agent","type":"`$STRING`","index$":6},{"active":true,"name":"developerName","req":false,"short":"Internal developer name","type":"`$STRING`","index$":7},{"active":true,"format":"uri","name":"displayIcon","req":false,"short":"URL to the agent's display icon","type":"`$STRING`","index$":8},{"active":true,"format":"uri","name":"displayIconSmall","req":false,"short":"URL to the agent's small display icon","type":"`$STRING`","index$":9},{"active":true,"name":"displayName","req":false,"short":"Display name of the agent","type":"`$STRING`","index$":10},{"active":true,"format":"uri","name":"fullPortrait","req":false,"short":"URL to the agent's full portrait","type":"`$STRING`","index$":11},{"active":true,"format":"uri","name":"fullPortraitV2","req":false,"short":"URL to the agent's full portrait version 2","type":"`$STRING`","index$":12},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"isAvailableForTest","req":false,"short":"Whether the agent is available for testing","type":"`$BOOLEAN`","index$":14},{"active":true,"name":"isBaseContent","req":false,"short":"Whether the agent is base content","type":"`$BOOLEAN`","index$":15},{"active":true,"name":"isFullPortraitRightFacing","req":false,"short":"Whether the full portrait faces right","type":"`$BOOLEAN`","index$":16},{"active":true,"name":"isPlayableCharacter","req":false,"short":"Whether the agent is playable","type":"`$BOOLEAN`","index$":17},{"active":true,"format":"uri","name":"killfeedPortrait","req":false,"short":"URL to the agent's killfeed portrait","type":"`$STRING`","index$":18},{"active":true,"name":"role","req":false,"type":"`$OBJECT`","index$":19},{"active":true,"format":"uuid","name":"uuid","req":false,"short":"Unique identifier for the agent","type":"`$STRING`","index$":20},{"active":true,"name":"voiceLine","req":false,"type":"`$OBJECT`","index$":21}],"id":{"field":"id","name":"id"},"name":"agent","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"is_playable_character","orig":"is_playable_character","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":"en-US","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/agents","json":"{\"operationId\":\"getAgents\",\"parameters\":[{\"description\":\"Language code for localized content (e.g., en-US, es-ES, fr-FR)\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}},{\"description\":\"Filter only playable characters\",\"in\":\"query\",\"name\":\"isPlayableCharacter\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"abilities\":{\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"displayIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"type\":\"string\"},\"slot\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"background\":{\"description\":\"URL to the agent's background image\",\"format\":\"uri\",\"type\":\"string\"},\"backgroundGradientColors\":{\"description\":\"Gradient colors for the agent's background\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"bustPortrait\":{\"description\":\"URL to the agent's bust portrait\",\"format\":\"uri\",\"type\":\"string\"},\"characterTags\":{\"description\":\"Tags associated with the character\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":{\"description\":\"Description of the agent\",\"type\":\"string\"},\"developerName\":{\"description\":\"Internal developer name\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the agent's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayIconSmall\":{\"description\":\"URL to the agent's small display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the agent\",\"type\":\"string\"},\"fullPortrait\":{\"description\":\"URL to the agent's full portrait\",\"format\":\"uri\",\"type\":\"string\"},\"fullPortraitV2\":{\"description\":\"URL to the agent's full portrait version 2\",\"format\":\"uri\",\"type\":\"string\"},\"isAvailableForTest\":{\"description\":\"Whether the agent is available for testing\",\"type\":\"boolean\"},\"isBaseContent\":{\"description\":\"Whether the agent is base content\",\"type\":\"boolean\"},\"isFullPortraitRightFacing\":{\"description\":\"Whether the full portrait faces right\",\"type\":\"boolean\"},\"isPlayableCharacter\":{\"description\":\"Whether the agent is playable\",\"type\":\"boolean\"},\"killfeedPortrait\":{\"description\":\"URL to the agent's killfeed portrait\",\"format\":\"uri\",\"type\":\"string\"},\"role\":{\"properties\":{\"assetPath\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"displayIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"type\":\"string\"},\"uuid\":{\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"uuid\":{\"description\":\"Unique identifier for the agent\",\"format\":\"uuid\",\"type\":\"string\"},\"voiceLine\":{\"properties\":{\"maxDuration\":{\"type\":\"number\"},\"mediaList\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"minDuration\":{\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of agents\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/agents","segments":[{"lit":"v1"},{"lit":"agents"}],"select":{"exist":["is_playable_character","language"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"uuid","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"en-US","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/agents/{uuid}","json":"{\"operationId\":\"getAgentByUuid\",\"parameters\":[{\"description\":\"UUID of the agent\",\"in\":\"path\",\"name\":\"uuid\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"abilities\":{\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"displayIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"type\":\"string\"},\"slot\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"background\":{\"description\":\"URL to the agent's background image\",\"format\":\"uri\",\"type\":\"string\"},\"backgroundGradientColors\":{\"description\":\"Gradient colors for the agent's background\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"bustPortrait\":{\"description\":\"URL to the agent's bust portrait\",\"format\":\"uri\",\"type\":\"string\"},\"characterTags\":{\"description\":\"Tags associated with the character\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":{\"description\":\"Description of the agent\",\"type\":\"string\"},\"developerName\":{\"description\":\"Internal developer name\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the agent's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayIconSmall\":{\"description\":\"URL to the agent's small display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the agent\",\"type\":\"string\"},\"fullPortrait\":{\"description\":\"URL to the agent's full portrait\",\"format\":\"uri\",\"type\":\"string\"},\"fullPortraitV2\":{\"description\":\"URL to the agent's full portrait version 2\",\"format\":\"uri\",\"type\":\"string\"},\"isAvailableForTest\":{\"description\":\"Whether the agent is available for testing\",\"type\":\"boolean\"},\"isBaseContent\":{\"description\":\"Whether the agent is base content\",\"type\":\"boolean\"},\"isFullPortraitRightFacing\":{\"description\":\"Whether the full portrait faces right\",\"type\":\"boolean\"},\"isPlayableCharacter\":{\"description\":\"Whether the agent is playable\",\"type\":\"boolean\"},\"killfeedPortrait\":{\"description\":\"URL to the agent's killfeed portrait\",\"format\":\"uri\",\"type\":\"string\"},\"role\":{\"properties\":{\"assetPath\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"displayIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"type\":\"string\"},\"uuid\":{\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"uuid\":{\"description\":\"Unique identifier for the agent\",\"format\":\"uuid\",\"type\":\"string\"},\"voiceLine\":{\"properties\":{\"maxDuration\":{\"type\":\"number\"},\"mediaList\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"minDuration\":{\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with agent details\"},\"404\":{\"description\":\"Agent not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/agents/{uuid}","rename":{"param":{"uuid":"id"}},"segments":[{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"select":{"exist":["id","language"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"agent","name__orig":"agent","Name":"Agent","name_":"agent","name-":"agent","NAME":"AGENT","index$":0}, {"active":true,"entity":"agent","key$":"BasicAgentFlow","kind":"basic","name":"BasicAgentFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"agent_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_dt0"},"match":{"id":"agent01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"index$":1}]}, 'Agent')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_ref01_data = Object.values(setup.data.existing.agent)[0] as any

    // LIST
    const agent_ref01_ent = client.Agent()
    const agent_ref01_match: any = {}

    const agent_ref01_list = (await agent_ref01_ent.list(agent_ref01_match)).map((e: any) => e.data())


    // LOAD
    const agent_ref01_match_dt0: any = {}
    agent_ref01_match_dt0.id = agent_ref01_data.id
    const agent_ref01_data_dt0 = (await agent_ref01_ent.load(agent_ref01_match_dt0)).data()
    assert(agent_ref01_data_dt0.id === agent_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/agent/AgentTestData.json')

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
    ['agent01','agent02','agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VALORANT_TEST_AGENT_ENTID': idmap,
    'VALORANT_TEST_LIVE': 'FALSE',
    'VALORANT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VALORANT_TEST_AGENT_ENTID']

  const live = 'TRUE' === env.VALORANT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VALORANT_TEST_AGENT_ENTID']
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
  
