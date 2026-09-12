import { ValorantEntityBase } from '../ValorantEntityBase';
import type { ValorantSDK } from '../ValorantSDK';
import type { Control } from '../types';
import type { Cosmetic, CosmeticListMatch } from '../ValorantTypes';
declare class CosmeticEntity extends ValorantEntityBase<Cosmetic> {
    constructor(client: ValorantSDK, entopts: any);
    make(this: CosmeticEntity): CosmeticEntity;
    list(this: any, reqmatch?: CosmeticListMatch, ctrl?: Control): Promise<CosmeticEntity[]>;
}
export { CosmeticEntity };
