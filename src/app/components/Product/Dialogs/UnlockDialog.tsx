import * as React from 'react';

import { TProductRecord } from '@/constants/types/Product.types';

import { useCreateLicense } from '@/app/hooks/Queries/License';
import { Button } from '../../Common/Input/Button';

import styles from './Dialogs.module.scss';

export function ProductUnlockDialog({ product }: { product: TProductRecord }) {
    const { mutate: createLicense, data: license } = useCreateLicense();

    return !license ? (
        <div
            className={styles.unlock}
            style={
                {
                    '--background': `url(${product.background})`,
                } as React.CSSProperties
            }
        >
            <div className={styles.text}>
                {`${product.pricing > 0 ? 'Purchase' : 'Play'} ${
                    product.title
                } for `}
                <span className={styles.pricing}>{product.pricingText}</span>
            </div>
            <div className={styles.action}>
                <Button onClick={() => createLicense({ licensed: product.id })}>
                    {product.pricing > 0 ? 'Purchase' : 'Unlock'}
                </Button>
            </div>
        </div>
    ) : (
        <></>
    );
}
