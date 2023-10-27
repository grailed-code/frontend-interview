import ButtonDemo from '@/components/ui/button.demo';
import DropdownMenuDemo from '@/components/ui/dropdown-menu.demo';
import ModalDemo from '@/components/ui/modal.demo';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React Component Demos</h1>

      <section className={styles.section}>
        <h2>Button Component Demo</h2>
        <ButtonDemo />
      </section>

      <section className={styles.section}>
        <h2>Dropdown Menu Component Demo</h2>
        <DropdownMenuDemo />
      </section>

      <section className={styles.section}>
        <h2>Modal Component Demo</h2>
        <ModalDemo />
      </section>
    </div>
  );
}
