import { StarIcon } from 'lucide-react';

import styles from './ratings.module.scss';

type RatingsProps = {
  rating: number;
};

function Ratings({ rating }: RatingsProps) {
  return (
    <div className={styles.container}>
      <StarIcon
        size={20}
        className={rating < 2 ? styles.starEmpty : styles.star}
      />
      <StarIcon
        size={20}
        className={rating < 4 ? styles.starEmpty : styles.star}
      />
      <StarIcon
        size={20}
        className={rating < 6 ? styles.starEmpty : styles.star}
      />
      <StarIcon
        size={20}
        className={rating < 8 ? styles.starEmpty : styles.star}
      />
      <StarIcon
        size={20}
        className={rating < 10 ? styles.starEmpty : styles.star}
      />
    </div>
  );
}

export default Ratings;
