import './css/css_reset.css';
import { useEffect, useState, useRef } from 'react';
import  { Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Main from './Main';
import Footer from './Footer';
import Modal from './modal/Modal';
import SearchBar from './modal/SearchBar';
import RecruiteDetail from './RecruiteDetail';
import RecruiteList from './RecruiteList';
import Search from './Search';

function App() {
  const [modalFlag, setModalFlag] = useState(false);
  const [limitScrollFlag, setLimitScrollFlag] = useState(false);
  const [searchBarFlag, setSearchBarFlag] = useState(false);
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
      <NavigationBar
        setModalFlag={setModalFlag}
        setSearchBarFlag={setSearchBarFlag}
      />
      {
        modalFlag &&
        <Modal
          setModalFlag={setModalFlag}
          setLimitScrollFlag={setLimitScrollFlag}
        />
      }
      {
        searchBarFlag &&
        <SearchBar
          searchBarFlag={searchBarFlag}
          setSearchBarFlag={setSearchBarFlag}
        />
      }
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/wdlist" element={<RecruiteList/>}/>
        <Route path="/wd/*" element={<RecruiteDetail/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;