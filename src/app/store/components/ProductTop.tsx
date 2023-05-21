'use client';
import * as React from 'react';

import styles from './ProductTop.module.scss';

import { Slideshow } from '@/app/components/Common/Slideshow';
import { TProductRecord } from '@/constants/types/Product.types';

export default function ProductTop({ product }: { product: TProductRecord }) {
    return (
        <div className={styles.default}>
            <div className={styles.showcase}>
                {product.showcase ? (
                    <Slideshow
                        slides={product.showcase.map((showcaseSlide) => {
                            return {
                                video:
                                    showcaseSlide.type == 'video'
                                        ? showcaseSlide.source
                                        : undefined,
                                image:
                                    showcaseSlide.type == 'image'
                                        ? showcaseSlide.source
                                        : undefined,
                            };
                        })}
                    />
                ) : (
                    <div className={styles.noshow}>
                        <b>Words speak a thousand pictures...</b>
                        <br />
                        {`This game doesn't have anything to show here.`}
                    </div>
                )}
            </div>

            <div className={styles.side}>
                <div className={styles.overview}>
                    <div className={styles.thumbnail}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className={styles.text}>
                        <p>{product.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
