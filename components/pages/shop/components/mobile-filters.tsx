import styles from './mobile-filters.module.scss';

type MobileFiltersProps = {
  open?: boolean;
  setOpen: (value: boolean) => void;
};

function MobileFilters({ open, setOpen }: MobileFiltersProps) {
  return (
    <div className={styles['mobile-filters']} aria-modal>
      <div className={styles.container}>
        <div className={styles.content}>Foo</div>
      </div>
    </div>
  );
}
