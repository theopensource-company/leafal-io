import { TRecordID } from './Common.types';

export type TUserRecordID = TRecordID<'user'>;
export type TUserRecord = {
    id: TUserRecordID;

    username: string;
    email: string;
    verified: boolean;

    firstname: string;
    lastname: string;

    created: Date;
    updated: Date;
};

export type TPublicUserRecordID = TRecordID<'pubuser'>;
export type TPublicUserRecord = Pick<TUserRecord, 'username' | 'email'>;
