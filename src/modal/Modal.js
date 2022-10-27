import { useState, useEffect } from 'react';
import './css/modal_style.css';

import ModalLogin from './ModalLogin';
import ModalRegistration from './ModalRegistration'

const Modal = ({ setModalFlag, setLimitScrollFlag }) => {

  const [email, setEmail] = useState('');
  const [nowregistrationFlag, setNowRegistrationFlag] = useState(false);

  const closeModal = () => {
    setModalFlag(false);
    setLimitScrollFlag(false);
    setNowRegistrationFlag(false);
  }

  useEffect(() => {
    setLimitScrollFlag(true);
  });



  return (
    <div>
      {
        (!nowregistrationFlag) ? (
          <ModalLogin
            closeModal={closeModal}
            email={email}
            setEmail={setEmail}
            setNowRegistrationFlag={setNowRegistrationFlag}
          />
        ) : (
          <ModalRegistration
            closeModal={closeModal}
            email={email}
          />
        )
      }
    </div >
  )
}

export default Modal