import * as React from 'react';

import styles from './Previews.module.scss';

import { TProductRecord } from '@/constants/types/Product.types';
import Link from 'next/link';
import { ProductPlatforms } from './Platforms';

export type ProductPreviewProps = {
    product: TProductRecord;
};

export function ProductPreviewBanner({ product }: ProductPreviewProps) {
    return (
        <>
            <div className="main-wrapper">
                <Link href={`/store/${product.slug}`} className={styles.banner}>
                    <div className={styles.thumbnail}>
                        {product.thumbnail && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={product.thumbnail} alt={product.title} />
                        )}
                    </div>

                    <div className={styles.text}>
                        <span className={styles.title}>{product.title}</span>
                        <p className={styles.tagline}>{product.tagline}</p>

                        <span className={styles.specifications}>
                            <span className={styles.pricing}>
                                {product.pricing}
                            </span>

                            {product.platformNames && (
                                <ProductPlatforms
                                    platformNames={product.platformNames}
                                />
                            )}
                        </span>
                    </div>
                </Link>
            </div>
        </>
    );
}
