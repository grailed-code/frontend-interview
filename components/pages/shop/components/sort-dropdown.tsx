import { useCallback } from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sort } from "@/types";

import styles from "./sort-dropdown.module.scss";

export type SortOption = {
  label: string;
  value: Sort;
  current?: boolean;
};

const sortOptions: SortOption[] = [
  { label: "Most Popular", value: "popular", current: true },
  { label: "Best Rating", value: "rating", current: false },
  { label: "Newest", value: "created", current: false },
  { label: "Price: Low to High", value: "priceAsc", current: false },
  { label: "Price: High to Low", value: "priceDesc", current: false },
];

function SortDropdown() {
  const currentItems = sortOptions.filter((x) => x.current);

  if (currentItems.length === 0) {
    throw Error("SortDropdown - at least 1 sort option must be selected");
  }

  if (currentItems.length > 1) {
    throw Error("SortDropdown - multiple sort items set as selected");
  }

  const onOptionSelect = useCallback((event: Event) => {
    console.log(event.target);
  }, []);

  const unselectedItems = sortOptions.filter((x) => !x.current);
  const currentItem = currentItems[0];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={styles.trigger}>
        Sort
        <ChevronDown className={styles.icon} size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className={styles.current}>
          {currentItem.label}
        </DropdownMenuItem>
        {unselectedItems.map((item) => (
          <DropdownMenuItem onSelect={onOptionSelect} key={item.label}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SortDropdown;
