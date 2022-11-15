import { useEffect, useRef, useCallback } from 'react';
import './css/modal_resistration.css'
import { AiOutlineClose } from "react-icons/ai";

import ConsentCheckBox from './ConsentCheckBox';
import { useDispatch } from 'react-redux';
import { CLOSE } from '../../redux_module/modalFlag';

const ModalRegistration = ({ email }) => {
  const emailResisitrationInput = useRef(email);
  useEffect(() => {
    emailResisitrationInput.current.value = email;
  },[]);

  const dispatch = useDispatch();
  const onClickClose = useCallback(() => dispatch({type: CLOSE}), [dispatch]);

  return (
    <div className="ModalResistration">
      <div className="modal_wrapper">
        <div className="modal_header">회원가입</div>
        <button
          className="modal_close"
          onClick={onClickClose}
        >
          <AiOutlineClose/>
        </button>
        <div className="modal_main">
          <form>
            <div className="modal_input">
              <div>이메일</div>
              <input
                readOnly
                className="modal_disabled"
                type="text" name="modal_email"
                placeholder="이메일을 입력해주세요."
                ref={emailResisitrationInput}
              />
            </div>
            <div className="modal_input">
              <div>이름</div>
              <input type="text" name="modal_regi_email" placeholder="이름을 입력해주세요." />
            </div>
            <div className="modal_select">
              <div>휴대폰 번호</div>
              <select>
                <option value="KR">South Korea +82</option>
                <option value="JP">Japan +81</option>
                <option value="TW">Taiwan +886</option>
                <option value="HK">Hong Kong +852</option>
                <option value="SG">Singapore +65</option>
                <option value="AF">Afghanistan +93</option>
                <option value="AL">Albania +355</option>
                <option value="DZ">Algeria +213</option>
                <option value="AO">Angola +244</option>
                <option value="AR">Argentina +54</option>
                <option value="AM">Armenia +374</option>
                <option value="AW">Aruba +297</option>
                <option value="AU">Australia +61</option>
                <option value="AT">Austria +43</option>
                <option value="AZ">Azerbaijan +994</option>
              </select>
            </div>
            <div className="modal_input modal_regi_phone_auth">
              <input type="text" name="modal_regi_auth" placeholder="(예시) 01013241564" />
              <button className="modal_disabled">인증번호 받기</button>
            </div>
            <div className="modal_input">
              <input className="modal_disabled" type="text" name="modal_regi_phone_auth" placeholder="인증번호를 입력해주세요." />
            </div>
            <div className="modal_input">
              <div>비밀번호</div>
              <input type="text" name="modal_regi_email" placeholder="비밀번호를 입력해주세요." />
            </div>
            <div className="modal_input">
              <input type="text" name="modal_regi_email" placeholder="비밀번호를 다시 한번 입력해주세요." />
            </div>
            <p className="modal_regi_pw_info">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
            <ConsentCheckBox/>
          </form>
        </div>
        <div className="modal_footer">
          <button className="modal_btn modal_disabled" type="button">가입하기</button>
        </div>
      </div>
    </div>
  )
}

export default ModalRegistration