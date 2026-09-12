import { Context } from './Context';
declare class ValorantError extends Error {
    isValorantError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ValorantError };
