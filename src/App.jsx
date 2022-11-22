import './css/css_reset.css';
import { useEffect, useState } from 'react';
import  { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './Main';
import RecruiteDetail from './RecruiteDetail';
import RecruiteList from './RecruiteList';
import Search from './Search';
import BookMark from './BookMark';

import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import SearchBar from './components/modal/SearchBar';

import styled, {css} from 'styled-components';

const AppControllScrollFixing = styled.div`  
  ${({limitScrollFlag}) => 
    limitScrollFlag &&
    css`
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    `
  };
`;

function App() {
  const [limitScrollFlag, setLimitScrollFlag] = useState(false);
  const [searchBarFlag, setSearchBarFlag] = useState(false);
  
  const modalFlag = useSelector(state => state.modalFlagReducer.flag);


  useEffect(() => {
    if(modalFlag !== 0) setLimitScrollFlag(true);
    else setLimitScrollFlag(false);
  },[modalFlag]);

  return (
    <AppControllScrollFixing
      className='App'
      limitScrollFlag={limitScrollFlag}
    >
      <NavigationBar
        setSearchBarFlag={setSearchBarFlag}
      />
      {
        (modalFlag !== 0) &&
        <Modal/>
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
    </AppControllScrollFixing>
  );
}
export default App;