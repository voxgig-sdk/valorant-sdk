import { ValorantEntityBase } from '../ValorantEntityBase';
import type { ValorantSDK } from '../ValorantSDK';
import type { Control } from '../types';
import type { Agent, AgentLoadMatch, AgentListMatch } from '../ValorantTypes';
declare class AgentEntity extends ValorantEntityBase<Agent> {
    constructor(client: ValorantSDK, entopts: any);
    make(this: AgentEntity): AgentEntity;
    load(this: any, reqmatch?: AgentLoadMatch, ctrl?: Control): Promise<AgentEntity>;
    list(this: any, reqmatch?: AgentListMatch, ctrl?: Control): Promise<AgentEntity[]>;
}
export { AgentEntity };
