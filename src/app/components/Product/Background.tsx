import * as React from 'react';

import { TProductRecord } from '@/constants/types/Product.types';
import styles from './Background.module.scss';

export function ProductBackground({ product }: { product: TProductRecord }) {
    return (
        <div className={styles.background}>
            <div className={styles.image}>
                {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={product.background} alt={product.title} />
                }
            </div>
        </div>
    );
}
