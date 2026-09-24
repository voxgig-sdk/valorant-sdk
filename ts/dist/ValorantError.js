"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorantError = void 0;
class ValorantError extends Error {
    isValorantError = true;
    sdk = 'Valorant';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ValorantError = ValorantError;
//# sourceMappingURL=ValorantError.js.map