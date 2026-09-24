

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assetObjectName":{"a":true,"h":"Asset Object Name","n":"assetObjectName","r":false,"sh":"Asset object name","t":"`$STRING`","key$":"assetObjectName","index$":0},"assetPath":{"a":true,"h":"Asset Path","n":"assetPath","r":false,"sh":"Asset path in game files","t":"`$STRING`","key$":"assetPath","index$":1},"tiers":{"a":true,"h":"Tiers","n":"tiers","r":false,"t":"`$ARRAY`","key$":"tiers","index$":2},"uuid":{"a":true,"fo":"uuid","h":"Uuid","n":"uuid","r":false,"sh":"Unique identifier for the competitive tier set","t":"`$STRING`","key$":"uuid","index$":3}},"name":"competitive","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/competitivetiers","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/competitivetiers","q":{"exist":["language"]},"r":{},"s":[{"lit":"v1"},{"lit":"competitivetiers"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"competitive","name__orig":"competitive","Name":"Competitive","name_":"competitive","name-":"competitive","NAME":"COMPETITIVE","index$":1}, {"active":true,"entity":"competitive","key$":"BasicCompetitiveFlow","kind":"basic","name":"BasicCompetitiveFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"competitive_ref01"}}],"index$":0}]}, 'Competitive', {"GET /v1/competitivetiers":{"protocol":"http","operationId":"getCompetitiveTiers","responses":{"200":{"description":"Successful response with competitive tier information","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":200,"key$":"status","type":"integer"},"data":{"items":{"properties":{"assetObjectName":{"description":"Asset object name","type":"string","key$":"assetObjectName"},"assetPath":{"description":"Asset path in game files","type":"string","key$":"assetPath"},"tiers":{"items":{"properties":{"backgroundColor":{"type":"string"},"color":{"type":"string"},"division":{"type":"string"},"divisionName":{"type":"string"},"largeIcon":{"format":"uri","type":"string"},"rankTriangleDownIcon":{"format":"uri","type":"string"},"rankTriangleUpIcon":{"format":"uri","type":"string"},"smallIcon":{"format":"uri","type":"string"},"tier":{"type":"integer"},"tierName":{"type":"string"}},"type":"object"},"type":"array","key$":"tiers"},"uuid":{"description":"Unique identifier for the competitive tier set","format":"uuid","type":"string","key$":"uuid"}},"type":"object","x-ref":"#/components/schemas/CompetitiveTier","index$":0},"key$":"data","type":"array"}}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":0}],"securitySource":"unspecified"}})
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
  
