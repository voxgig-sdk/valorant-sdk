

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


describe('WeaponEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
  afterEach(liveDelay('VALORANT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ValorantSDK.test()
    const ent = testsdk.Weapon()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VALORANT_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'weapon.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assetPath":{"a":true,"h":"Asset Path","n":"assetPath","r":false,"sh":"Asset path in game files","t":"`$STRING`","key$":"assetPath","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Weapon category (e.g., Rifle, Pistol)","t":"`$STRING`","key$":"category","index$":1},"defaultSkinUuid":{"a":true,"fo":"uuid","h":"Default Skin Uuid","n":"defaultSkinUuid","r":false,"sh":"UUID of the default skin","t":"`$STRING`","key$":"defaultSkinUuid","index$":2},"displayIcon":{"a":true,"fo":"uri","h":"Display Icon","n":"displayIcon","r":false,"sh":"URL to the weapon's display icon","t":"`$STRING`","key$":"displayIcon","index$":3},"displayName":{"a":true,"h":"Display Name","n":"displayName","r":false,"sh":"Display name of the weapon","t":"`$STRING`","key$":"displayName","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"killStreamIcon":{"a":true,"fo":"uri","h":"Kill Stream Icon","n":"killStreamIcon","r":false,"sh":"URL to the weapon's kill stream icon","t":"`$STRING`","key$":"killStreamIcon","index$":6},"shopData":{"a":true,"h":"Shop Data","n":"shopData","r":false,"t":"`$OBJECT`","key$":"shopData","index$":7},"skins":{"a":true,"h":"Skins","n":"skins","r":false,"t":"`$ARRAY`","key$":"skins","index$":8},"uuid":{"a":true,"fo":"uuid","h":"Uuid","n":"uuid","r":false,"sh":"Unique identifier for the weapon","t":"`$STRING`","key$":"uuid","index$":9},"weaponStats":{"a":true,"h":"Weapon Stats","n":"weaponStats","r":false,"t":"`$OBJECT`","key$":"weaponStats","index$":10}},"id":{"field":"id","name":"id"},"name":"weapon","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/weapons","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/weapons","q":{"exist":["language"]},"r":{},"s":[{"lit":"v1"},{"lit":"weapons"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/weapons/{uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"uuid","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/weapons/{uuid}","q":{"exist":["id","language"]},"r":{"param":{"uuid":"id"}},"s":[{"lit":"v1"},{"lit":"weapons"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"weapon","name__orig":"weapon","Name":"Weapon","name_":"weapon","name-":"weapon","NAME":"WEAPON","index$":5}, {"active":true,"entity":"weapon","key$":"BasicWeaponFlow","kind":"basic","name":"BasicWeaponFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"weapon_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"weapon_ref01","srcdatavar":"weapon_ref01_data","suffix":"_dt0"},"m":{"id":"weapon01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-weapon_ref01"}}],"index$":1}]}, 'Weapon', {"GET /v1/weapons":{"protocol":"http","operationId":"getWeapons","responses":{"200":{"description":"Successful response with list of weapons","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":200,"key$":"status","type":"integer"},"data":{"items":{"properties":{"assetPath":{"description":"Asset path in game files","type":"string","key$":"assetPath"},"category":{"description":"Weapon category (e.g., Rifle, Pistol)","type":"string","key$":"category"},"defaultSkinUuid":{"description":"UUID of the default skin","format":"uuid","type":"string","key$":"defaultSkinUuid"},"displayIcon":{"description":"URL to the weapon's display icon","format":"uri","type":"string","key$":"displayIcon"},"displayName":{"description":"Display name of the weapon","type":"string","key$":"displayName"},"killStreamIcon":{"description":"URL to the weapon's kill stream icon","format":"uri","type":"string","key$":"killStreamIcon"},"shopData":{"properties":{"assetPath":{"type":"string"},"canBeTrashed":{"type":"boolean"},"category":{"type":"string"},"categoryText":{"type":"string"},"cost":{"type":"integer"},"gridPosition":{"type":"object"},"newImage":{"format":"uri","type":"string"},"newImage2":{"format":"uri","type":"string"}},"type":"object","key$":"shopData"},"skins":{"items":{"type":"object"},"type":"array","key$":"skins"},"uuid":{"description":"Unique identifier for the weapon","format":"uuid","type":"string","key$":"uuid"},"weaponStats":{"properties":{"adsStats":{"type":"object"},"airBurstStats":{"type":"object"},"altFireType":{"type":"string"},"altShotgunStats":{"type":"object"},"damageRanges":{"items":{"type":"object"},"type":"array"},"equipTimeSeconds":{"type":"number"},"feature":{"type":"string"},"fireMode":{"type":"string"},"fireRate":{"type":"number"},"firstBulletAccuracy":{"type":"number"},"magazineSize":{"type":"integer"},"reloadTimeSeconds":{"type":"number"},"runSpeedMultiplier":{"type":"number"},"shotgunPelletCount":{"type":"integer"},"wallPenetration":{"type":"string"}},"type":"object","key$":"weaponStats"}},"type":"object","x-ref":"#/components/schemas/Weapon","index$":0},"key$":"data","type":"array"}}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":0}],"securitySource":"unspecified"},"GET /v1/weapons/{uuid}":{"protocol":"http","operationId":"getWeaponByUuid","responses":{"200":{"description":"Successful response with weapon details","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"integer","example":200},"data":{"type":"object","properties":{"uuid":{"description":"Unique identifier for the weapon","format":"uuid","type":"string","key$":"uuid"},"displayName":{"description":"Display name of the weapon","type":"string","key$":"displayName"},"category":{"description":"Weapon category (e.g., Rifle, Pistol)","type":"string","key$":"category"},"defaultSkinUuid":{"description":"UUID of the default skin","format":"uuid","type":"string","key$":"defaultSkinUuid"},"displayIcon":{"description":"URL to the weapon's display icon","format":"uri","type":"string","key$":"displayIcon"},"killStreamIcon":{"description":"URL to the weapon's kill stream icon","format":"uri","type":"string","key$":"killStreamIcon"},"assetPath":{"description":"Asset path in game files","type":"string","key$":"assetPath"},"weaponStats":{"properties":{"adsStats":{"type":"object"},"airBurstStats":{"type":"object"},"altFireType":{"type":"string"},"altShotgunStats":{"type":"object"},"damageRanges":{"items":{"type":"object"},"type":"array"},"equipTimeSeconds":{"type":"number"},"feature":{"type":"string"},"fireMode":{"type":"string"},"fireRate":{"type":"number"},"firstBulletAccuracy":{"type":"number"},"magazineSize":{"type":"integer"},"reloadTimeSeconds":{"type":"number"},"runSpeedMultiplier":{"type":"number"},"shotgunPelletCount":{"type":"integer"},"wallPenetration":{"type":"string"}},"type":"object","key$":"weaponStats"},"shopData":{"properties":{"assetPath":{"type":"string"},"canBeTrashed":{"type":"boolean"},"category":{"type":"string"},"categoryText":{"type":"string"},"cost":{"type":"integer"},"gridPosition":{"type":"object"},"newImage":{"format":"uri","type":"string"},"newImage2":{"format":"uri","type":"string"}},"type":"object","key$":"shopData"},"skins":{"items":{"type":"object"},"type":"array","key$":"skins"}},"x-ref":"#/components/schemas/Weapon","index$":0}}}}}},"404":{"description":"Weapon not found"},"500":{"description":"Internal server error"}},"parameters":[{"name":"uuid","in":"path","description":"UUID of the weapon","required":true,"schema":{"type":"string","format":"uuid"},"index$":0},{"name":"language","in":"query","description":"Language code for localized content","required":false,"schema":{"type":"string","default":"en-US"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let weapon_ref01_data = Object.values(setup.data.existing.weapon)[0] as any

    // LIST
    const weapon_ref01_ent = client.Weapon()
    const weapon_ref01_match: any = {}

    const weapon_ref01_list = (await weapon_ref01_ent.list(weapon_ref01_match)).map((e: any) => e.data())


    // LOAD
    const weapon_ref01_match_dt0: any = {}
    weapon_ref01_match_dt0.id = weapon_ref01_data.id
    const weapon_ref01_data_dt0 = (await weapon_ref01_ent.load(weapon_ref01_match_dt0)).data()
    assert(weapon_ref01_data_dt0.id === weapon_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/weapon/WeaponTestData.json')

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
    ['weapon01','weapon02','weapon03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VALORANT_TEST_WEAPON_ENTID': idmap,
    'VALORANT_TEST_LIVE': 'FALSE',
    'VALORANT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VALORANT_TEST_WEAPON_ENTID']

  const live = 'TRUE' === env.VALORANT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VALORANT_TEST_WEAPON_ENTID']
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
  
