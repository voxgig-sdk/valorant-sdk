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
(0, node_test_1.describe)('AgentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VALORANT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ValorantSDK.test();
        const ent = testsdk.Agent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VALORANT_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'agent.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "abilities": { "a": true, "h": "Abilities", "n": "abilities", "r": false, "t": "`$ARRAY`", "key$": "abilities", "index$": 0 }, "assetPath": { "a": true, "h": "Asset Path", "n": "assetPath", "r": false, "sh": "Asset path in game files", "t": "`$STRING`", "key$": "assetPath", "index$": 1 }, "background": { "a": true, "fo": "uri", "h": "Background", "n": "background", "r": false, "sh": "URL to the agent's background image", "t": "`$STRING`", "key$": "background", "index$": 2 }, "backgroundGradientColors": { "a": true, "h": "Background Gradient Colors", "n": "backgroundGradientColors", "r": false, "sh": "Gradient colors for the agent's background", "t": "`$ARRAY`", "key$": "backgroundGradientColors", "index$": 3 }, "bustPortrait": { "a": true, "fo": "uri", "h": "Bust Portrait", "n": "bustPortrait", "r": false, "sh": "URL to the agent's bust portrait", "t": "`$STRING`", "key$": "bustPortrait", "index$": 4 }, "characterTags": { "a": true, "h": "Character Tags", "n": "characterTags", "r": false, "sh": "Tags associated with the character", "t": "`$ARRAY`", "key$": "characterTags", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Description of the agent", "t": "`$STRING`", "key$": "description", "index$": 6 }, "developerName": { "a": true, "h": "Developer Name", "n": "developerName", "r": false, "sh": "Internal developer name", "t": "`$STRING`", "key$": "developerName", "index$": 7 }, "displayIcon": { "a": true, "fo": "uri", "h": "Display Icon", "n": "displayIcon", "r": false, "sh": "URL to the agent's display icon", "t": "`$STRING`", "key$": "displayIcon", "index$": 8 }, "displayIconSmall": { "a": true, "fo": "uri", "h": "Display Icon Small", "n": "displayIconSmall", "r": false, "sh": "URL to the agent's small display icon", "t": "`$STRING`", "key$": "displayIconSmall", "index$": 9 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": false, "sh": "Display name of the agent", "t": "`$STRING`", "key$": "displayName", "index$": 10 }, "fullPortrait": { "a": true, "fo": "uri", "h": "Full Portrait", "n": "fullPortrait", "r": false, "sh": "URL to the agent's full portrait", "t": "`$STRING`", "key$": "fullPortrait", "index$": 11 }, "fullPortraitV2": { "a": true, "fo": "uri", "h": "Full Portrait V2", "n": "fullPortraitV2", "r": false, "sh": "URL to the agent's full portrait version 2", "t": "`$STRING`", "key$": "fullPortraitV2", "index$": 12 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 13 }, "isAvailableForTest": { "a": true, "h": "Is Available For Test", "n": "isAvailableForTest", "r": false, "sh": "Whether the agent is available for testing", "t": "`$BOOLEAN`", "key$": "isAvailableForTest", "index$": 14 }, "isBaseContent": { "a": true, "h": "Is Base Content", "n": "isBaseContent", "r": false, "sh": "Whether the agent is base content", "t": "`$BOOLEAN`", "key$": "isBaseContent", "index$": 15 }, "isFullPortraitRightFacing": { "a": true, "h": "Is Full Portrait Right Facing", "n": "isFullPortraitRightFacing", "r": false, "sh": "Whether the full portrait faces right", "t": "`$BOOLEAN`", "key$": "isFullPortraitRightFacing", "index$": 16 }, "isPlayableCharacter": { "a": true, "h": "Is Playable Character", "n": "isPlayableCharacter", "r": false, "sh": "Whether the agent is playable", "t": "`$BOOLEAN`", "key$": "isPlayableCharacter", "index$": 17 }, "killfeedPortrait": { "a": true, "fo": "uri", "h": "Killfeed Portrait", "n": "killfeedPortrait", "r": false, "sh": "URL to the agent's killfeed portrait", "t": "`$STRING`", "key$": "killfeedPortrait", "index$": 18 }, "role": { "a": true, "h": "Role", "n": "role", "r": false, "t": "`$OBJECT`", "key$": "role", "index$": 19 }, "uuid": { "a": true, "fo": "uuid", "h": "Uuid", "n": "uuid", "r": false, "sh": "Unique identifier for the agent", "t": "`$STRING`", "key$": "uuid", "index$": 20 }, "voiceLine": { "a": true, "h": "Voice Line", "n": "voiceLine", "r": false, "t": "`$OBJECT`", "key$": "voiceLine", "index$": 21 } }, "id": { "field": "id", "name": "id" }, "name": "agent", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/agents", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "is_playable_character", "or": "is_playable_character", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/agents", "q": { "exist": ["is_playable_character", "language"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "agents" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/agents/{uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "uuid", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/agents/{uuid}", "q": { "exist": ["id", "language"] }, "r": { "param": { "uuid": "id" } }, "s": [{ "lit": "v1" }, { "lit": "agents" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "agent", "name__orig": "agent", "Name": "Agent", "name_": "agent", "name-": "agent", "NAME": "AGENT", "index$": 0 }, { "active": true, "entity": "agent", "key$": "BasicAgentFlow", "kind": "basic", "name": "BasicAgentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "agent_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "agent_ref01", "srcdatavar": "agent_ref01_data", "suffix": "_dt0" }, "m": { "id": "agent01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-agent_ref01" } }], "index$": 1 }] }, 'Agent', { "GET /v1/agents": { "protocol": "http", "operationId": "getAgents", "responses": { "200": { "description": "Successful response with list of agents", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "example": 200, "key$": "status", "type": "integer" }, "data": { "items": { "properties": { "abilities": { "items": { "properties": { "description": { "type": "string" }, "displayIcon": { "format": "uri", "type": "string" }, "displayName": { "type": "string" }, "slot": { "type": "string" } }, "type": "object" }, "type": "array", "key$": "abilities" }, "assetPath": { "description": "Asset path in game files", "type": "string", "key$": "assetPath" }, "background": { "description": "URL to the agent's background image", "format": "uri", "type": "string", "key$": "background" }, "backgroundGradientColors": { "description": "Gradient colors for the agent's background", "items": { "type": "string" }, "type": "array", "key$": "backgroundGradientColors" }, "bustPortrait": { "description": "URL to the agent's bust portrait", "format": "uri", "type": "string", "key$": "bustPortrait" }, "characterTags": { "description": "Tags associated with the character", "items": { "type": "string" }, "type": "array", "key$": "characterTags" }, "description": { "description": "Description of the agent", "type": "string", "key$": "description" }, "developerName": { "description": "Internal developer name", "type": "string", "key$": "developerName" }, "displayIcon": { "description": "URL to the agent's display icon", "format": "uri", "type": "string", "key$": "displayIcon" }, "displayIconSmall": { "description": "URL to the agent's small display icon", "format": "uri", "type": "string", "key$": "displayIconSmall" }, "displayName": { "description": "Display name of the agent", "type": "string", "key$": "displayName" }, "fullPortrait": { "description": "URL to the agent's full portrait", "format": "uri", "type": "string", "key$": "fullPortrait" }, "fullPortraitV2": { "description": "URL to the agent's full portrait version 2", "format": "uri", "type": "string", "key$": "fullPortraitV2" }, "isAvailableForTest": { "description": "Whether the agent is available for testing", "type": "boolean", "key$": "isAvailableForTest" }, "isBaseContent": { "description": "Whether the agent is base content", "type": "boolean", "key$": "isBaseContent" }, "isFullPortraitRightFacing": { "description": "Whether the full portrait faces right", "type": "boolean", "key$": "isFullPortraitRightFacing" }, "isPlayableCharacter": { "description": "Whether the agent is playable", "type": "boolean", "key$": "isPlayableCharacter" }, "killfeedPortrait": { "description": "URL to the agent's killfeed portrait", "format": "uri", "type": "string", "key$": "killfeedPortrait" }, "role": { "properties": { "assetPath": { "type": "string" }, "description": { "type": "string" }, "displayIcon": { "format": "uri", "type": "string" }, "displayName": { "type": "string" }, "uuid": { "format": "uuid", "type": "string" } }, "type": "object", "key$": "role" }, "uuid": { "description": "Unique identifier for the agent", "format": "uuid", "type": "string", "key$": "uuid" }, "voiceLine": { "properties": { "maxDuration": { "type": "number" }, "mediaList": { "items": { "type": "object" }, "type": "array" }, "minDuration": { "type": "number" } }, "type": "object", "key$": "voiceLine" } }, "type": "object", "x-ref": "#/components/schemas/Agent", "index$": 0 }, "key$": "data", "type": "array" } } } } } }, "400": { "description": "Bad request" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "language", "in": "query", "description": "Language code for localized content (e.g., en-US, es-ES, fr-FR)", "required": false, "schema": { "type": "string", "default": "en-US" }, "index$": 0 }, { "name": "isPlayableCharacter", "in": "query", "description": "Filter only playable characters", "required": false, "schema": { "type": "boolean" }, "index$": 1 }], "securitySource": "unspecified" }, "GET /v1/agents/{uuid}": { "protocol": "http", "operationId": "getAgentByUuid", "responses": { "200": { "description": "Successful response with agent details", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "type": "integer", "example": 200 }, "data": { "type": "object", "properties": { "uuid": { "description": "Unique identifier for the agent", "format": "uuid", "type": "string", "key$": "uuid" }, "displayName": { "description": "Display name of the agent", "type": "string", "key$": "displayName" }, "description": { "description": "Description of the agent", "type": "string", "key$": "description" }, "developerName": { "description": "Internal developer name", "type": "string", "key$": "developerName" }, "characterTags": { "description": "Tags associated with the character", "items": { "type": "string" }, "type": "array", "key$": "characterTags" }, "displayIcon": { "description": "URL to the agent's display icon", "format": "uri", "type": "string", "key$": "displayIcon" }, "displayIconSmall": { "description": "URL to the agent's small display icon", "format": "uri", "type": "string", "key$": "displayIconSmall" }, "bustPortrait": { "description": "URL to the agent's bust portrait", "format": "uri", "type": "string", "key$": "bustPortrait" }, "fullPortrait": { "description": "URL to the agent's full portrait", "format": "uri", "type": "string", "key$": "fullPortrait" }, "fullPortraitV2": { "description": "URL to the agent's full portrait version 2", "format": "uri", "type": "string", "key$": "fullPortraitV2" }, "killfeedPortrait": { "description": "URL to the agent's killfeed portrait", "format": "uri", "type": "string", "key$": "killfeedPortrait" }, "background": { "description": "URL to the agent's background image", "format": "uri", "type": "string", "key$": "background" }, "backgroundGradientColors": { "description": "Gradient colors for the agent's background", "items": { "type": "string" }, "type": "array", "key$": "backgroundGradientColors" }, "assetPath": { "description": "Asset path in game files", "type": "string", "key$": "assetPath" }, "isFullPortraitRightFacing": { "description": "Whether the full portrait faces right", "type": "boolean", "key$": "isFullPortraitRightFacing" }, "isPlayableCharacter": { "description": "Whether the agent is playable", "type": "boolean", "key$": "isPlayableCharacter" }, "isAvailableForTest": { "description": "Whether the agent is available for testing", "type": "boolean", "key$": "isAvailableForTest" }, "isBaseContent": { "description": "Whether the agent is base content", "type": "boolean", "key$": "isBaseContent" }, "role": { "properties": { "assetPath": { "type": "string" }, "description": { "type": "string" }, "displayIcon": { "format": "uri", "type": "string" }, "displayName": { "type": "string" }, "uuid": { "format": "uuid", "type": "string" } }, "type": "object", "key$": "role" }, "abilities": { "items": { "properties": { "description": { "type": "string" }, "displayIcon": { "format": "uri", "type": "string" }, "displayName": { "type": "string" }, "slot": { "type": "string" } }, "type": "object" }, "type": "array", "key$": "abilities" }, "voiceLine": { "properties": { "maxDuration": { "type": "number" }, "mediaList": { "items": { "type": "object" }, "type": "array" }, "minDuration": { "type": "number" } }, "type": "object", "key$": "voiceLine" } }, "x-ref": "#/components/schemas/Agent", "index$": 0 } } } } } }, "404": { "description": "Agent not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "uuid", "in": "path", "description": "UUID of the agent", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 0 }, { "name": "language", "in": "query", "description": "Language code for localized content", "required": false, "schema": { "type": "string", "default": "en-US" }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let agent_ref01_data = Object.values(setup.data.existing.agent)[0];
        // LIST
        const agent_ref01_ent = client.Agent();
        const agent_ref01_match = {};
        const agent_ref01_list = (await agent_ref01_ent.list(agent_ref01_match)).map((e) => e.data());
        // LOAD
        const agent_ref01_match_dt0 = {};
        agent_ref01_match_dt0.id = agent_ref01_data.id;
        const agent_ref01_data_dt0 = (await agent_ref01_ent.load(agent_ref01_match_dt0)).data();
        (0, node_assert_1.default)(agent_ref01_data_dt0.id === agent_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/agent/AgentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ValorantSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['agent01', 'agent02', 'agent03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VALORANT_TEST_AGENT_ENTID': idmap,
        'VALORANT_TEST_LIVE': 'FALSE',
        'VALORANT_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VALORANT_TEST_AGENT_ENTID'];
    const live = 'TRUE' === env.VALORANT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VALORANT_TEST_AGENT_ENTID'];
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
//# sourceMappingURL=AgentEntity.test.js.map