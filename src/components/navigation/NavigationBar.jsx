import './css/navigation_bar.css';
import { useState, useEffect, useCallback } from 'react';
import { ReactComponent as SearchIcon } from "../../assets/navigation/SearchIcon.svg";
import { Link } from 'react-router-dom';
import { AiOutlineBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import { LOGIN } from '../../redux_module/modalFlag';

const NavigationBar = ({ setSearchBarFlag }) => {
  const dispatch = useDispatch();
  const onClickModal = useCallback(() => dispatch({ type: LOGIN }), [dispatch])

  const onClickSearchBtn = () => {
    setSearchBarFlag(true);
  }

  const onPointerDropDownMenu = () => {
    window.alert('onpointerenter');
  }

  const email = localStorage.getItem('email');
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    // console.log(`start effect - `, typeof email, `email : ${email}`);
    if (email === null) {
      setLoginState(false);
    } else {
      setLoginState(true);
    }
    // console.log(`end effect - `, typeof email, `email : ${email}`);
  }, [email])

  const onClickLogout = useCallback(
    () => {
      localStorage.removeItem('email');
      setLoginState(false);
    },
    []
  )

  return (
    <div className="NavigationBar">
      <nav>
        <div className="nav_left">
          <button className="NavigationBar_menu_btn" type="button" onPointerEnter={onPointerDropDownMenu}>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="❓" />
          </button>
          <div className='NavigationBar_home_link'>
            <Link to="/">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" alt="❓" />
            </Link>
          </div>
        </div>
        <div className="nav_center">
          <div><Link to="/#none">채용</Link></div>
          <div><Link to="/#none">이벤트</Link></div>
          <div><Link to="/#none">직군별 연봉</Link></div>
          <div><Link to="/#none">이력서</Link></div>
          <div><Link to="/#none">커뮤니티</Link><em>New</em></div>
          <div><Link to="/#none">프리랜서</Link></div>
          <div><Link to="/#none">AI 합격예측</Link><em>Beta</em></div>
        </div>
        <div className="nav_right">
          <div className='serach_btn'>
            <button onClick={onClickSearchBtn}>
              <SearchIcon />
            </button>
          </div>
          <div className='login_btn'>
            {
              loginState ? (
                <>
                  <button><AiOutlineBell style={{ width: '20', height: '20' }} /></button>
                  <button onClick={onClickLogout}><FaUserCircle style={{ width: '22', height: '22' }} /></button>
                </>
              ) : (
                <button onClick={onClickModal}>회원가입/로그인</button>
              )
            }
          </div>
          <div className='employer_bar'>|</div>
          <div className='employer_link'>
            <Link to="/#none">기업 서비스</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar;