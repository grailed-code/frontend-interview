import { FilterIcon } from "lucide-react";

import SortDropdown from "./sort-dropdown";

import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <div className={styles.controls}>
        <SortDropdown />
        <button className={styles.filterBtn}>
          <FilterIcon
            size={20}
            fill="rgb(156 163 175)"
            color="rgb(156 163 175)"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
