'use client';

import * as React from 'react';

import SignInForm from "./components/Forms/SignInForm";
import SignUpForm from "./components/Forms/SignUpForm";
import { useEffect, useState } from "react";
import { SurrealInstance } from "./lib/Surreal";
import { TProductRecord } from "@/constants/types/Product.types";
import { ProductPreviewBanner } from "./components/Product/Previews";

export default function Home() {
  const [product, setProduct] = useState<TProductRecord>();

  useEffect(() => {
    async function fetchProduct() {
      const result = await SurrealInstance.query<[TProductRecord[]]>(
        "SELECT * FROM product"
      );

      if (result?.[0]?.result?.[0]) setProduct(result[0].result[0]);
    }
    fetchProduct();
  }, []);

  return (
    <main>
      {product && <ProductPreviewBanner product={product} />}
      <SignInForm />
      <SignUpForm />
    </main>
  );
}
