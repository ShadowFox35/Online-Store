import React from 'react';
import './Filters.scss';
interface propReset {
  setFilterObj: Function;
}
const Reset: React.FC<propReset> = ({ setFilterObj }) => {
  const setReset = (): void => {
    setFilterObj({
      price: [100, 1000],
      amount: [1, 12],
      year: [1998, 2021],
    });
  };
  return (
    <div className="reset">
      <button
        type="button"
        className="reset_btn"
        onClick={() => setReset()}>
        Сбросить фильтры
      </button>
      <button
        type="button"
        className="reset_btn"
        onClick={() => localStorage.clear()}>
        Сбросить настройки
      </button>
    </div>
  );
};

export default Reset;
