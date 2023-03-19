import { TRecordID } from './Common.types';
import { TMakerRecord } from './Maker.types';

export type TProductRecordID = TRecordID<'product'>;
export type TProductRecord = {
    id: TProductRecordID;

    slug: string;
    title: string;
    tagline?: string;
    overview: string;
    description: string;

    logo: string;
    thumbnail?: string;
    background?: string;

    published: boolean;
    discoverable: boolean;

    created: Date;
    updated: Date;

    maker: TMakerRecord;
    showcase?: TProductShowcase;
};

export type TProductShowcase = {
    source: string;
    type: 'image' | 'video';
}[];