import Filters from './components/filters';
import Header from './components/header';

import styles from './shop-page.module.scss';

function ShopPage() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <Filters />
      </section>
    </main>
  );
}

export default ShopPage;
