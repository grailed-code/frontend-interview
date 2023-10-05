import { FilterIcon } from "lucide-react";

import SortDropdown from "./sort-dropdown";

const sortOptions = [
  { label: "Most Popular", href: "#", current: true },
  { label: "Best Rating", href: "#", current: false },
  { label: "Newest", href: "#", current: false },
  { label: "Price: Low to High", href: "#", current: false },
  { label: "Price: High to Low", href: "#", current: false },
];

import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <div className={styles.controls}>
        <SortDropdown sortOptions={sortOptions} />
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
