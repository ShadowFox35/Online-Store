import React from 'react';
import { goodElemType } from '../../../type/Objects';
import './Goods.scss';

interface propGood {
  goodElem: goodElemType;
  setBasket: Function;
  basket: goodElemType[];
  setOpenModal: Function;
}

const Good: React.FC<propGood> = ({
  goodElem,
  setBasket,
  basket,
  setOpenModal,
}) => {
  const selectGood = (): void => {
    if (
      basket.findIndex(
        (elem: goodElemType) => elem.name === goodElem.name
      ) === -1
    ) {
      const newBasket: goodElemType[] = [...basket];
      if (newBasket.length === 20) {
        setOpenModal(true);
      } else {
        newBasket.push(goodElem);
        setBasket(newBasket);
      }
    } else {
      const newBasket: goodElemType[] = basket.filter(
        (elem: goodElemType) => elem.name !== goodElem.name
      );
      setBasket(newBasket);
    }
  };
  const isSelect = (): boolean => {
    return (
      basket.findIndex(
        (elem: goodElemType) => elem.name === goodElem.name
      ) !== -1
    );
  };
  return (
    <div
      className={`good ${isSelect() ? 'select' : ''}`}
      onClick={selectGood}>
      <img
        className="good_img"
        src={`${process.env.PUBLIC_URL}/${goodElem.url}`}
        alt={`${goodElem.name}`}
      />
      <div>
        {' '}
        <strong>{goodElem.name}</strong>{' '}
      </div>
      <div>
        группа:
        <div>{goodElem.group}</div>
      </div>
      <div> год выхода на рынок: {goodElem.year}</div>
      <div>
        {goodElem.gender && goodElem.gender[0]},
        {goodElem.gender && goodElem.gender[1]}
      </div>
      <div> цена: {goodElem.price} бел.руб.</div>
      <div> количество на складе: {goodElem.amount}</div>
    </div>
  );
};

export default Good;
