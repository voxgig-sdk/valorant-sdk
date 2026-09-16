"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WeaponEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VALORANT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ValorantSDK.test();
        const ent = testsdk.Weapon();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VALORANT_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'weapon.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "assetPath", "req": false, "short": "Asset path in game files", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "category", "req": false, "short": "Weapon category (e.g., Rifle, Pistol)", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "uuid", "name": "defaultSkinUuid", "req": false, "short": "UUID of the default skin", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "uri", "name": "displayIcon", "req": false, "short": "URL to the weapon's display icon", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "displayName", "req": false, "short": "Display name of the weapon", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "uri", "name": "killStreamIcon", "req": false, "short": "URL to the weapon's kill stream icon", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "shopData", "req": false, "type": "`$OBJECT`", "index$": 7 }, { "active": true, "name": "skins", "req": false, "type": "`$ARRAY`", "index$": 8 }, { "active": true, "format": "uuid", "name": "uuid", "req": false, "short": "Unique identifier for the weapon", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "weaponStats", "req": false, "type": "`$OBJECT`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "weapon", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "en-US", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v1/weapons", "json": "{\"operationId\":\"getWeapons\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"category\":{\"description\":\"Weapon category (e.g., Rifle, Pistol)\",\"type\":\"string\"},\"defaultSkinUuid\":{\"description\":\"UUID of the default skin\",\"format\":\"uuid\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the weapon's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the weapon\",\"type\":\"string\"},\"killStreamIcon\":{\"description\":\"URL to the weapon's kill stream icon\",\"format\":\"uri\",\"type\":\"string\"},\"shopData\":{\"properties\":{\"assetPath\":{\"type\":\"string\"},\"canBeTrashed\":{\"type\":\"boolean\"},\"category\":{\"type\":\"string\"},\"categoryText\":{\"type\":\"string\"},\"cost\":{\"type\":\"integer\"},\"gridPosition\":{\"type\":\"object\"},\"newImage\":{\"format\":\"uri\",\"type\":\"string\"},\"newImage2\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"skins\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"uuid\":{\"description\":\"Unique identifier for the weapon\",\"format\":\"uuid\",\"type\":\"string\"},\"weaponStats\":{\"properties\":{\"adsStats\":{\"type\":\"object\"},\"airBurstStats\":{\"type\":\"object\"},\"altFireType\":{\"type\":\"string\"},\"altShotgunStats\":{\"type\":\"object\"},\"damageRanges\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"equipTimeSeconds\":{\"type\":\"number\"},\"feature\":{\"type\":\"string\"},\"fireMode\":{\"type\":\"string\"},\"fireRate\":{\"type\":\"number\"},\"firstBulletAccuracy\":{\"type\":\"number\"},\"magazineSize\":{\"type\":\"integer\"},\"reloadTimeSeconds\":{\"type\":\"number\"},\"runSpeedMultiplier\":{\"type\":\"number\"},\"shotgunPelletCount\":{\"type\":\"integer\"},\"wallPenetration\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of weapons\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/weapons", "segments": [{ "lit": "v1" }, { "lit": "weapons" }], "select": { "exist": ["language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "uuid", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "en-US", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v1/weapons/{uuid}", "json": "{\"operationId\":\"getWeaponByUuid\",\"parameters\":[{\"description\":\"UUID of the weapon\",\"in\":\"path\",\"name\":\"uuid\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"category\":{\"description\":\"Weapon category (e.g., Rifle, Pistol)\",\"type\":\"string\"},\"defaultSkinUuid\":{\"description\":\"UUID of the default skin\",\"format\":\"uuid\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the weapon's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the weapon\",\"type\":\"string\"},\"killStreamIcon\":{\"description\":\"URL to the weapon's kill stream icon\",\"format\":\"uri\",\"type\":\"string\"},\"shopData\":{\"properties\":{\"assetPath\":{\"type\":\"string\"},\"canBeTrashed\":{\"type\":\"boolean\"},\"category\":{\"type\":\"string\"},\"categoryText\":{\"type\":\"string\"},\"cost\":{\"type\":\"integer\"},\"gridPosition\":{\"type\":\"object\"},\"newImage\":{\"format\":\"uri\",\"type\":\"string\"},\"newImage2\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"skins\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"uuid\":{\"description\":\"Unique identifier for the weapon\",\"format\":\"uuid\",\"type\":\"string\"},\"weaponStats\":{\"properties\":{\"adsStats\":{\"type\":\"object\"},\"airBurstStats\":{\"type\":\"object\"},\"altFireType\":{\"type\":\"string\"},\"altShotgunStats\":{\"type\":\"object\"},\"damageRanges\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"equipTimeSeconds\":{\"type\":\"number\"},\"feature\":{\"type\":\"string\"},\"fireMode\":{\"type\":\"string\"},\"fireRate\":{\"type\":\"number\"},\"firstBulletAccuracy\":{\"type\":\"number\"},\"magazineSize\":{\"type\":\"integer\"},\"reloadTimeSeconds\":{\"type\":\"number\"},\"runSpeedMultiplier\":{\"type\":\"number\"},\"shotgunPelletCount\":{\"type\":\"integer\"},\"wallPenetration\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with weapon details\"},\"404\":{\"description\":\"Weapon not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/weapons/{uuid}", "rename": { "param": { "uuid": "id" } }, "segments": [{ "lit": "v1" }, { "lit": "weapons" }, { "var": "id" }], "select": { "exist": ["id", "language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "weapon", "name__orig": "weapon", "Name": "Weapon", "name_": "weapon", "name-": "weapon", "NAME": "WEAPON", "index$": 5 }, { "active": true, "entity": "weapon", "key$": "BasicWeaponFlow", "kind": "basic", "name": "BasicWeaponFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "weapon_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "weapon_ref01", "srcdatavar": "weapon_ref01_data", "suffix": "_dt0" }, "match": { "id": "weapon01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-weapon_ref01" } }], "index$": 1 }] }, 'Weapon');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let weapon_ref01_data = Object.values(setup.data.existing.weapon)[0];
        // LIST
        const weapon_ref01_ent = client.Weapon();
        const weapon_ref01_match = {};
        const weapon_ref01_list = (await weapon_ref01_ent.list(weapon_ref01_match)).map((e) => e.data());
        // LOAD
        const weapon_ref01_match_dt0 = {};
        weapon_ref01_match_dt0.id = weapon_ref01_data.id;
        const weapon_ref01_data_dt0 = (await weapon_ref01_ent.load(weapon_ref01_match_dt0)).data();
        (0, node_assert_1.default)(weapon_ref01_data_dt0.id === weapon_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/weapon/WeaponTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ValorantSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['weapon01', 'weapon02', 'weapon03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VALORANT_TEST_WEAPON_ENTID': idmap,
        'VALORANT_TEST_LIVE': 'FALSE',
        'VALORANT_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VALORANT_TEST_WEAPON_ENTID'];
    const live = 'TRUE' === env.VALORANT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VALORANT_TEST_WEAPON_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ValorantSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=WeaponEntity.test.js.map