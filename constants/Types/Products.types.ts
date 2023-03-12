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
};

export type MockupProductShowcase = {
    slides: MockupProductSlide[];
};

export type MockupProductSlide = {
    video?: string;
    image?: string;
};
