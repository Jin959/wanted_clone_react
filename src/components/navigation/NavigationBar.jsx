import './css/navigation_bar.css';
import { ReactComponent as SearchIcon } from "../../assets/navigation/SearchIcon.svg";
import {Link} from 'react-router-dom';

const NavigationBar = ({ setModalFlag, setSearchBarFlag }) => {
  const onClickModal = () => {
    setModalFlag(true);
  }

  const onClickSearchBtn = () => {
    setSearchBarFlag(true);
  }
  
  const onPointerDropDownMenu = () => {
    window.alert('onpointerenter');
  }

  return (
    <div className="nav_container">
      <nav>
        <div className="nav_left">
          <button id="menu" type="button" onPointerEnter={onPointerDropDownMenu}>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="❓" />
          </button>
          <div id="home">
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
          <div>
            <button onClick={onClickSearchBtn}>
              <SearchIcon/>
            </button>
          </div>
          <div>
            <button onClick={onClickModal}>회원가입/로그인</button>
          </div>
          <div>|</div>
          <div>
            <Link to="/#none">기업 서비스</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar;