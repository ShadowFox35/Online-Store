import React, { useState } from 'react';
import { filterObjectType } from '../../../type/Objects';
import './Filters.scss';
interface propSearch {
  setSortObj: Function;
  filterObj: filterObjectType;
  setFilterObj: Function;
}
const Search: React.FC<propSearch> = ({
  setSortObj,
  filterObj,
  setFilterObj,
}) => {
  const [value, setValue] = useState(filterObj.name || '');

  const setInputValue = (str: string) => {
    setFilterObj({
      ...filterObj,
      name: str,
    });
    setValue(str);
  };
  return (
    <div className="search-wrapper">
      <div className="search-form">
        <input
          className="search_input"
          placeholder="Поиск товара"
          autoComplete="off"
          autoFocus
          name="search"
          value={value}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div
          className="close"
          onClick={() => setInputValue('')}></div>
      </div>
      <div className="sort">
        <h4 className="sort_title">Сортировать по:</h4>
        <select
          className="select"
          onChange={(e) => setSortObj(e.target.value)}>
          <option value="maxName">
            По названию от A до Z
          </option>
          <option value="minName">
            По названию от Z до A
          </option>
          <option value="maxYear">
            По году, по возрастанию
          </option>
          <option value="minYear">
            По году, по убыванию
          </option>
        </select>
      </div>
    </div>
  );
};

export default Search;
