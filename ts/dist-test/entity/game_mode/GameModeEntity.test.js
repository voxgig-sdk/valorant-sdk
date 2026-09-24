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
(0, node_test_1.describe)('GameModeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VALORANT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VALORANT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ValorantSDK.test();
        const ent = testsdk.GameMode();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VALORANT_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'game_mode.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allowsMatchTimeouts": { "a": true, "h": "Allows Match Timeouts", "n": "allowsMatchTimeouts", "r": false, "sh": "Whether match timeouts are allowed", "t": "`$BOOLEAN`", "key$": "allowsMatchTimeouts", "index$": 0 }, "assetPath": { "a": true, "h": "Asset Path", "n": "assetPath", "r": false, "sh": "Asset path in game files", "t": "`$STRING`", "key$": "assetPath", "index$": 1 }, "displayIcon": { "a": true, "fo": "uri", "h": "Display Icon", "n": "displayIcon", "r": false, "sh": "URL to the game mode's display icon", "t": "`$STRING`", "key$": "displayIcon", "index$": 2 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": false, "sh": "Display name of the game mode", "t": "`$STRING`", "key$": "displayName", "index$": 3 }, "duration": { "a": true, "h": "Duration", "n": "duration", "r": false, "sh": "Duration of the game mode", "t": "`$STRING`", "key$": "duration", "index$": 4 }, "economyType": { "a": true, "h": "Economy Type", "n": "economyType", "r": false, "sh": "Type of economy system", "t": "`$STRING`", "key$": "economyType", "index$": 5 }, "gameFeatureOverrides": { "a": true, "h": "Game Feature Overrides", "n": "gameFeatureOverrides", "r": false, "sh": "Game feature overrides", "t": "`$ARRAY`", "key$": "gameFeatureOverrides", "index$": 6 }, "gameRuleBoolOverrides": { "a": true, "h": "Game Rule Bool Overrides", "n": "gameRuleBoolOverrides", "r": false, "sh": "Game rule boolean overrides", "t": "`$ARRAY`", "key$": "gameRuleBoolOverrides", "index$": 7 }, "isMinimapHidden": { "a": true, "h": "Is Minimap Hidden", "n": "isMinimapHidden", "r": false, "sh": "Whether the minimap is hidden", "t": "`$BOOLEAN`", "key$": "isMinimapHidden", "index$": 8 }, "isTeamVoiceAllowed": { "a": true, "h": "Is Team Voice Allowed", "n": "isTeamVoiceAllowed", "r": false, "sh": "Whether team voice chat is allowed", "t": "`$BOOLEAN`", "key$": "isTeamVoiceAllowed", "index$": 9 }, "orbCount": { "a": true, "h": "Orb Count", "n": "orbCount", "r": false, "sh": "Number of orbs in the game mode", "t": "`$INTEGER`", "key$": "orbCount", "index$": 10 }, "roundsPerHalf": { "a": true, "h": "Rounds Per Half", "n": "roundsPerHalf", "r": false, "sh": "Number of rounds per half", "t": "`$INTEGER`", "key$": "roundsPerHalf", "index$": 11 }, "teamRoles": { "a": true, "h": "Team Roles", "n": "teamRoles", "r": false, "sh": "Team roles in the game mode", "t": "`$ARRAY`", "key$": "teamRoles", "index$": 12 }, "uuid": { "a": true, "fo": "uuid", "h": "Uuid", "n": "uuid", "r": false, "sh": "Unique identifier for the game mode", "t": "`$STRING`", "key$": "uuid", "index$": 13 } }, "name": "game_mode", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/gamemodes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/gamemodes", "q": { "exist": ["language"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "gamemodes" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "game_mode", "name__orig": "game_mode", "Name": "GameMode", "name_": "game_mode", "name-": "game-mode", "NAME": "GAME_MODE", "index$": 3 }, { "active": true, "entity": "game_mode", "key$": "BasicGameModeFlow", "kind": "basic", "name": "BasicGameModeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "game_mode_ref01" } }], "index$": 0 }] }, 'GameMode', { "GET /v1/gamemodes": { "protocol": "http", "operationId": "getGameModes", "responses": { "200": { "description": "Successful response with list of game modes", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "example": 200, "key$": "status", "type": "integer" }, "data": { "items": { "properties": { "allowsMatchTimeouts": { "description": "Whether match timeouts are allowed", "type": "boolean", "key$": "allowsMatchTimeouts" }, "assetPath": { "description": "Asset path in game files", "type": "string", "key$": "assetPath" }, "displayIcon": { "description": "URL to the game mode's display icon", "format": "uri", "type": "string", "key$": "displayIcon" }, "displayName": { "description": "Display name of the game mode", "type": "string", "key$": "displayName" }, "duration": { "description": "Duration of the game mode", "type": "string", "key$": "duration" }, "economyType": { "description": "Type of economy system", "type": "string", "key$": "economyType" }, "gameFeatureOverrides": { "description": "Game feature overrides", "items": { "type": "object" }, "type": "array", "key$": "gameFeatureOverrides" }, "gameRuleBoolOverrides": { "description": "Game rule boolean overrides", "items": { "type": "object" }, "type": "array", "key$": "gameRuleBoolOverrides" }, "isMinimapHidden": { "description": "Whether the minimap is hidden", "type": "boolean", "key$": "isMinimapHidden" }, "isTeamVoiceAllowed": { "description": "Whether team voice chat is allowed", "type": "boolean", "key$": "isTeamVoiceAllowed" }, "orbCount": { "description": "Number of orbs in the game mode", "type": "integer", "key$": "orbCount" }, "roundsPerHalf": { "description": "Number of rounds per half", "type": "integer", "key$": "roundsPerHalf" }, "teamRoles": { "description": "Team roles in the game mode", "items": { "type": "string" }, "type": "array", "key$": "teamRoles" }, "uuid": { "description": "Unique identifier for the game mode", "format": "uuid", "type": "string", "key$": "uuid" } }, "type": "object", "x-ref": "#/components/schemas/GameMode", "index$": 0 }, "key$": "data", "type": "array" } } } } } }, "400": { "description": "Bad request" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "language", "in": "query", "description": "Language code for localized content", "required": false, "schema": { "type": "string", "default": "en-US" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let game_mode_ref01_data = Object.values(setup.data.existing.game_mode)[0];
        // LIST
        const game_mode_ref01_ent = client.GameMode();
        const game_mode_ref01_match = {};
        const game_mode_ref01_list = (await game_mode_ref01_ent.list(game_mode_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/game_mode/GameModeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ValorantSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['game_mode01', 'game_mode02', 'game_mode03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VALORANT_TEST_GAME_MODE_ENTID': idmap,
        'VALORANT_TEST_LIVE': 'FALSE',
        'VALORANT_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VALORANT_TEST_GAME_MODE_ENTID'];
    const live = 'TRUE' === env.VALORANT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VALORANT_TEST_GAME_MODE_ENTID'];
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
//# sourceMappingURL=GameModeEntity.test.js.map