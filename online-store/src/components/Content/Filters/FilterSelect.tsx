import React, { useEffect, useState } from 'react';
import {
  filterBrend,
  filterGroup,
  filterVolume,
} from '../../../constants/constant';
import { filterObjectType } from '../../../type/Objects';

import './Filters.scss';

interface propFilterSelect {
  filterObj: filterObjectType;
  setFilterObj: Function;
}

const FilterSelect: React.FC<propFilterSelect> = ({
  filterObj,
  setFilterObj,
}) => {
  const [man, setMan] = useState<Boolean>(false);
  const [woman, setWoman] = useState<Boolean>(false);

  const setBrend = (brand: string): void => {
    setFilterObj({ ...filterObj, brand: brand });
  };
  const setVolume = (volume: number): void => {
    setFilterObj({ ...filterObj, volume });
  };
  const setGroup = (group: string): void => {
    setFilterObj({ ...filterObj, group });
  };
  const setPopular = (popularity: boolean): void => {
    if (popularity) {
      setFilterObj({
        ...filterObj,
        popularity,
      });
    } else {
      const newObject: filterObjectType = { ...filterObj };
      delete newObject.popularity;
      setFilterObj(newObject);
    }
  };

  useEffect(() => {
    if (man || woman) {
      const newGender: string[] = [];
      man && newGender.push('мужской');
      woman && newGender.push('женский');
      setFilterObj({ ...filterObj, gender: newGender });
    } else {
      setFilterObj({ ...filterObj, gender: [] });
    }
  }, [man, woman]);

  return (
    <div className="filter">
      <h4 className="filter_title">Фильтры по значению</h4>
      <div className="filter_box">
        <ul>
          <span className="filter_value">По бренду:</span>
          {filterBrend.map((elem: string, key: number) => (
            <li
              key={key}
              className={`filter_item ${
                filterObj.brand === elem ? 'select' : ''
              }`}
              onClick={() => setBrend(elem)}>
              {elem}
            </li>
          ))}
        </ul>
        <ul>
          <span className="filter_value">По объему:</span>
          {filterVolume.map((elem: number, key: number) => (
            <li
              key={key}
              className={`filter_item ${
                filterObj.volume === elem ? 'select' : ''
              }`}
              onClick={() => setVolume(elem)}>
              {elem} мл
            </li>
          ))}
        </ul>
        <ul>
          <span className="filter_value">По группе:</span>
          {filterGroup.map((elem: string, key: number) => (
            <li
              key={key}
              className={`filter_item ${
                filterObj.group === elem ? 'select' : ''
              }`}
              onClick={() => setGroup(elem)}>
              {elem}
            </li>
          ))}
        </ul>
        <div className="filter_value">
          <div className="faves_check">
            <label>
              <input
                type="checkbox"
                onClick={(e) =>
                  setWoman(e.currentTarget.checked)
                }
              />
              <span></span>
              Женские
            </label>
          </div>
        </div>
        <div className="filter_value">
          <div className="faves_check">
            <label>
              <input
                type="checkbox"
                onClick={(e) =>
                  setMan(e.currentTarget.checked)
                }
              />
              <span></span>
              Мужские
            </label>
          </div>
        </div>
        <div className="filter_value">
          <div className="faves_check">
            <label>
              <input
                type="checkbox"
                onClick={(e) =>
                  setPopular(e.currentTarget.checked)
                }
              />
              <span></span>
              Только популярные
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSelect;
