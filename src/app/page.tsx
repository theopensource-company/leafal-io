'use client';

import * as React from 'react';

import { useEffect } from 'react';
import SignInForm from './components/Forms/SignInForm';
import SignUpForm from './components/Forms/SignUpForm';
import { ProductPreviewBanner } from './components/Product/Previews';
import { useStoreProduct } from './hooks/Queries/Product';

export default function Home() {
    const { data: product } = useStoreProduct('celesteia');

    useEffect(() => console.log(product), [product]);

    return (
        <main>
            {product && <ProductPreviewBanner product={product} />}
            <SignInForm />
            <SignUpForm />
        </main>
    );
}
