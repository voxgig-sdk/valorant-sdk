import { AgentEntity } from './entity/AgentEntity';
import { CompetitiveEntity } from './entity/CompetitiveEntity';
import { CosmeticEntity } from './entity/CosmeticEntity';
import { GameModeEntity } from './entity/GameModeEntity';
import { MapEntity } from './entity/MapEntity';
import { WeaponEntity } from './entity/WeaponEntity';
export type * from './ValorantTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ValorantEntityBase } from './ValorantEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ValorantSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Agent(entopts?: Record<string, any>): AgentEntity;
    Competitive(entopts?: Record<string, any>): CompetitiveEntity;
    Cosmetic(entopts?: Record<string, any>): CosmeticEntity;
    GameMode(entopts?: Record<string, any>): GameModeEntity;
    Map(entopts?: Record<string, any>): MapEntity;
    Weapon(entopts?: Record<string, any>): WeaponEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ValorantSDK;
    tester(testopts?: any, sdkopts?: any): ValorantSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ValorantSDK;
export { stdutil, config, BaseFeature, ValorantEntityBase, ValorantSDK, SDK, };
