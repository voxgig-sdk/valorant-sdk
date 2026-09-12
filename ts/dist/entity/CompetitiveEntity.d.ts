import { ValorantEntityBase } from '../ValorantEntityBase';
import type { ValorantSDK } from '../ValorantSDK';
import type { Control } from '../types';
import type { Competitive, CompetitiveListMatch } from '../ValorantTypes';
declare class CompetitiveEntity extends ValorantEntityBase<Competitive> {
    constructor(client: ValorantSDK, entopts: any);
    make(this: CompetitiveEntity): CompetitiveEntity;
    list(this: any, reqmatch?: CompetitiveListMatch, ctrl?: Control): Promise<CompetitiveEntity[]>;
}
export { CompetitiveEntity };
