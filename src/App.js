import './css/css_reset.css';

//import {useState} from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
//import Modal from './Modal';




function App() {
    /*
    const [modalFlag, setModalFlag] = useState(false);

    const getFlag = (modalFlag) => {
        setModalFlag(modalFlag);
        console.log(modalFlag);
    }
    */
    return (
        <div className="App">
            {/*
            <Nav modalFlag={modalFlag} getFlag={getFlag}/>
            {modalFlag === true ? <Modal/> : (null)}
            */}
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    );
}
export default App;