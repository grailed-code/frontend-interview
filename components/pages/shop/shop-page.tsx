import { useEffect, useState } from 'react';

import { Product, ProductsResponseData } from '@/types';
import { getProducts } from '@/lib/products';

import Filters from './components/filters';
import Header from './components/header';
import Products from './components/products';

import styles from './shop-page.module.scss';

function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
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
