import React, { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Content/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { goodElemType } from './type/Objects';
import ModalWindow from './components/Modal/ModalWindow';

const App: React.FC = () => {
  const [basket, setBasket] = useState<goodElemType[]>(
    getStartBasket()
  );
  const [openModal, setOpenModal] =
    useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  function getStartBasket(): goodElemType[] {
    return JSON.parse(
      localStorage.getItem('basket') || '[]'
    );
  }

  return (
    <>
      <div className="container">
        <Header basket={basket} />
        <Body
          setBasket={setBasket}
          basket={basket}
          setOpenModal={setOpenModal}
        />
        <ModalWindow
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
