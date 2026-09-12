import { ValorantEntityBase } from '../ValorantEntityBase';
import type { ValorantSDK } from '../ValorantSDK';
import type { Control } from '../types';
import type { Weapon, WeaponLoadMatch, WeaponListMatch } from '../ValorantTypes';
declare class WeaponEntity extends ValorantEntityBase<Weapon> {
    constructor(client: ValorantSDK, entopts: any);
    make(this: WeaponEntity): WeaponEntity;
    load(this: any, reqmatch?: WeaponLoadMatch, ctrl?: Control): Promise<WeaponEntity>;
    list(this: any, reqmatch?: WeaponListMatch, ctrl?: Control): Promise<WeaponEntity[]>;
}
export { WeaponEntity };
