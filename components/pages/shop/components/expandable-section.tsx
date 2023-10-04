import { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';

import styles from './expandable-section.module.scss';

type ExpandableSectionProps = {
  label: string;
  children: React.ReactNode;
};

function ExpandableSection({ children, label }: ExpandableSectionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <h3>
        <button
          className={styles.trigger}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{label}</span>
          {open ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
        </button>
      </h3>
      {open ? <div className={styles.content}>{children}</div> : null}
    </div>
  );
}

export default ExpandableSection;
