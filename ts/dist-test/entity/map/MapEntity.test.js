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
(0, node_test_1.describe)('MapEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VALORANT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ValorantSDK.test();
        const ent = testsdk.Map();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VALORANT_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'map.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "assetPath", "req": false, "short": "Asset path in game files", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "callouts", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "coordinates", "req": false, "short": "Geographic coordinates of the map location", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "uri", "name": "displayIcon", "req": false, "short": "URL to the map's display icon", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "displayName", "req": false, "short": "Display name of the map", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "uri", "name": "listViewIcon", "req": false, "short": "URL to the map's list view icon", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "uri", "name": "mapUrl", "req": false, "short": "URL to the map overview", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "narrativeDescription", "req": false, "short": "Narrative description of the map", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "uri", "name": "splash", "req": false, "short": "URL to the map's splash image", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "tacticalDescription", "req": false, "short": "Tactical description of the map", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "uuid", "name": "uuid", "req": false, "short": "Unique identifier for the map", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "xMultiplier", "req": false, "short": "X coordinate multiplier", "type": "`$NUMBER`", "index$": 12 }, { "active": true, "name": "xScalarToAdd", "req": false, "short": "X scalar to add", "type": "`$NUMBER`", "index$": 13 }, { "active": true, "name": "yMultiplier", "req": false, "short": "Y coordinate multiplier", "type": "`$NUMBER`", "index$": 14 }, { "active": true, "name": "yScalarToAdd", "req": false, "short": "Y scalar to add", "type": "`$NUMBER`", "index$": 15 }], "id": { "field": "id", "name": "id" }, "name": "map", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "en-US", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v1/maps", "json": "{\"operationId\":\"getMaps\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"callouts\":{\"items\":{\"properties\":{\"location\":{\"properties\":{\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"type\":\"object\"},\"regionName\":{\"type\":\"string\"},\"superRegionName\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"coordinates\":{\"description\":\"Geographic coordinates of the map location\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the map's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the map\",\"type\":\"string\"},\"listViewIcon\":{\"description\":\"URL to the map's list view icon\",\"format\":\"uri\",\"type\":\"string\"},\"mapUrl\":{\"description\":\"URL to the map overview\",\"format\":\"uri\",\"type\":\"string\"},\"narrativeDescription\":{\"description\":\"Narrative description of the map\",\"type\":\"string\"},\"splash\":{\"description\":\"URL to the map's splash image\",\"format\":\"uri\",\"type\":\"string\"},\"tacticalDescription\":{\"description\":\"Tactical description of the map\",\"type\":\"string\"},\"uuid\":{\"description\":\"Unique identifier for the map\",\"format\":\"uuid\",\"type\":\"string\"},\"xMultiplier\":{\"description\":\"X coordinate multiplier\",\"type\":\"number\"},\"xScalarToAdd\":{\"description\":\"X scalar to add\",\"type\":\"number\"},\"yMultiplier\":{\"description\":\"Y coordinate multiplier\",\"type\":\"number\"},\"yScalarToAdd\":{\"description\":\"Y scalar to add\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of maps\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/maps", "segments": [{ "lit": "v1" }, { "lit": "maps" }], "select": { "exist": ["language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "uuid", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "en-US", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v1/maps/{uuid}", "json": "{\"operationId\":\"getMapByUuid\",\"parameters\":[{\"description\":\"UUID of the map\",\"in\":\"path\",\"name\":\"uuid\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"callouts\":{\"items\":{\"properties\":{\"location\":{\"properties\":{\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"type\":\"object\"},\"regionName\":{\"type\":\"string\"},\"superRegionName\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"coordinates\":{\"description\":\"Geographic coordinates of the map location\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the map's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the map\",\"type\":\"string\"},\"listViewIcon\":{\"description\":\"URL to the map's list view icon\",\"format\":\"uri\",\"type\":\"string\"},\"mapUrl\":{\"description\":\"URL to the map overview\",\"format\":\"uri\",\"type\":\"string\"},\"narrativeDescription\":{\"description\":\"Narrative description of the map\",\"type\":\"string\"},\"splash\":{\"description\":\"URL to the map's splash image\",\"format\":\"uri\",\"type\":\"string\"},\"tacticalDescription\":{\"description\":\"Tactical description of the map\",\"type\":\"string\"},\"uuid\":{\"description\":\"Unique identifier for the map\",\"format\":\"uuid\",\"type\":\"string\"},\"xMultiplier\":{\"description\":\"X coordinate multiplier\",\"type\":\"number\"},\"xScalarToAdd\":{\"description\":\"X scalar to add\",\"type\":\"number\"},\"yMultiplier\":{\"description\":\"Y coordinate multiplier\",\"type\":\"number\"},\"yScalarToAdd\":{\"description\":\"Y scalar to add\",\"type\":\"number\"}},\"type\":\"object\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with map details\"},\"404\":{\"description\":\"Map not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/maps/{uuid}", "rename": { "param": { "uuid": "id" } }, "segments": [{ "lit": "v1" }, { "lit": "maps" }, { "var": "id" }], "select": { "exist": ["id", "language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "map", "name__orig": "map", "Name": "Map", "name_": "map", "name-": "map", "NAME": "MAP", "index$": 4 }, { "active": true, "entity": "map", "key$": "BasicMapFlow", "kind": "basic", "name": "BasicMapFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "map_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "map_ref01", "srcdatavar": "map_ref01_data", "suffix": "_dt0" }, "match": { "id": "map01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-map_ref01" } }], "index$": 1 }] }, 'Map');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let map_ref01_data = Object.values(setup.data.existing.map)[0];
        // LIST
        const map_ref01_ent = client.Map();
        const map_ref01_match = {};
        const map_ref01_list = (await map_ref01_ent.list(map_ref01_match)).map((e) => e.data());
        // LOAD
        const map_ref01_match_dt0 = {};
        map_ref01_match_dt0.id = map_ref01_data.id;
        const map_ref01_data_dt0 = (await map_ref01_ent.load(map_ref01_match_dt0)).data();
        (0, node_assert_1.default)(map_ref01_data_dt0.id === map_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/map/MapTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ValorantSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['map01', 'map02', 'map03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VALORANT_TEST_MAP_ENTID': idmap,
        'VALORANT_TEST_LIVE': 'FALSE',
        'VALORANT_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VALORANT_TEST_MAP_ENTID'];
    const live = 'TRUE' === env.VALORANT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VALORANT_TEST_MAP_ENTID'];
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
//# sourceMappingURL=MapEntity.test.js.map