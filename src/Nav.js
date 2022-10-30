import './css/nav_style.css';
import {Link} from 'react-router-dom';

const Nav = ({ setModalFlag }) => {

  const onClickModal = () => {
    setModalFlag(true);    
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
            <Link to="https://jin959.github.io/wanted_clone/">
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
            <button>
              <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18">
                <path d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z">
                </path>
              </svg>
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

export default Nav;