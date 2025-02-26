import './App.css';
import React, { useState, useEffect } from 'react';
import Modal from './componets/Modal';
import { CookiesProvider, useCookies } from 'react-cookie';

const App = () => {
  const [openModal, setOpenModal] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);
  const [appCookies, setAppCookies] = useCookies();

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeModalUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(1);
    setAppCookies("MODAL_EXPIRES", true, { path: "/", expires });

    setOpenModal(false);
  };

  useEffect(() => {
    if (appCookies["MODAL_EXPIRES"]) return;
    console.log(appCookies["MODAL_EXPIRES"]);
    setHasCookie(false);
  }, []);

  return (
    <CookiesProvider>
      <div className="App">
        <button onClick={() => setOpenModal(true)}>모달 오픈</button>
        {openModal && !hasCookie && (
          <Modal
            closeModal={() => setOpenModal(false)}
            closeModalUntilExpires={closeModalUntilExpires}
          />
        )}
      </div>
    </CookiesProvider>
  );
}

export default App;
