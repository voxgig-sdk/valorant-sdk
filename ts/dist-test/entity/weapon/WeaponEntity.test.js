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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assetPath": { "a": true, "h": "Asset Path", "n": "assetPath", "r": false, "sh": "Asset path in game files", "t": "`$STRING`", "key$": "assetPath", "index$": 0 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "sh": "Weapon category (e.g., Rifle, Pistol)", "t": "`$STRING`", "key$": "category", "index$": 1 }, "defaultSkinUuid": { "a": true, "fo": "uuid", "h": "Default Skin Uuid", "n": "defaultSkinUuid", "r": false, "sh": "UUID of the default skin", "t": "`$STRING`", "key$": "defaultSkinUuid", "index$": 2 }, "displayIcon": { "a": true, "fo": "uri", "h": "Display Icon", "n": "displayIcon", "r": false, "sh": "URL to the weapon's display icon", "t": "`$STRING`", "key$": "displayIcon", "index$": 3 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": false, "sh": "Display name of the weapon", "t": "`$STRING`", "key$": "displayName", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "killStreamIcon": { "a": true, "fo": "uri", "h": "Kill Stream Icon", "n": "killStreamIcon", "r": false, "sh": "URL to the weapon's kill stream icon", "t": "`$STRING`", "key$": "killStreamIcon", "index$": 6 }, "shopData": { "a": true, "h": "Shop Data", "n": "shopData", "r": false, "t": "`$OBJECT`", "key$": "shopData", "index$": 7 }, "skins": { "a": true, "h": "Skins", "n": "skins", "r": false, "t": "`$ARRAY`", "key$": "skins", "index$": 8 }, "uuid": { "a": true, "fo": "uuid", "h": "Uuid", "n": "uuid", "r": false, "sh": "Unique identifier for the weapon", "t": "`$STRING`", "key$": "uuid", "index$": 9 }, "weaponStats": { "a": true, "h": "Weapon Stats", "n": "weaponStats", "r": false, "t": "`$OBJECT`", "key$": "weaponStats", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "weapon", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/weapons", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/weapons", "q": { "exist": ["language"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "weapons" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/weapons/{uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "uuid", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/weapons/{uuid}", "q": { "exist": ["id", "language"] }, "r": { "param": { "uuid": "id" } }, "s": [{ "lit": "v1" }, { "lit": "weapons" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "weapon", "name__orig": "weapon", "Name": "Weapon", "name_": "weapon", "name-": "weapon", "NAME": "WEAPON", "index$": 5 }, { "active": true, "entity": "weapon", "key$": "BasicWeaponFlow", "kind": "basic", "name": "BasicWeaponFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "weapon_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "weapon_ref01", "srcdatavar": "weapon_ref01_data", "suffix": "_dt0" }, "m": { "id": "weapon01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-weapon_ref01" } }], "index$": 1 }] }, 'Weapon', { "GET /v1/weapons": { "protocol": "http", "parameters": [{ "name": "language", "in": "query", "description": "Language code for localized content", "required": false, "schema": { "type": "string", "default": "en-US" }, "index$": 0 }] }, "GET /v1/weapons/{uuid}": { "protocol": "http", "parameters": [{ "name": "uuid", "in": "path", "description": "UUID of the weapon", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 0 }, { "name": "language", "in": "query", "description": "Language code for localized content", "required": false, "schema": { "type": "string", "default": "en-US" }, "index$": 1 }] } });
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