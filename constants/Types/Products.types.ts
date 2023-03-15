import { TProductRecord } from "./Product.types";

export type MockupProduct = {
    product: TProductRecord;
    reception?: number;
    showcase?: MockupProductShowcase;
    maker: MockupProductMaker;
};

export type MockupProductShowcase = {
    slides: MockupProductSlide[];
};

export type MockupProductSlide = {
    video?: string;
    image?: string;
};

export type MockupProductMaker = {
    slug: string;
    name: string;
    logo: string;
};
