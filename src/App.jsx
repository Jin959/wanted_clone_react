import './css/css_reset.css';
import { useEffect, useState, useRef } from 'react';
import  { Routes, Route } from 'react-router-dom';

import Main from './Main';
import RecruiteDetail from './RecruiteDetail';
import RecruiteList from './RecruiteList';
import Search from './Search';
import BookMark from './BookMark';

import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import SearchBar from './components/modal/SearchBar';

function App() {
  //0 1 2 숫자로 고쳐서 플래그를 세개의 역할을 하개한다
  // 로그인창에 있을지 회원가입으로 갈지 로그인으로 갈지를 정한다.
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
        <Route path="/bookmarks" element={<BookMark/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;