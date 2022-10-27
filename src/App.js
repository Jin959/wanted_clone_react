import './css/css_reset.css';

import { useEffect, useState, useRef } from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Modal from './modal/Modal';

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
      <Nav setModalFlag={setModalFlag} />
      {
        modalFlag &&
        <Modal
          setModalFlag={setModalFlag}
          setLimitScrollFlag={setLimitScrollFlag}
        />
      }
      <Main />
      <Footer />
    </div>
  );
}
export default App;