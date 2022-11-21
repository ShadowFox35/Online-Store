import React, { useEffect, useState } from 'react';
import './Filters.scss';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
  minDistanceAmount,
  minDistancePrice,
  minDistanceYear,
} from '../../../constants/constant';
import { filterObjectType } from '../../../type/Objects';

interface propFilterRange {
  filterObj: filterObjectType;
  setFilterObj: Function;
}

const FilterRange: React.FC<propFilterRange> = ({
  filterObj,
  setFilterObj,
}) => {
  const [price, setPrice] = useState<number[]>(
    filterObj.price
  );
  const [amount, setAmount] = useState<number[]>(
    filterObj.amount
  );
  const [year, setYear] = useState<number[]>(
    filterObj.year
  );

  useEffect(() => {
    const exampleAttay: filterObjectType = {
      price: [100, 1000],
      amount: [1, 12],
      year: [1998, 2021],
    };
    console.log();

    if (
      JSON.stringify(exampleAttay) !==
        JSON.stringify(filterObj) ||
      JSON.stringify(price) !==
        JSON.stringify(filterObj.price) ||
      JSON.stringify(amount) !==
        JSON.stringify(filterObj.amount) ||
      JSON.stringify(year) !==
        JSON.stringify(filterObj.year)
    ) {
      setFilterObj({ ...filterObj, price, amount, year });
    }
  }, [price, amount, year]);

  useEffect(() => {
    const exampleAttay: filterObjectType = {
      price: [100, 1000],
      amount: [1, 12],
      year: [1998, 2021],
    };
    if (
      JSON.stringify(exampleAttay) ===
      JSON.stringify(filterObj)
    ) {
      setPrice([100, 1000]);
      setAmount([1, 12]);
      setYear([1998, 2021]);
    }
  }, [filterObj]);

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([
        Math.min(newValue[0], price[1] - minDistancePrice),
        price[1],
      ]);
    } else {
      setPrice([
        price[0],
        Math.max(newValue[1], price[0] + minDistancePrice),
      ]);
    }
  };

  const handleChangeAmount = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setAmount([
        Math.min(
          newValue[0],
          amount[1] - minDistanceAmount
        ),
        amount[1],
      ]);
    } else {
      setAmount([
        amount[0],
        Math.max(
          newValue[1],
          amount[0] + minDistanceAmount
        ),
      ]);
    }
  };

  const handleChangeYear = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setYear([
        Math.min(newValue[0], year[1] - minDistanceYear),
        year[1],
      ]);
    } else {
      setYear([
        year[0],
        Math.max(newValue[1], year[0] + minDistanceYear),
      ]);
    }
  };

  return (
    <div className="filter">
      <h4 className="filter_title" id="range">
        Фильтры по диапазону
      </h4>

      <div className="filter_box">
        <div className="range">
          <h4>Цена (бел.руб)</h4>
          <div className="range-slider">
            {price[0]}{' '}
            <Box>
              <Slider
                className="slider"
                value={price}
                onChange={handleChangePrice}
                valueLabelDisplay="auto"
                min={100}
                step={10}
                max={1000}
                disableSwap
              />
            </Box>
            {price[1]}
          </div>
        </div>
        <div className="range">
          <h4>Количество на складе</h4>
          <div className="range-slider">
            {amount[0]}{' '}
            <Box>
              <Slider
                className="slider"
                value={amount}
                onChange={handleChangeAmount}
                valueLabelDisplay="auto"
                min={1}
                step={1}
                max={12}
                disableSwap
              />
            </Box>
            {amount[1]}
          </div>
        </div>
        <div className="range">
          <h4>Год выхода на рынок:</h4>
          <div className="range-slider">
            {year[0]}{' '}
            <Box>
              <Slider
                className="slider"
                value={year}
                onChange={handleChangeYear}
                valueLabelDisplay="auto"
                min={1998}
                step={1}
                max={2021}
                disableSwap
              />
            </Box>
            {year[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterRange;
