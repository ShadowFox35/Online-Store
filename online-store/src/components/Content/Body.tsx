import React, { useEffect, useState } from 'react';
import './Body.scss';

import Search from './Filters/Search';
import FilterSelect from './Filters/FilterSelect';
import FilterRange from './Filters/FilterRange';
import OurGoods from './Goods/OurGoods';
import Reset from './Filters/Reset';
import {
  goodElemType,
  filterObjectType,
} from '../../type/Objects';

interface propBody {
  setBasket: Function;
  basket: goodElemType[];
  setOpenModal: Function;
}

const Body: React.FC<propBody> = ({
  setBasket,
  basket,
  setOpenModal,
}) => {
  const [filterObj, setFilterObj] =
    useState<filterObjectType>(getStartFilter());
  const [sortObj, setSortObj] = useState<string>(
    getStartSort()
  );

  useEffect(() => {
    localStorage.setItem('sort', JSON.stringify(sortObj));
    localStorage.setItem(
      'filter',
      JSON.stringify(filterObj)
    );
  }, [filterObj, sortObj]);

  function getStartFilter(): filterObjectType {
    const newFilter: string = JSON.stringify({
      price: [100, 1000],
      amount: [1, 12],
      year: [1998, 2021],
    });
    return JSON.parse(
      localStorage.getItem('filter') || newFilter
    );
  }

  function getStartSort(): string {
    return JSON.parse(`${localStorage.getItem('sort')}`);
  }

  return (
    <div className="main">
      <Search
        setSortObj={setSortObj}
        filterObj={filterObj}
        setFilterObj={setFilterObj}
      />
      <div className="content-wrapper">
        <div className="filter-wrapper">
          <FilterSelect
            filterObj={filterObj}
            setFilterObj={setFilterObj}
          />
          <FilterRange
            filterObj={filterObj}
            setFilterObj={setFilterObj}
          />
          <Reset setFilterObj={setFilterObj} />
        </div>
        <OurGoods
          filterObj={filterObj}
          sortObj={sortObj}
          setBasket={setBasket}
          basket={basket}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
};

export default Body;
