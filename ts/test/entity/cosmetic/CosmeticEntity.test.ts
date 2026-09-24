

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


describe('CosmeticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
  afterEach(liveDelay('VALORANT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ValorantSDK.test()
    const ent = testsdk.Cosmetic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VALORANT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cosmetic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"animationGif":{"a":true,"fo":"uri","h":"Animation Gif","n":"animationGif","r":false,"sh":"URL to the spray's animation GIF","t":"`$STRING`","key$":"animationGif","index$":0},"animationPng":{"a":true,"fo":"uri","h":"Animation Png","n":"animationPng","r":false,"sh":"URL to the spray's animation PNG","t":"`$STRING`","key$":"animationPng","index$":1},"assetPath":{"a":true,"h":"Asset Path","n":"assetPath","r":false,"sh":"Asset path in game files","t":"`$STRING`","key$":"assetPath","index$":2},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Category of the spray","t":"`$STRING`","key$":"category","index$":3},"displayIcon":{"a":true,"fo":"uri","h":"Display Icon","n":"displayIcon","r":false,"sh":"URL to the buddy's display icon","t":"`$STRING`","key$":"displayIcon","index$":4},"displayName":{"a":true,"h":"Display Name","n":"displayName","r":false,"sh":"Display name of the buddy","t":"`$STRING`","key$":"displayName","index$":5},"fullIcon":{"a":true,"fo":"uri","h":"Full Icon","n":"fullIcon","r":false,"sh":"URL to the spray's full icon","t":"`$STRING`","key$":"fullIcon","index$":6},"fullTransparentIcon":{"a":true,"fo":"uri","h":"Full Transparent Icon","n":"fullTransparentIcon","r":false,"sh":"URL to the spray's full transparent icon","t":"`$STRING`","key$":"fullTransparentIcon","index$":7},"hideIfNotOwned":{"a":true,"h":"Hide If Not Owned","n":"hideIfNotOwned","r":false,"sh":"Whether the spray is hidden if not owned","t":"`$BOOLEAN`","key$":"hideIfNotOwned","index$":8},"isHiddenIfNotOwned":{"a":true,"h":"Is Hidden If Not Owned","n":"isHiddenIfNotOwned","r":false,"sh":"Whether the buddy is hidden if not owned","t":"`$BOOLEAN`","key$":"isHiddenIfNotOwned","index$":9},"isNullSpray":{"a":true,"h":"Is Null Spray","n":"isNullSpray","r":false,"sh":"Whether this is a null spray","t":"`$BOOLEAN`","key$":"isNullSpray","index$":10},"largeArt":{"a":true,"fo":"uri","h":"Large Art","n":"largeArt","r":false,"sh":"URL to the card's large art","t":"`$STRING`","key$":"largeArt","index$":11},"levels":{"a":true,"h":"Levels","n":"levels","r":false,"t":"`$ARRAY`","key$":"levels","index$":12},"smallArt":{"a":true,"fo":"uri","h":"Small Art","n":"smallArt","r":false,"sh":"URL to the card's small art","t":"`$STRING`","key$":"smallArt","index$":13},"themeUuid":{"a":true,"fo":"uuid","h":"Theme Uuid","n":"themeUuid","r":false,"sh":"UUID of the theme","t":"`$STRING`","key$":"themeUuid","index$":14},"uuid":{"a":true,"fo":"uuid","h":"Uuid","n":"uuid","r":false,"sh":"Unique identifier for the buddy","t":"`$STRING`","key$":"uuid","index$":15},"wideArt":{"a":true,"fo":"uri","h":"Wide Art","n":"wideArt","r":false,"sh":"URL to the card's wide art","t":"`$STRING`","key$":"wideArt","index$":16}},"name":"cosmetic","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/buddies","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/buddies","q":{"exist":["language"]},"r":{},"s":[{"lit":"v1"},{"lit":"buddies"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /v1/cards","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/cards","q":{"exist":["language"]},"r":{},"s":[{"lit":"v1"},{"lit":"cards"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1},{"a":true,"co":{"id":"GET /v1/sprays","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/sprays","q":{"exist":["language"]},"r":{},"s":[{"lit":"v1"},{"lit":"sprays"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cosmetic","name__orig":"cosmetic","Name":"Cosmetic","name_":"cosmetic","name-":"cosmetic","NAME":"COSMETIC","index$":2}, {"active":true,"entity":"cosmetic","key$":"BasicCosmeticFlow","kind":"basic","name":"BasicCosmeticFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cosmetic_ref01"}}],"index$":0}]}, 'Cosmetic', {"GET /v1/buddies":{"protocol":"http","operationId":"getBuddies","responses":{"200":{"description":"Successful response with list of buddies","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":200,"key$":"status","type":"integer"},"data":{"items":{"properties":{"assetPath":{"description":"Asset path in game files","type":"string","key$":"assetPath"},"displayIcon":{"description":"URL to the buddy's display icon","format":"uri","type":"string","key$":"displayIcon"},"displayName":{"description":"Display name of the buddy","type":"string","key$":"displayName"},"isHiddenIfNotOwned":{"description":"Whether the buddy is hidden if not owned","type":"boolean","key$":"isHiddenIfNotOwned"},"levels":{"items":{"properties":{"assetPath":{"type":"string"},"charmLevel":{"type":"integer"},"displayIcon":{"format":"uri","type":"string"},"displayName":{"type":"string"},"hideIfNotOwned":{"type":"boolean"},"uuid":{"format":"uuid","type":"string"}},"type":"object"},"type":"array","key$":"levels"},"themeUuid":{"description":"UUID of the theme","format":"uuid","type":"string","key$":"themeUuid"},"uuid":{"description":"Unique identifier for the buddy","format":"uuid","type":"string","key$":"uuid"}},"type":"object","x-ref":"#/components/schemas/Buddy","index$":0},"key$":"data","type":"array"}}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":0}],"securitySource":"unspecified"},"GET /v1/cards":{"protocol":"http","operationId":"getCards","responses":{"200":{"description":"Successful response with list of player cards","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":200,"key$":"status","type":"integer"},"data":{"items":{"properties":{"assetPath":{"description":"Asset path in game files","type":"string","key$":"assetPath"},"displayIcon":{"description":"URL to the card's display icon","format":"uri","type":"string","key$":"displayIcon"},"displayName":{"description":"Display name of the player card","type":"string","key$":"displayName"},"isHiddenIfNotOwned":{"description":"Whether the card is hidden if not owned","type":"boolean","key$":"isHiddenIfNotOwned"},"largeArt":{"description":"URL to the card's large art","format":"uri","type":"string","key$":"largeArt"},"smallArt":{"description":"URL to the card's small art","format":"uri","type":"string","key$":"smallArt"},"themeUuid":{"description":"UUID of the theme","format":"uuid","type":"string","key$":"themeUuid"},"uuid":{"description":"Unique identifier for the player card","format":"uuid","type":"string","key$":"uuid"},"wideArt":{"description":"URL to the card's wide art","format":"uri","type":"string","key$":"wideArt"}},"type":"object","x-ref":"#/components/schemas/PlayerCard","index$":0},"key$":"data","type":"array"}}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":0}],"securitySource":"unspecified"},"GET /v1/sprays":{"protocol":"http","operationId":"getSprays","responses":{"200":{"description":"Successful response with list of sprays","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":200,"key$":"status","type":"integer"},"data":{"items":{"properties":{"animationGif":{"description":"URL to the spray's animation GIF","format":"uri","type":"string","key$":"animationGif"},"animationPng":{"description":"URL to the spray's animation PNG","format":"uri","type":"string","key$":"animationPng"},"assetPath":{"description":"Asset path in game files","type":"string","key$":"assetPath"},"category":{"description":"Category of the spray","type":"string","key$":"category"},"displayIcon":{"description":"URL to the spray's display icon","format":"uri","type":"string","key$":"displayIcon"},"displayName":{"description":"Display name of the spray","type":"string","key$":"displayName"},"fullIcon":{"description":"URL to the spray's full icon","format":"uri","type":"string","key$":"fullIcon"},"fullTransparentIcon":{"description":"URL to the spray's full transparent icon","format":"uri","type":"string","key$":"fullTransparentIcon"},"hideIfNotOwned":{"description":"Whether the spray is hidden if not owned","type":"boolean","key$":"hideIfNotOwned"},"isNullSpray":{"description":"Whether this is a null spray","type":"boolean","key$":"isNullSpray"},"levels":{"items":{"type":"object"},"type":"array","key$":"levels"},"themeUuid":{"description":"UUID of the theme","format":"uuid","type":"string","key$":"themeUuid"},"uuid":{"description":"Unique identifier for the spray","format":"uuid","type":"string","key$":"uuid"}},"type":"object","x-ref":"#/components/schemas/Spray","index$":0},"key$":"data","type":"array"}}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cosmetic_ref01_data = Object.values(setup.data.existing.cosmetic)[0] as any

    // LIST
    const cosmetic_ref01_ent = client.Cosmetic()
    const cosmetic_ref01_match: any = {}

    const cosmetic_ref01_list = (await cosmetic_ref01_ent.list(cosmetic_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cosmetic/CosmeticTestData.json')

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
    ['cosmetic01','cosmetic02','cosmetic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VALORANT_TEST_COSMETIC_ENTID': idmap,
    'VALORANT_TEST_LIVE': 'FALSE',
    'VALORANT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VALORANT_TEST_COSMETIC_ENTID']

  const live = 'TRUE' === env.VALORANT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VALORANT_TEST_COSMETIC_ENTID']
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
  
