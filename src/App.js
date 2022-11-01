import './css/css_reset.css';

import { useEffect, useState, useRef } from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';
import Modal from './modal/Modal';
import RecruiteDetail from './RecruiteDetail';
import RecruiteList from './RecruiteList';

function App() {
  const [modalFlag, setModalFlag] = useState(false);
  const [limitScrollFlag, setLimitScrollFlag] = useState(false);
  const appBody = useRef();

  useEffect(() => {
    if (limitScrollFlag) {
      appBody.current.style.overflow = 'hidden';
      appBody.current.style.width = '100vw';
      appBody.current.style.height = '100vh';
    } else {
      appBody.current.style.overflow = '';
      appBody.current.style.width = '';
      appBody.current.style.height = '';
    }
  }, [limitScrollFlag]);

  return (
    <div className="App" ref={appBody}>
      <Navigation setModalFlag={setModalFlag} />
      {
        modalFlag &&
        <Modal
          setModalFlag={setModalFlag}
          setLimitScrollFlag={setLimitScrollFlag}
        />
      }
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/wdlist" element={<RecruiteList/>}/>
        <Route path="/wd/*" element={<RecruiteDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;