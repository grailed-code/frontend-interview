import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import styles from './sort-dropdown.module.scss';
import { classnames } from '@/lib/utils';

export type SortOption = {
  label: string;
  href: string;
  current?: boolean;
};

export type SortDropdownProps = {
  sortOptions: SortOption[];
};

function SortDropdown({ sortOptions }: SortDropdownProps) {
  const currentItems = sortOptions.filter((x) => x.current);

  if (currentItems.length === 0) {
    throw Error('SortDropdown - at least 1 sort option must be selected');
  }

  if (currentItems.length > 1) {
    throw Error('SortDropdown - multiple sort items set as selected');
  }

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
          <DropdownMenuItem>{item.label}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SortDropdown;
