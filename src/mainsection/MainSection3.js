import './css/MainSection3.css';
import {Link} from 'react-router-dom';

const MainSection3 = () => {
  return (
    <section className="section" id="section3">
      <div className="section_wrapper">
        <div className="section_nav">
          <button>
            <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
          </button>
          <div className="section_title">
            <h2>3분만에 읽는 Wanted+ 아티클</h2>
            <div>
              <Link to="#none">
                아티클 전체보기
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
            <div className="item_link_img_wrapper" >
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2438%2F9890601e.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_title">CX 팀 조직 구조 설계부터 채용 공고 작성법까지</p>
            <p className="contents_subtitle">#고객서비스·리테일 #CS/CX #서비스기획</p>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper" >
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2437%2F30d52ee0.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_title">스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?</p>
            <p className="contents_subtitle">#HR #조직문화 #경영/전략</p>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper" >
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2430%2Fd892e109.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_title">IP 확장 그리고 글로벌 진출로 세계 선구자가 되다</p>
            <p className="contents_subtitle">#미디어 #콘텐츠 제작 #회사생활</p>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper" >
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_title">리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀</p>
            <p className="contents_subtitle">#개발 #IT/기술 #취업/이직</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MainSection3