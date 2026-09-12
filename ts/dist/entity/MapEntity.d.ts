import { ValorantEntityBase } from '../ValorantEntityBase';
import type { ValorantSDK } from '../ValorantSDK';
import type { Control } from '../types';
import type { MapType, MapLoadMatch, MapListMatch } from '../ValorantTypes';
declare class MapEntity extends ValorantEntityBase<MapType> {
    constructor(client: ValorantSDK, entopts: any);
    make(this: MapEntity): MapEntity;
    load(this: any, reqmatch?: MapLoadMatch, ctrl?: Control): Promise<MapEntity>;
    list(this: any, reqmatch?: MapListMatch, ctrl?: Control): Promise<MapEntity[]>;
}
export { MapEntity };
