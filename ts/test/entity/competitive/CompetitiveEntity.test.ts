

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


describe('CompetitiveEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
  afterEach(liveDelay('VALORANT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ValorantSDK.test()
    const ent = testsdk.Competitive()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VALORANT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'competitive.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"assetObjectName","req":false,"short":"Asset object name","type":"`$STRING`","index$":0},{"active":true,"name":"assetPath","req":false,"short":"Asset path in game files","type":"`$STRING`","index$":1},{"active":true,"name":"tiers","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"format":"uuid","name":"uuid","req":false,"short":"Unique identifier for the competitive tier set","type":"`$STRING`","index$":3}],"name":"competitive","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"en-US","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/competitivetiers","json":"{\"operationId\":\"getCompetitiveTiers\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"assetObjectName\":{\"description\":\"Asset object name\",\"type\":\"string\"},\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"tiers\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"color\":{\"type\":\"string\"},\"division\":{\"type\":\"string\"},\"divisionName\":{\"type\":\"string\"},\"largeIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"rankTriangleDownIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"rankTriangleUpIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"smallIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"tier\":{\"type\":\"integer\"},\"tierName\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"uuid\":{\"description\":\"Unique identifier for the competitive tier set\",\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with competitive tier information\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/competitivetiers","segments":[{"lit":"v1"},{"lit":"competitivetiers"}],"select":{"exist":["language"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"competitive","name__orig":"competitive","Name":"Competitive","name_":"competitive","name-":"competitive","NAME":"COMPETITIVE","index$":1}, {"active":true,"entity":"competitive","key$":"BasicCompetitiveFlow","kind":"basic","name":"BasicCompetitiveFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"competitive_ref01"}}],"index$":0}]}, 'Competitive')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let competitive_ref01_data = Object.values(setup.data.existing.competitive)[0] as any

    // LIST
    const competitive_ref01_ent = client.Competitive()
    const competitive_ref01_match: any = {}

    const competitive_ref01_list = (await competitive_ref01_ent.list(competitive_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/competitive/CompetitiveTestData.json')

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
    ['competitive01','competitive02','competitive03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VALORANT_TEST_COMPETITIVE_ENTID': idmap,
    'VALORANT_TEST_LIVE': 'FALSE',
    'VALORANT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VALORANT_TEST_COMPETITIVE_ENTID']

  const live = 'TRUE' === env.VALORANT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VALORANT_TEST_COMPETITIVE_ENTID']
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
  
