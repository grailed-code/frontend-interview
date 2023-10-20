import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Product as ProductType } from '@/types';

import ProductPreview from '@/components/pages/shop/components/product-preview';
import { getProduct } from '@/lib/products';

function Product() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      if (!id) {
        return;
      }
      const p = await getProduct(Number(id));
      setProduct(p);
    };
    fetchProducts();
  }, [id]);

  if (!product) {
    return null;
  }

  return <ProductPreview product={product} />;
}

export default Product;
