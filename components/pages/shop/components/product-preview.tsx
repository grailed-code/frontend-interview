import { Product } from '@/types';

import styles from './product-preview.module.scss';
import Ratings from './ratings';
import { Button } from '@/components/ui/button';

type ProductPreviewProps = {
  product: Product;
};

function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.details}>
        <h2>{product.title}</h2>
        <div className={styles.priceAndRatingsContainer}>
          <span className={styles.price}>${product.price}</span>
          {'|'}
          <span className={styles.ratings}>
            <Ratings rating={product.rating} />
          </span>
        </div>
        <div className={styles.description}>
          <div>Color: {product.color}</div>
          <div>Size: {product.size}</div>
          <div>Condition: {product.condition}</div>
          <div>Designer: {product.designer}</div>
        </div>
        <Button className={styles.buyBtn}>Buy</Button>
      </div>
    </div>
  );
}

export default ProductPreview;
