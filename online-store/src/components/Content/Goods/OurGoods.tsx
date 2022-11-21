import React, { useMemo } from 'react';
import './Goods.scss';

import Good from './Good';
import { arrayOfGoods } from '../../../constants/listOfGoods';
import {
  goodElemType,
  filterObjectType,
  statusObjectType,
} from '../../../type/Objects';

interface propOurGoods {
  filterObj: filterObjectType;
  sortObj: string;
  setBasket: Function;
  basket: goodElemType[];
  setOpenModal: Function;
}

const OurGoods: React.FC<propOurGoods> = ({
  filterObj,
  sortObj,
  setBasket,
  basket,
  setOpenModal,
}) => {
  const checkFilter = (good: goodElemType): boolean => {
    let status: statusObjectType = {};
    for (let variable in filterObj) {
      switch (variable) {
        case 'group':
          if (
            good[variable].includes(
              filterObj[
                variable as keyof filterObjectType
              ] as string
            )
          ) {
            status[variable] = true;
          } else {
            status[variable] = false;
          }
          break;
        case 'name':
          if (
            good[variable]
              ?.toLowerCase()
              .includes(
                (
                  filterObj[
                    variable as keyof filterObjectType
                  ] as string
                ).toLowerCase()
              )
          ) {
            status[variable] = true;
          } else {
            status[variable] = false;
          }
          break;
        case 'gender':
          if (filterObj[variable]?.length !== 0) {
            let checkGender = false;
            filterObj[variable]?.forEach((gender) => {
              if (
                (
                  good[
                    variable as keyof goodElemType
                  ] as string[]
                ).includes(gender)
              ) {
                checkGender = true;
              }
            });
            status[variable] = checkGender;
          }
          break;
        case 'price':
        case 'amount':
        case 'year':
          if (
            good[variable] < filterObj[variable][0] ||
            good[variable] > filterObj[variable][1]
          ) {
            status[variable] = false;
          } else {
            status[variable] = true;
          }
          break;
        default:
          if (
            (filterObj[
              variable as keyof filterObjectType
            ] as number) !==
            (good[variable as keyof goodElemType] as number)
          ) {
            (status[
              variable as keyof statusObjectType
            ] as boolean) = false;
          } else {
            (status[
              variable as keyof statusObjectType
            ] as boolean) = true;
          }
          break;
      }
    }
    for (let variable in status) {
      if (
        !(status[
          variable as keyof statusObjectType
        ] as boolean)
      ) {
        return false;
      }
    }
    return true;
  };

  const checkSort = (
    a: goodElemType,
    b: goodElemType
  ): number => {
    switch (sortObj) {
      case 'maxName':
        if (a?.name! < b?.name!) {
          return -1;
        }
        if (a?.name! > b?.name!) {
          return 1;
        }
        return 0;
      case 'minName':
        if (b?.name! < a?.name!) {
          return -1;
        }
        if (b?.name! > a?.name!) {
          return 1;
        }
        return 0;
      case 'maxYear':
        return a?.year - b?.year;
      case 'minYear':
        return b?.year - a?.year;

      default:
        return 0;
    }
  };

  const newArrayOfGoods = useMemo(() => {
    return arrayOfGoods
      .sort(checkSort)
      .filter((good: goodElemType) => checkFilter(good));
  }, [filterObj, sortObj]);

  return (
    <div className="goods-box">
      <div className="goods-cell">
        {newArrayOfGoods.length ? (
          newArrayOfGoods.map(
            (good: goodElemType, index: number) => (
              <Good
                key={index}
                goodElem={good}
                setBasket={setBasket}
                basket={basket}
                setOpenModal={setOpenModal}
              />
            )
          )
        ) : (
          <p>Извините, совпадений не обнаружено</p>
        )}
      </div>
    </div>
  );
};

export default OurGoods;
