import { useState } from "react";

interface Filterable {
  [key: string]: any;
}

/**
 *
 * @param items
 * @param filterKey
 * @description It takes an array of objects and a key on which it filters the object
 * and return filtered items.
 */
const useFilters = <T extends Filterable>(items: T[], filterKey: keyof T) => {
  const [filterValue, setFilterValue] = useState<T[keyof T] | null>(null);

  const filteredItems = filterValue
    ? items.filter((item) => item[filterKey] === filterValue)
    : items;

  const setFilter = (value: T[keyof T] | null) => {
    setFilterValue(value);
  };

  const filterBy = (key: keyof T, value: T[keyof T] | null) => {
    setFilter(key === filterKey ? value : filterValue);
  };

  return { filteredItems, setFilter, filterBy };
};

export default useFilters;
