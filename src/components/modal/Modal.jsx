import './css/modal.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import ModalLogin from './ModalLogin';
import ModalRegistration from './ModalRegistration'

const Modal = () => {
  const [email, setEmail] = useState('');
  const modalFlag = useSelector(state => state.modalFlagReducer.flag);
  
  return (
    <div>
      {
        (modalFlag === 1) && (
          <ModalLogin
            email={email}
            setEmail={setEmail}
          />
        )
      }
      {
        (modalFlag === 2) && (
          <ModalRegistration
            email={email}
          />
        )
      }
    </div >
  )
}

export default Modal