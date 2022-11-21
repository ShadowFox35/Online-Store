import React from 'react';
import { goodElemType } from '../../type/Objects';
import './Header.scss';

interface propHeader {
  basket: goodElemType[];
}

const Header: React.FC<propHeader> = ({ basket }) => {
  return (
    <div className="header">
      <div className="wrapper">
        {/* <nav className="menu">
          <div className="menu_item">Главная</div>
          <div className="menu_item">О нас</div>
          <div className="menu_item">Оплата и доставка</div>
          <div className="menu_item">
            Возврат и гарантии
          </div>
          <div className="menu_item">Как сделать заказ</div>
          <div className="menu_item">Контакты</div>
        </nav> */}
        <div className="login-menu">
          <div className="login-menu_item">Вход</div>
          <div className="login-menu_item">Регистрация</div>
        </div>
        <div className="cart-box">
          <div className="cart">Корзина</div>
          <div className="amount">{basket.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
