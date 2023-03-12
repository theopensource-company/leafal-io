export type MockupProduct = {
    slug: string;
    title: string;
    tagline?: string;
    overview: string;
    description: string;
    logo: string;
    thumbnail?: string;
    background?: string;
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
