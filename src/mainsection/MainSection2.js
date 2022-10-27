import './css/MainSection2.css';
import {Link} from 'react-router-dom';

const MainSection2 = () => {
  return (
    <section className="Section2 section">
      <div className="section_wrapper">
        <div className="section_title">
          <h2>나에게 필요한 커리어 인사이트</h2>
          <button>
            <svg width="24" height="24" className="" viewBox="0 0 17 17">
              <defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs>
              <g fill="none" fillRule="evenodd">
                <path stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path>
                <path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path>
                <path stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path>
              </g>
            </svg>
          </button>
        </div>

        <div className="scroll_wrapper">
          <div className="scroll_snap">
            <div className="scroll_container">
              <button><span>커리어고민</span></button>
              <button><span>IT/기술</span></button>
              <button><span>인간관계</span></button>
              <button><span>조직문화</span></button>
              <button><span>라이프스타일</span></button>
              <button><span>리더십</span></button>
              <button><span>회사생활</span></button>
              <button><span>취업/이직</span></button>
              <button><span>마케팅</span></button>
              <button><span>노무</span></button>
              <button><span>개발</span></button>
            </div>
            <button id="scroll_nxt_btn">
              <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </button>
          </div>
          <button id="more_btn"> ... </button>
        </div>

        <div className="grid_container">
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FL6MZDx02D9I%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLBWRffE-9qsovrfb1xz01ebJeDy3Q&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">디자인 현실적인 고민 무엇이든 물어보세요 | 공부법? 포트폴리오? 좋은 커리어?</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90" alt=""></img>
              <p>eo</p>
            </div>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4i7K%2Fimage%2FDSyHRclG2TPHM13oHNcefhrB_Ts&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">커리어 여정, 나에게 맞는 자리 찾기</p>
            <p className="contents_subtitle">"커리어는 사다리가 아니라 정글짐이다" 이 말은 페이스북 COO인 셰릴 샌드버그 (Sheryl</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90" alt=""></img>
              <p>백승엽</p>
            </div>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220517%2F1%2F91648414.jpg&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">돈이 먼저일까요, 행복이 먼저일까요?</p>
            <p className="contents_subtitle">보상과 맞바꾼 워라밸, 그 안에서 돈과 행복의 우선순위에 대해 고민하는 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
              <p>한국인성컨설팅&마인드클리닉 노주선</p>
            </div>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F35388040.jpg&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">나의 커리어는 어디로 가는가</p>
            <p className="contents_subtitle">커리어를 이대로 쌓아가도 괜찮을지 고민하는 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
              <p>한국인성컨설팅&마인드클리닉 노주선</p>
            </div>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F75369770.jpg&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">좋은 동료 But 낮은 연봉과 보상</p>
            <p className="contents_subtitle">동료는 좋지만 낮은 연봉과 보상 때문에 사표를 품에 넣은 직장인의 실제 사연을 통해 ‘직장생</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
              <p>한국인성컨설팅&마인드클리닉 노주선</p>
            </div>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fcryp8dAbsOQ%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLAgh_2LpyVzDZRs7d9g0EgaQFYa0Q&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">네카라쿠배 목표라면 유리한 전략은 이미 정해져있다? | 개발자 특집 3편</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90" alt=""></img>
              <p>eo</p>
            </div>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F3%2F00902011.jpg&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">예시 사례를 살펴보는 실제 이력서 작성법 - 백승엽</p>
            <p className="contents_subtitle">오늘은 실제 예시를 통해 이력서를 작성하는 방법에 대해 알아봅니다.지난 영상에서 이력서가</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
              <p>원티드랩 백승엽</p>
            </div>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F64766774.jpg&w=500&q=75" alt="❌"></img>
            </div>

            <p className="contents_title">이력서가 무엇인지 살펴보기 - 백승엽</p>
            <p className="contents_subtitle">이력서는 무엇일까요?기계처럼 반복적으로 작성하고 제출하지만 과연 이렇게 써도 되는 것일</p>
            <div className="grid_author">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
              <p>원티드랩 백승엽</p>
            </div>
          </Link>
        </div>
        <div className="section2_more_btn">
          <button>
            더 많은 콘텐츠 보기
            <svg viewBox="0 0 19 19"><path d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z" fill="currentColor"></path></svg>
          </button>
        </div>
      </div>
      <aside>
        <div>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=144&q=90" alt=""></img>
          <button>X</button>
        </div>
        <div>즐겨보는<br />크리에이터의 글도<br />추천하고 싶다면?</div>
        <hr />
        <div>
          <Link to="#none">
            크리에이터 추천하기
            <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
          </Link>
        </div>
      </aside>
    </section>
  )
}

export default MainSection2