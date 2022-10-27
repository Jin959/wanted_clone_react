import './css/MainSection6.css'
import {Link} from 'react-router-dom';

const MainSection6 = () => {
  return (
    <section className="Section6 section">
      <div className="section_wrapper">
        <div className="section_nav">
          <button>
            <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
          </button>
          <div className="section_title">
            <h2>커리어 성장을 위한 맞춤 이벤트</h2>
            <div>
              <Link to="#none">
                이벤트 전체보기
                <svg viewBox="0 0 20 20"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
              </Link>
            </div>
          </div>
          <button>
            <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
          </button>
        </div>
        <div className="section_content">
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2426%2F1fc340dd.jpg&w=1200&q=100" alt=""></img>
            </div>
            <div className="item_stat">
              <span className="online_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"><path fill="currentColor" d="M5.98.9A5.09 5.09 0 00.32 6.54l1.03-.1a4.07 4.07 0 014.52-4.53L5.98.89zm4.57 4.56l-1.03.1A4.07 4.07 0 015 10.1l-.11 1.03a5.1 5.1 0 005.66-5.66zM5.76 2.94c-.9-.1-1.84.18-2.53.86a3.06 3.06 0 00-.86 2.54l1.02-.11c-.07-.6.12-1.24.57-1.7a2.05 2.05 0 011.7-.57l.1-1.02zM8.5 5.68l-1.04.12a2 2 0 01-2.24 2.24L5.1 9.06a3.06 3.06 0 003.4-3.4zm-2.53-.22c-.3-.3-.8-.3-1.1 0-.3.3-.29.78.02 1.08.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08z"></path></svg>
                온라인
              </span>
              <span className="networking_icon">
                네트워킹
              </span>
            </div>
            <p className="contents_title">스터디살롱 : CS/CX의 실무 꿀팁과 Next Career</p>
            <p className="contents_subtitle">2022.11.24 (목)</p>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2414%2F93dc7b57.jpg&w=1200&q=100" alt=""></img>
            </div>
            <div className="item_stat">
              <span id="edu">
                교육
              </span>
            </div>
            <p className="contents_title">스타트업 Lead를 위한 그룹코칭</p>
            <p className="contents_subtitle">2022.12.08 (목)</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MainSection6