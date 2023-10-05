import { Product } from "@/types";

import styles from "./products.module.scss";

type ProductProps = {
  product: Product;
};
function Product({ product }: ProductProps) {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.header}>
          <a href="#">
            <span aria-hidden="true" />
            {product.title}
          </a>
        </h3>
        <p className={styles.designer}>{product.designer}</p>
        <div className={styles.details}>
          {/* <p className="text-sm italic text-gray-500">{product.options}</p> */}
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
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
