import { FilterOptions } from "@/types";
import { uppercase } from "@/lib/utils";

import ExpandableSection from "./expandable-section";

import styles from "./filters.module.scss";

type FiltersProps = {
  filterOptions: FilterOptions;
};

function Filters({ filterOptions }: FiltersProps) {
  return (
    <section className={styles.container}>
      {Object.entries(filterOptions).map(([filterName, options]) => (
        <ExpandableSection key={filterName} label={uppercase(filterName)}>
          {options.map((option, i) => (
            <div key={option} className={styles.filter}>
              <input
                id={`filter-${filterName}-${i}`}
                name={`${filterName}[]`}
                defaultValue={option}
                type="checkbox"
                defaultChecked={false}
              />
              <label htmlFor={`filter-${filterName}-${i}`}>
                {uppercase(option)}
              </label>
            </div>
          ))}
        </ExpandableSection>
      ))}
    </section>
  );
}

export default Filters;
