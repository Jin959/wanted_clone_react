import './css/modal.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ModalLogin from './ModalLogin';
import ModalRegistration from './ModalRegistration'

const Modal = ({ setLimitScrollFlag }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setLimitScrollFlag(true);
  });

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