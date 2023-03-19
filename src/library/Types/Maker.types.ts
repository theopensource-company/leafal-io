import { TRecordID } from './Common.types';

export type TMakerRecordID = TRecordID<'maker'>;
export type TMakerRecord = {
    id: TMakerRecordID;
    slug: string;
    name: string;
    logo?: string;
};
