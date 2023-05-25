import { TRecordID } from './Common.types';
import { TProductRecord } from './Product.types';
import { TUserRecord } from './User.types';

export type TLicenseRecordID = TRecordID<'license'>;
export type TLicenseRecord = {
    id: TLicenseRecordID;

    holder: TUserRecord;
    licensed: TProductRecord;

    created: Date;
    updated: Date;
};

export type TActionCreateLicense = {
    licensed: TLicenseRecord['licensed']['id'];
};
