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
(0, node_test_1.describe)('CosmeticEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VALORANT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ValorantSDK.test();
        const ent = testsdk.Cosmetic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VALORANT_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cosmetic.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "uri", "name": "animationGif", "req": false, "short": "URL to the spray's animation GIF", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "uri", "name": "animationPng", "req": false, "short": "URL to the spray's animation PNG", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "assetPath", "req": false, "short": "Asset path in game files", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "category", "req": false, "short": "Category of the spray", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "uri", "name": "displayIcon", "req": false, "short": "URL to the buddy's display icon", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "displayName", "req": false, "short": "Display name of the buddy", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "uri", "name": "fullIcon", "req": false, "short": "URL to the spray's full icon", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "uri", "name": "fullTransparentIcon", "req": false, "short": "URL to the spray's full transparent icon", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "hideIfNotOwned", "req": false, "short": "Whether the spray is hidden if not owned", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "isHiddenIfNotOwned", "req": false, "short": "Whether the buddy is hidden if not owned", "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "isNullSpray", "req": false, "short": "Whether this is a null spray", "type": "`$BOOLEAN`", "index$": 10 }, { "active": true, "format": "uri", "name": "largeArt", "req": false, "short": "URL to the card's large art", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "levels", "req": false, "type": "`$ARRAY`", "index$": 12 }, { "active": true, "format": "uri", "name": "smallArt", "req": false, "short": "URL to the card's small art", "type": "`$STRING`", "index$": 13 }, { "active": true, "format": "uuid", "name": "themeUuid", "req": false, "short": "UUID of the theme", "type": "`$STRING`", "index$": 14 }, { "active": true, "format": "uuid", "name": "uuid", "req": false, "short": "Unique identifier for the buddy", "type": "`$STRING`", "index$": 15 }, { "active": true, "format": "uri", "name": "wideArt", "req": false, "short": "URL to the card's wide art", "type": "`$STRING`", "index$": 16 }], "name": "cosmetic", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "en-US", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v1/buddies", "json": "{\"operationId\":\"getBuddies\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the buddy's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the buddy\",\"type\":\"string\"},\"isHiddenIfNotOwned\":{\"description\":\"Whether the buddy is hidden if not owned\",\"type\":\"boolean\"},\"levels\":{\"items\":{\"properties\":{\"assetPath\":{\"type\":\"string\"},\"charmLevel\":{\"type\":\"integer\"},\"displayIcon\":{\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"type\":\"string\"},\"hideIfNotOwned\":{\"type\":\"boolean\"},\"uuid\":{\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"themeUuid\":{\"description\":\"UUID of the theme\",\"format\":\"uuid\",\"type\":\"string\"},\"uuid\":{\"description\":\"Unique identifier for the buddy\",\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of buddies\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/buddies", "segments": [{ "lit": "v1" }, { "lit": "buddies" }], "select": { "exist": ["language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "example": "en-US", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v1/cards", "json": "{\"operationId\":\"getCards\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the card's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the player card\",\"type\":\"string\"},\"isHiddenIfNotOwned\":{\"description\":\"Whether the card is hidden if not owned\",\"type\":\"boolean\"},\"largeArt\":{\"description\":\"URL to the card's large art\",\"format\":\"uri\",\"type\":\"string\"},\"smallArt\":{\"description\":\"URL to the card's small art\",\"format\":\"uri\",\"type\":\"string\"},\"themeUuid\":{\"description\":\"UUID of the theme\",\"format\":\"uuid\",\"type\":\"string\"},\"uuid\":{\"description\":\"Unique identifier for the player card\",\"format\":\"uuid\",\"type\":\"string\"},\"wideArt\":{\"description\":\"URL to the card's wide art\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of player cards\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/cards", "segments": [{ "lit": "v1" }, { "lit": "cards" }], "select": { "exist": ["language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }, { "active": true, "args": { "query": [{ "active": true, "example": "en-US", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /v1/sprays", "json": "{\"operationId\":\"getSprays\",\"parameters\":[{\"description\":\"Language code for localized content\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en-US\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"animationGif\":{\"description\":\"URL to the spray's animation GIF\",\"format\":\"uri\",\"type\":\"string\"},\"animationPng\":{\"description\":\"URL to the spray's animation PNG\",\"format\":\"uri\",\"type\":\"string\"},\"assetPath\":{\"description\":\"Asset path in game files\",\"type\":\"string\"},\"category\":{\"description\":\"Category of the spray\",\"type\":\"string\"},\"displayIcon\":{\"description\":\"URL to the spray's display icon\",\"format\":\"uri\",\"type\":\"string\"},\"displayName\":{\"description\":\"Display name of the spray\",\"type\":\"string\"},\"fullIcon\":{\"description\":\"URL to the spray's full icon\",\"format\":\"uri\",\"type\":\"string\"},\"fullTransparentIcon\":{\"description\":\"URL to the spray's full transparent icon\",\"format\":\"uri\",\"type\":\"string\"},\"hideIfNotOwned\":{\"description\":\"Whether the spray is hidden if not owned\",\"type\":\"boolean\"},\"isNullSpray\":{\"description\":\"Whether this is a null spray\",\"type\":\"boolean\"},\"levels\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"themeUuid\":{\"description\":\"UUID of the theme\",\"format\":\"uuid\",\"type\":\"string\"},\"uuid\":{\"description\":\"Unique identifier for the spray\",\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of sprays\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/sprays", "segments": [{ "lit": "v1" }, { "lit": "sprays" }], "select": { "exist": ["language"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "cosmetic", "name__orig": "cosmetic", "Name": "Cosmetic", "name_": "cosmetic", "name-": "cosmetic", "NAME": "COSMETIC", "index$": 2 }, { "active": true, "entity": "cosmetic", "key$": "BasicCosmeticFlow", "kind": "basic", "name": "BasicCosmeticFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "cosmetic_ref01" } }], "index$": 0 }] }, 'Cosmetic');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cosmetic_ref01_data = Object.values(setup.data.existing.cosmetic)[0];
        // LIST
        const cosmetic_ref01_ent = client.Cosmetic();
        const cosmetic_ref01_match = {};
        const cosmetic_ref01_list = (await cosmetic_ref01_ent.list(cosmetic_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cosmetic/CosmeticTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ValorantSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cosmetic01', 'cosmetic02', 'cosmetic03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VALORANT_TEST_COSMETIC_ENTID': idmap,
        'VALORANT_TEST_LIVE': 'FALSE',
        'VALORANT_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VALORANT_TEST_COSMETIC_ENTID'];
    const live = 'TRUE' === env.VALORANT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VALORANT_TEST_COSMETIC_ENTID'];
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
//# sourceMappingURL=CosmeticEntity.test.js.map