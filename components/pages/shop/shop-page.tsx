import { useEffect, useState } from 'react';

import { Product, ProductsResponseData } from '@/types';
import { getProducts } from '@/lib/products';
import Modal from '@/components/ui/modal';

import Filters from './components/filters';
import Header from './components/header';
import Products from './components/products';

import styles from './shop-page.module.scss';
import ProductPreview from './components/product-preview';

function ShopPage() {
  const [products, setProducts] = useState<Product[]>();
  const [filters, setFilters] =
    useState<ProductsResponseData['filters']>();

  useEffect(() => {
    const fetchProducts = async () => {
      const p = await getProducts();
      setProducts(p.results);
      setFilters(p.filters);
    };
    fetchProducts();
  }, []);
  return (
    <main>
      <Header />
      <Modal isOpen handleClose={() => null}>
        {products ? <ProductPreview product={products[0]} /> : null}
      </Modal>
      <section className={styles.content}>
        {filters ? <Filters filterOptions={filters} /> : null}
        <div className={styles.products}>
          {products ? <Products products={products} /> : null}
        </div>
      </section>
    </main>
  );
}

export default ShopPage;
