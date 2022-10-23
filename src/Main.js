import "./css/mian_style.css";

import { ReactComponent as CheckIcon } from "./assets/CheckIcon.svg";


const Main = () => {
    return (
        <main>
            <section className="top_banner">
                <button id="prev_btn" type="button">
                    <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                </button>
                <button id="nxt_btn" type="button">
                    <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                </button>
                <div>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="❌"></img>
                </div>
                <div>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1825%2Fb93ecf4e.jpg&w=1060&q=100" alt="❌"></img>
                </div>
                <div>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1826%2F849c1703.jpg&w=1060&q=100" alt="❌"></img>
                </div>
                <div>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100" alt="❌"></img>
                </div>
                <div>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="❌"></img>
                </div>
            </section>
            <section className="section" id="section2">
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
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FL6MZDx02D9I%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLBWRffE-9qsovrfb1xz01ebJeDy3Q&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">디자인 현실적인 고민 무엇이든 물어보세요 | 공부법? 포트폴리오? 좋은 커리어?</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90" alt=""></img>
                                <p>eo</p>
                            </div>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4i7K%2Fimage%2FDSyHRclG2TPHM13oHNcefhrB_Ts&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">커리어 여정, 나에게 맞는 자리 찾기</p>
                            <p className="contents_subtitle">"커리어는 사다리가 아니라 정글짐이다" 이 말은 페이스북 COO인 셰릴 샌드버그 (Sheryl</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90" alt=""></img>
                                <p>백승엽</p>
                            </div>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220517%2F1%2F91648414.jpg&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">돈이 먼저일까요, 행복이 먼저일까요?</p>
                            <p className="contents_subtitle">보상과 맞바꾼 워라밸, 그 안에서 돈과 행복의 우선순위에 대해 고민하는 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
                                <p>한국인성컨설팅&마인드클리닉 노주선</p>
                            </div>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F35388040.jpg&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">나의 커리어는 어디로 가는가</p>
                            <p className="contents_subtitle">커리어를 이대로 쌓아가도 괜찮을지 고민하는 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
                                <p>한국인성컨설팅&마인드클리닉 노주선</p>
                            </div>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F75369770.jpg&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">좋은 동료 But 낮은 연봉과 보상</p>
                            <p className="contents_subtitle">동료는 좋지만 낮은 연봉과 보상 때문에 사표를 품에 넣은 직장인의 실제 사연을 통해 ‘직장생</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
                                <p>한국인성컨설팅&마인드클리닉 노주선</p>
                            </div>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fcryp8dAbsOQ%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLAgh_2LpyVzDZRs7d9g0EgaQFYa0Q&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">네카라쿠배 목표라면 유리한 전략은 이미 정해져있다? | 개발자 특집 3편</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90" alt=""></img>
                                <p>eo</p>
                            </div>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F3%2F00902011.jpg&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">예시 사례를 살펴보는 실제 이력서 작성법 - 백승엽</p>
                            <p className="contents_subtitle">오늘은 실제 예시를 통해 이력서를 작성하는 방법에 대해 알아봅니다.지난 영상에서 이력서가</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
                                <p>원티드랩 백승엽</p>
                            </div>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F64766774.jpg&w=500&q=75" alt="❌"></img>
                            </div>

                            <p className="contents_title">이력서가 무엇인지 살펴보기 - 백승엽</p>
                            <p className="contents_subtitle">이력서는 무엇일까요?기계처럼 반복적으로 작성하고 제출하지만 과연 이렇게 써도 되는 것일</p>
                            <div className="grid_author">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90" alt=""></img>
                                <p>원티드랩 백승엽</p>
                            </div>
                        </a>
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
                        <a href="#none">
                            크리에이터 추천하기
                            <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                        </a>
                    </div>
                </aside>
            </section>

            <section className="section" id="section3">
                <div className="section_wrapper">
                    <div className="section_nav">
                        <button>
                            <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                        </button>
                        <div className="section_title">
                            <h2>3분만에 읽는 Wanted+ 아티클</h2>
                            <div>
                                <a href="#none">
                                    아티클 전체보기
                                    <svg viewBox="0 0 20 20"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <button>
                            <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                        </button>
                    </div>
                    <div className="section_content">
                        <a href="#none">
                            <div className="item_link_img_wrapper" >
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2438%2F9890601e.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_title">CX 팀 조직 구조 설계부터 채용 공고 작성법까지</p>
                            <p className="contents_subtitle">#고객서비스·리테일 #CS/CX #서비스기획</p>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper" >
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2437%2F30d52ee0.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_title">스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?</p>
                            <p className="contents_subtitle">#HR #조직문화 #경영/전략</p>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper" >
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2430%2Fd892e109.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_title">IP 확장 그리고 글로벌 진출로 세계 선구자가 되다</p>
                            <p className="contents_subtitle">#미디어 #콘텐츠 제작 #회사생활</p>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper" >
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_title">리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀</p>
                            <p className="contents_subtitle">#개발 #IT/기술 #취업/이직</p>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section" id="section4">
                <div className="section_wrapper">
                    <div className="section_nav">
                        <button>
                            <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                        </button>
                        <div className="section_title">
                            <h2>직장인을 위한 Wanted+ VOD</h2>
                            <div>
                                <a href="#none">
                                    VOD 전체보기
                                    <svg viewBox="0 0 20 20"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <button>
                            <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                        </button>
                    </div>
                    <div className="section_content">
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211111%2F10%2F24788089.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_subtitle">피플펀드 권순관, 드림어스 제정민</p>
                            <p className="contents_title">신입 개발자의 취업 성공기</p>
                            <p className="contents_subtitle">신입 개발자의 취업 성공기 : Live Talk #50</p>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210713%2F1%2F22621559.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_subtitle">인터비즈 팀장클럽 김진영</p>
                            <p className="contents_title">팀장으로 산다는 건</p>
                            <p className="contents_subtitle">팀장으로 산다는 건 : Live Talk #30</p>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F32385576.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_subtitle">애프터모멘트 박창선</p>
                            <p className="contents_title">터지는 콘텐츠는 이렇게 만듭니다 Part 3 : 위트와 무리수레벨 조절하기 - 박창선</p>
                            <p className="contents_subtitle">터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To</p>
                        </a>
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210618%2F2%2F34753914.jpg&w=800&q=75" alt=""></img>
                            </div>
                            <p className="contents_subtitle">노무법인 예담HR컨설팅 장내석</p>
                            <p className="contents_title">회사를 구하는 인사</p>
                            <p className="contents_subtitle">회사를 구하는 인사</p>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section" id="section5">
                <a href="#none">
                    <div>
                        직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀
                        <svg width="15px" height="15px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                    </div>
                </a>
            </section>
            <section className="section" id="section6">
                <div className="section_wrapper">
                    <div className="section_nav">
                        <button>
                            <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                        </button>
                        <div className="section_title">
                            <h2>커리어 성장을 위한 맞춤 이벤트</h2>
                            <div>
                                <a href="#none">
                                    이벤트 전체보기
                                    <svg viewBox="0 0 20 20"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <button>
                            <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                        </button>
                    </div>
                    <div className="section_content">
                        <a href="#none">
                            <div className="item_link_img_wrapper">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2426%2F1fc340dd.jpg&w=1200&q=100" alt=""></img>
                            </div>
                            <div className="item_stat">
                                <span id="online">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"><path fill="currentColor" d="M5.98.9A5.09 5.09 0 00.32 6.54l1.03-.1a4.07 4.07 0 014.52-4.53L5.98.89zm4.57 4.56l-1.03.1A4.07 4.07 0 015 10.1l-.11 1.03a5.1 5.1 0 005.66-5.66zM5.76 2.94c-.9-.1-1.84.18-2.53.86a3.06 3.06 0 00-.86 2.54l1.02-.11c-.07-.6.12-1.24.57-1.7a2.05 2.05 0 011.7-.57l.1-1.02zM8.5 5.68l-1.04.12a2 2 0 01-2.24 2.24L5.1 9.06a3.06 3.06 0 003.4-3.4zm-2.53-.22c-.3-.3-.8-.3-1.1 0-.3.3-.29.78.02 1.08.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08z"></path></svg>
                                    온라인
                                </span>
                                <span id="networking">
                                    네트워킹
                                </span>
                            </div>
                            <p className="contents_title">스터디살롱 : CS/CX의 실무 꿀팁과 Next Career</p>
                            <p className="contents_subtitle">2022.11.24 (목)</p>
                        </a>
                        <a href="#none">
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
                        </a>
                    </div>
                </div>
            </section>
            <section className="section" id="section7">
                <div className="horizon_wrapper">
                    <div>
                        <div>
                            <svg width="160px" height="30px" viewBox="0 0 160 31"><path d="M0.140625 10.0156L6.11719 29H11.4258L15.5391 16.5547L19.6172 29H24.9609L30.9375 10.0156H25.6289L22.1133 21.8984L18.2461 10.0156H12.7969L8.92969 21.8984L5.41406 10.0156H0.140625ZM46.5469 29H51.6094V10.0156H46.5469V11.9844C45.1758 10.2441 43.1895 9.3125 40.6406 9.3125C35.2969 9.3125 31.4121 13.6016 31.4297 19.5078C31.4121 25.4141 35.2969 29.7031 40.6406 29.7031C43.1895 29.7031 45.1758 28.7891 46.5469 27.0664V29ZM36.4922 19.5078C36.4746 16.2559 38.6016 13.8828 41.5547 13.8828C44.543 13.8828 46.5117 16.0977 46.5469 19.5078C46.5117 22.918 44.543 25.1328 41.5547 25.1328C38.6016 25.1328 36.4746 22.7598 36.4922 19.5078ZM60.0469 29V17.75C60.082 15.7285 61.6289 14.0234 63.7383 14.0234C66.041 14.0234 67.2188 15.5527 67.2188 18.1719V29H72.2812V16.7656C72.2812 12.125 69.6445 9.3125 65.5312 9.3125C63.2285 9.3125 61.3125 10.4023 60.0469 12.1953V10.0156H54.9844V29H60.0469ZM86.6602 10.0156H82.8633V3.72266L77.8008 5.76172V10.0156H74.3906V14.5156H77.8008V22.7422C77.8008 28.1035 81.3867 30.2305 86.6602 29.1758V24.5352C83.7949 25.0801 82.8633 24.1836 82.8633 22.7422V14.5156H86.6602V10.0156ZM89.1211 19.5078C89.1211 25.4141 93.2871 29.7031 99 29.7031C103.078 29.7031 106.418 27.5762 108.035 23.832L103.148 22.6367C102.34 24.2012 100.881 25.1328 99 25.1328C96.4863 25.1328 94.7285 23.4805 94.2891 20.8438H108.809C108.844 20.4043 108.879 19.9648 108.879 19.5078C108.861 13.6016 104.713 9.3125 99 9.3125C93.2871 9.3125 89.1211 13.6016 89.1211 19.5078ZM94.5176 17.3281C94.834 15.377 96.4688 13.8828 99 13.8828C101.496 13.8828 103.113 15.377 103.465 17.3281H94.5176ZM130.746 29V0.804688L125.684 2.84375V11.9844C124.312 10.2441 122.326 9.3125 119.777 9.3125C114.434 9.3125 110.549 13.6016 110.566 19.5078C110.549 25.4141 114.434 29.7031 119.777 29.7031C122.326 29.7031 124.312 28.7891 125.684 27.0664V29H130.746ZM115.629 19.5078C115.611 16.2559 117.738 13.8828 120.691 13.8828C123.68 13.8828 125.648 16.0977 125.684 19.5078C125.648 22.918 123.68 25.1328 120.691 25.1328C117.738 25.1328 115.611 22.7598 115.629 19.5078ZM148.148 16.4141H141.363V20.3164H148.148V27.3828H152.191V20.3164H159.012V16.4141H152.191V9.41797H148.148V16.4141Z" fill="#000000"></path></svg>
                            <span>구독해야 하는 이유</span>
                        </div>
                        <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                        <a href="https://www.wanted.co.kr/events/wantedplus">
                            <span>
                                <CheckIcon />
                                첫 구독 0원 신청하기
                            </span>
                        </a>
                    </div>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90" alt=""></img>
                    </div>
                </div>
            </section>
            <section className="section" id="section8">
                <div className="section_wrapper">
                    <div className="section_title">
                        <h2>채용 정보를 찾고 계셨나요?</h2>
                    </div>
                    <div className="horizon_wrapper">
                        <div>
                            <a href="./wdlist/wdlist.html">
                                <div>
                                    <svg width="32px" height="32px" viewBox="0 0 32 32"><path d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"></path></svg>
                                </div>
                                <div>
                                    <span>
                                        채용공고
                                        <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#none">
                                <div>
                                    <svg width="32px" height="32px" viewBox="0 0 32 32"><path d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"></path></svg>
                                </div>
                                <div>
                                    <span>
                                        내 프로필
                                        <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#none">
                                <div>
                                    <svg width="32px" height="32px" viewBox="0 0 32 32"><path d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"></path></svg>
                                </div>
                                <div>
                                    <span>
                                        매치업
                                        <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#none">
                                <div>
                                    <svg width="32px" height="32px" viewBox="0 0 32 32"><path d="M10.667 21.667a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2l-13.805.001a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138a3.67 3.67 0 0 1 3.529-2.667zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333zm10.666-11.334A3.67 3.67 0 0 1 24.862 15H28a1 1 0 0 1 0 2h-3.138a3.67 3.67 0 0 1-7.057 0H4a1 1 0 0 1 0-2h13.805a3.67 3.67 0 0 1 3.528-2.667zm0 2a1.668 1.668 0 0 0 0 3.334 1.668 1.668 0 0 0 0-3.334zM10.667 3a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2H14.195a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138A3.67 3.67 0 0 1 10.667 3zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333z"></path></svg>
                                </div>
                                <div>
                                    <span>
                                        직군별 연봉
                                        <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
