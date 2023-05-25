import { TRecordID } from './Common.types';

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

    pricing: number;
    pricingText: string;

    published: boolean;
    discoverable: boolean;

    created: Date;
    updated: Date;

    platforms: TProductPlatform[];
    platformNames: string[];

    links: string[];

    showcase?: TProductShowcase;
};

export type TProductPlatformID = TRecordID<'platform'>;
export type TProductPlatform = {
    id: TProductPlatformID;
    name: string;
    arch: string;
};

export type TProductShowcase = {
    source: string;
    type: 'image' | 'video';
}[];
