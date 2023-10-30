import Link from 'next/link';

import { Product } from '@/types';

import styles from './products.module.scss';

type ProductProps = {
  product: Product;
};

function Product({ product }: ProductProps) {
  return (
    <div className={styles.product} data-testid="product">
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.header}>
          <span aria-hidden="true" />
          {product.title}
        </h3>
        <p className={styles.designer}>{product.designer}</p>
        <div className={styles.details}>
          <p className={styles.price}>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

type ProductsProps = {
  products: Product[];
};

function Products({ products }: ProductsProps) {
  return (
    <section className={styles.container}>
      <div className={styles.products}>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Product key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
