import { ValorantEntityBase } from '../ValorantEntityBase';
import type { ValorantSDK } from '../ValorantSDK';
import type { Control } from '../types';
import type { GameMode, GameModeListMatch } from '../ValorantTypes';
declare class GameModeEntity extends ValorantEntityBase<GameMode> {
    constructor(client: ValorantSDK, entopts: any);
    make(this: GameModeEntity): GameModeEntity;
    list(this: any, reqmatch?: GameModeListMatch, ctrl?: Control): Promise<GameModeEntity[]>;
}
export { GameModeEntity };
