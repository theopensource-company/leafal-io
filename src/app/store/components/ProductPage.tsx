'use client';
import * as React from 'react';

import styles from './ProductPage.module.scss';

import { ProductBackground } from '@/app/components/Product/Background';
import { useStoreProduct } from '@/app/hooks/Queries/Product';
import { TProductRecord } from '@/constants/types/Product.types';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { ExternalLink } from 'react-feather';
import { Url } from 'url';
import ProductTop from './ProductTop';

export function ProductShell({ slug }: { slug: string }) {
    const { data: product } = useStoreProduct(slug);

    return <div>{product && <ProductPage product={product} />}</div>;
}

export function ProductPageContent({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={styles.content}>{children}</div>;
}

const sectionStyle = cva([styles.section], {
    variants: {
        background: {
            true: [styles.background],
            false: [],
        },
    },
    defaultVariants: {
        background: false,
    },
});

export function ProductPageSectionHeading({
    children,
}: {
    children: React.ReactNode;
}) {
    return <span className={styles.heading}>{children}</span>;
}

export function ProductPageSection({
    children,
    background = false,
}: {
    children: React.ReactNode;
    background: boolean;
}) {
    return (
        <div className={sectionStyle({ background: background })}>
            {children}
        </div>
    );
}

export function ProductPageSectionLink({
    children,
    href,
    icon,
}: {
    children: React.ReactNode;
    href: Url;
    icon?: React.ReactNode;
}) {
    return (
        <Link href={href} className={styles.link}>
            {icon && (
                <div className={styles.icon}>
                    {React.isValidElement(icon) && icon}
                </div>
            )}
            {children}
        </Link>
    );
}

export default function ProductPage({ product }: { product: TProductRecord }) {
    return (
        <>
            <ProductBackground product={product} />

            <div className="main-wrapper">
                <ProductTop product={product} />

                <div className={styles.details}>
                    <div className={styles.main}>
                        {product.description && (
                            <>
                                <ProductPageSectionHeading>
                                    About this game
                                </ProductPageSectionHeading>
                                <ProductPageSection background={false}>
                                    {product.description}
                                </ProductPageSection>
                            </>
                        )}
                    </div>
                    <div className={styles.side}>
                        <ProductPageSectionHeading>
                            Details
                        </ProductPageSectionHeading>
                        {product.links &&
                            product.links.map((link) => (
                                <ProductPageSectionLink
                                    href={link as unknown as Url}
                                    key={link}
                                    icon={<ExternalLink />}
                                >
                                    Visit official website
                                </ProductPageSectionLink>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
