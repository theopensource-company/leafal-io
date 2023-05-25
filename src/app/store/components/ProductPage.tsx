'use client';
import * as React from 'react';

import styles from './ProductPage.module.scss';

import { ProductBackground } from '@/app/components/Product/Background';
import { ProductUnlockDialogue } from '@/app/components/Product/Dialogues/UnlockDialogue';
import { useLicense } from '@/app/hooks/Queries/License';
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

export function ProductPageSection({
    children,
    background = false,
    heading,
}: {
    children: React.ReactNode;
    background: boolean;
    heading?: string;
}) {
    return (
        <div className={sectionStyle({ background: background })}>
            {heading && <span className={styles.heading}>{heading}</span>}
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
        <Link href={href} className={styles.link} target="_blank">
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
    const { data: license, isLoading: licenseLoading } = useLicense(
        product.slug
    );

    return (
        <>
            <ProductBackground product={product} />

            <div className="main-wrapper">
                <ProductTop product={product} />

                <div className={styles.details}>
                    <div className={styles.main}>
                        {!license && !licenseLoading && product.published && (
                            <div className={styles.dialogueBox}>
                                <ProductUnlockDialogue product={product} />
                            </div>
                        )}
                        {product.description && (
                            <>
                                <ProductPageSection
                                    heading={'About this game'}
                                    background={false}
                                >
                                    {product.description}
                                </ProductPageSection>
                            </>
                        )}
                    </div>
                    <div className={styles.side}>
                        <ProductPageSection
                            heading={'Details'}
                            background={false}
                        >
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
                        </ProductPageSection>
                    </div>
                </div>
            </div>
        </>
    );
}
