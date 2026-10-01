

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


describe('MapEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
  afterEach(liveDelay('VALORANT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ValorantSDK.test()
    const ent = testsdk.Map()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VALORANT_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'map.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assetPath":{"a":true,"h":"Asset Path","n":"assetPath","r":false,"sh":"Asset path in game files","t":"`$STRING`","key$":"assetPath","index$":0},"callouts":{"a":true,"h":"Callouts","n":"callouts","r":false,"t":"`$ARRAY`","key$":"callouts","index$":1},"coordinates":{"a":true,"h":"Coordinates","n":"coordinates","r":false,"sh":"Geographic coordinates of the map location","t":"`$STRING`","key$":"coordinates","index$":2},"displayIcon":{"a":true,"fo":"uri","h":"Display Icon","n":"displayIcon","r":false,"sh":"URL to the map's display icon","t":"`$STRING`","key$":"displayIcon","index$":3},"displayName":{"a":true,"h":"Display Name","n":"displayName","r":false,"sh":"Display name of the map","t":"`$STRING`","key$":"displayName","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"listViewIcon":{"a":true,"fo":"uri","h":"List View Icon","n":"listViewIcon","r":false,"sh":"URL to the map's list view icon","t":"`$STRING`","key$":"listViewIcon","index$":6},"mapUrl":{"a":true,"fo":"uri","h":"Map Url","n":"mapUrl","r":false,"sh":"URL to the map overview","t":"`$STRING`","key$":"mapUrl","index$":7},"narrativeDescription":{"a":true,"h":"Narrative Description","n":"narrativeDescription","r":false,"sh":"Narrative description of the map","t":"`$STRING`","key$":"narrativeDescription","index$":8},"splash":{"a":true,"fo":"uri","h":"Splash","n":"splash","r":false,"sh":"URL to the map's splash image","t":"`$STRING`","key$":"splash","index$":9},"tacticalDescription":{"a":true,"h":"Tactical Description","n":"tacticalDescription","r":false,"sh":"Tactical description of the map","t":"`$STRING`","key$":"tacticalDescription","index$":10},"uuid":{"a":true,"fo":"uuid","h":"Uuid","n":"uuid","r":false,"sh":"Unique identifier for the map","t":"`$STRING`","key$":"uuid","index$":11},"xMultiplier":{"a":true,"h":"X Multiplier","n":"xMultiplier","r":false,"sh":"X coordinate multiplier","t":"`$NUMBER`","key$":"xMultiplier","index$":12},"xScalarToAdd":{"a":true,"h":"X Scalar To Add","n":"xScalarToAdd","r":false,"sh":"X scalar to add","t":"`$NUMBER`","key$":"xScalarToAdd","index$":13},"yMultiplier":{"a":true,"h":"Y Multiplier","n":"yMultiplier","r":false,"sh":"Y coordinate multiplier","t":"`$NUMBER`","key$":"yMultiplier","index$":14},"yScalarToAdd":{"a":true,"h":"Y Scalar To Add","n":"yScalarToAdd","r":false,"sh":"Y scalar to add","t":"`$NUMBER`","key$":"yScalarToAdd","index$":15}},"id":{"field":"id","name":"id"},"name":"map","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/maps","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/maps","q":{"exist":["language"]},"r":{},"s":[{"lit":"v1"},{"lit":"maps"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/maps/{uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"uuid","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/maps/{uuid}","q":{"exist":["id","language"]},"r":{"param":{"uuid":"id"}},"s":[{"lit":"v1"},{"lit":"maps"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"map","name__orig":"map","Name":"Map","name_":"map","name-":"map","NAME":"MAP","index$":4}, {"active":true,"entity":"map","key$":"BasicMapFlow","kind":"basic","name":"BasicMapFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"map_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"map_ref01","srcdatavar":"map_ref01_data","suffix":"_dt0"},"m":{"id":"map01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-map_ref01"}}],"index$":1}]}, 'Map', {"GET /v1/maps":{"protocol":"http","parameters":[{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":0}]},"GET /v1/maps/{uuid}":{"protocol":"http","parameters":[{"name":"uuid","in":"path","description":"UUID of the map","required":true,"schema":{"type":"string","format":"uuid"},"index$":0},{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let map_ref01_data = Object.values(setup.data.existing.map)[0] as any

    // LIST
    const map_ref01_ent = client.Map()
    const map_ref01_match: any = {}

    const map_ref01_list = (await map_ref01_ent.list(map_ref01_match)).map((e: any) => e.data())


    // LOAD
    const map_ref01_match_dt0: any = {}
    map_ref01_match_dt0.id = map_ref01_data.id
    const map_ref01_data_dt0 = (await map_ref01_ent.load(map_ref01_match_dt0)).data()
    assert(map_ref01_data_dt0.id === map_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/map/MapTestData.json')

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
    ['map01','map02','map03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VALORANT_TEST_MAP_ENTID': idmap,
    'VALORANT_TEST_LIVE': 'FALSE',
    'VALORANT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VALORANT_TEST_MAP_ENTID']

  const live = 'TRUE' === env.VALORANT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VALORANT_TEST_MAP_ENTID']
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
  
