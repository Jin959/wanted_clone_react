import './css/recruite_style.css';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridItem from './GridItem';
import gridData from './json/grid_data.json'

const Recruite = () => {
  const RecruiteAside = useRef();
  const RecruiteArticle = useRef();

  const fixAside = () => {
    RecruiteAside.current.style.position = 'fixed';
    RecruiteAside.current.style.top = '70px';
    RecruiteAside.current.style.bottom = null;
    RecruiteAside.current.style.right = 'calc((100% - 1060px)/2)';
  };

  const absoluteAside = () => {
    RecruiteAside.current.style.position = 'absolute';
    RecruiteAside.current.style.top = null;
    RecruiteAside.current.style.bottom = '0px';
    RecruiteAside.current.style.right = '0px';
  }

  const asidePositionHandler = () => {
    const boundary = RecruiteArticle.current.getBoundingClientRect().bottom + window.scrollY;
    const y = window.scrollY;
    console.log('bnd : ', boundary);
    console.log('y : ', window.scrollY);
    if (y >= boundary * 0.9) absoluteAside();
    else fixAside();
  }

  useEffect(() => {
    fixAside();
    window.addEventListener('scroll', asidePositionHandler);
  }, [])


  return (
    <div className="Recruite">
      <div className="article_wrapper">
        <div className="article_section" ref={RecruiteArticle}>
          <div className="img_frame">
            <button>
              <svg viewBox="0 0 18 18">
                <path
                  d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z">
                </path>
              </svg>
            </button>
            <button>
              <svg viewBox="0 0 18 18">
                <path
                  d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                </path>
              </svg>
            </button>
            <div id="article_img">
              <div className="img_wrapper">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&w=1000&q=75"
                  alt="" />
              </div>
              <div className="img_wrapper">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75"
                  alt="" />
              </div>
              <div className="img_wrapper">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75"
                  alt="" />
              </div>
            </div>
          </div>
          <div id="article_header">
            <h2>웹 프론트엔드 개발자(React)</h2>
            <div className="job_info">
              <span>블루비커</span>
              <span>응답률 높음</span>
              <span>|</span>
              <span>서울ㆍ한국</span>
            </div>
            <div className="tags">
              <ul>
                <li><Link to="/tag_search?tag=%EC%9D%B8%EC%9B%90%EA%B8%89%EC%84%B1%EC%9E%A5" className=""
                  aria-label="">#인원급성장</Link></li>
                <li><Link to="/tag_search?tag=50%EB%AA%85%EC%9D%B4%ED%95%98" className="" aria-label="">#50명이하</Link></li>
                <li><Link to="/tag_search?tag=%EC%84%A4%EB%A6%BD3%EB%85%84%EC%9D%B4%ED%95%98" className=""
                  aria-label="">#설립3년이하</Link></li>
                <li><Link to="/tag_search?tag=%EC%8A%A4%ED%86%A1%EC%98%B5%EC%85%98" className="" aria-label="">#스톡옵션</Link></li>
                <li><Link to="/tag_search?tag=%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85" className="" aria-label="">#스타트업</Link></li>
                <li><Link to="/tag_search?tag=%EC%9B%8C%ED%81%AC%EC%83%B5" className="" aria-label="">#워크샵</Link></li>
                <li><Link to="/tag_search?tag=%EA%B0%84%EC%8B%9D" className="" aria-label="">#간식</Link></li>
                <li><Link to="/tag_search?tag=%EA%B1%B4%EA%B0%95%EA%B2%80%EC%A7%84" className="" aria-label="">#건강검진</Link></li>
                <li><Link to="/tag_search?tag=IT%2C%20%EC%BB%A8%ED%85%90%EC%B8%A0" className="" aria-label="">#IT, 컨텐츠</Link></li>
              </ul>
            </div>
          </div>
          <div id="article_explain">
            <p>
              <span>
                ＜서비스 소개＞<br /><br />
                ✓ Medmap – 메디컬 지도를 펼치세요!<br />
                메드맵은 의료진과 환자간 커뮤니케이션을 도와주는 솔루션입니다.<br /><br />
                【블루비커는】<br />
                블루비커는 3D 메디컬 콘텐츠 플랫폼 ‘Medmap’을 운영하고 있는 스타트업입니다.<br />
                환자와 의료진의 효과적인 커뮤니케이션의 새 기준을 제시하며 메디컬 커뮤니케이션 솔루션을 발전시켜 나가고 있습니다.<br />
                Medmap은 정확하고 다양한 3D 메디컬 콘텐츠를 제공하여 시술 원리와 과정을 쉽게 설명할 수 있도록 도와줍니다. 또한 환자의 이해를 돕고 신뢰도를 향상 시키며 재방문율을 높일 수
                있습니다.<br />
                블루비커는 자유롭고 수평적인 분위기에서 각 분야 전문가인 동료들과 최대한의 능력을 발휘하며 함께하고 있습니다. 원하는 시간과 장소, 언제 어디서나, 블루비커와 함께 할 수 있습니다.<br />
                <br />
                블루비커는 의료 분야 커뮤니케이션 서비스의 신규 개발과 고도화를 진행하고 있습니다. 다양한 최신 기술을 시도하고 접하실 수 있습니다. 저희 회사에 관심이 있다면 언제든지 귀한 능력을 받아들일
                준비가 되어있습니다. 많은 지원 부탁드립니다.<br />
                <br />
                【빠르게 성장하고 있습니다】<br />
                • 보건산업진흥원 혁신창업 멤버 선정 - 2019<br />
                • 디캠프 - 디데이 출전 - 2019<br />
                • 정주영 창업 경진 대회 우수상 - 2020<br />
                • 마이크로소프트 스타트업 프로그램 선발 -2020<br />
                • 소풍벤처스, 블루포인트 파트너스 시드 투자유치 - 2019/2020<br />
                • 청년창업사관학교 선발 서울 - 2021<br />
                • TIPS 프로그램 선정 - 2021<br />
                • 고려대학교구로병원 개방형 실험실 실증사업 선정 - 2022<br />
                • 리벤처스 Pre-A 투자유치 - 2022<br />
                <br />
                【언론에서 소개된 블루비커】<br />
                • 블루비커, '세계보건의 날' 맞아 메디컬 일러스트 플랫폼 공식 론칭(2020.04.16)<br />
              </span>
              <Link to="http://kr.aving.net/news/articleView.html?idxno=1564478" rel="noopener noreferrer"
                target="_blank">http://kr.aving.net/news/articleView.html?idxno=1564478</Link>
              <span><br />
                • 아이쿱-블루비커, 3D 환자 교육 콘텐츠 제휴 (2020.08.25)<br />
              </span>
              <Link to="https://www.khanews.com/news/articleView.html?idxno=204038" rel="noopener noreferrer"
                target="_blank">https://www.khanews.com/news/articleView.html?idxno=204038</Link>
              <span><br />
                • 메디컬 커뮤니케이션 스타트업 ‘블루비커’, 마이크로소프트 애드인 공식 출시(2021.02.25)<br />
              </span>
              <Link to="https://platum.kr/archives/158548" rel="noopener noreferrer"
                target="_blank">https://platum.kr/archives/158548</Link>
              <span></span>
            </p>
            <h6>주요업무</h6>
            <p>
              <span>✓ 블루비커와 함께 한국을 넘어 글로벌 무대에서도 메디컬 커뮤니케이션을 혁신 할 "웹 프론트 개발자"를 모십니다!<br />
                <br />
                【주요업무】<br />
                • React 기반 웹 프론트엔드 개발<br />
                • 서비스 코드 최적화 및 성능 개선<br />
                • 운영 서비스의 유지보수 및 신규 서비스 론칭<br />
                • 주니어 개발자와 협업<br />
                <br />
                [개발환경]<br />
                • 사용언어: React.js, Next.js, Redux<br />
                • 개발환경 및 도구: Github, Postman, Azure Cloud
              </span>
            </p>
            <h6>자격요건</h6>
            <p>
              <span>【자격요건】<br />
                • 웹 개발경력이 4년 이상이신 분<br />
                • React 전문성을 보유하신 분<br />
                • Modern Web, JavaScript, Typescript에 대한 깊은 이해가 있으신 분<br />
                • Github을 이용한 협업이 가능하신 분<br />
                • 다른 팀과 협업 및 커뮤니케이션에 능숙하신 분<br />
                • 성장하는 스타트업에서 함께 의미 있는 결과를 만들어 나가고 싶으신 분</span>
            </p>
            <h6>우대사항</h6>
            <p>
              <span>【우대사항】<br />
                • 요구사항을 파악하여 데이터 모델과 설계가 가능하신 분<br />
                • 기획, 디자인, 백엔드와 능동적인 협업 및 커뮤니케이션이 가능하신 분<br />
                • 주니어 개발자를 리딩하고 멘토링 가능하신 분
              </span>
            </p>
            <h6>혜택 및 복지</h6>
            <p>
              <span>【복지 및 혜택】<br />
                <br />
                • 여름 방학, 겨울 방학<br />
                ▶여름방학 3일, 겨울방학 3일 연차에 따른 휴가비를 추가 지원합니다.<br />
                <br />
                • 자율출퇴근제<br />
                ▶자율적인 출퇴근 시간 및 원격근무가 가능 합니다.<br />
                <br />
                • 자기계발비 지원<br />
                ▶세미나, 워크샵, 컨퍼런스, 업무 관련 도서구입비 등 팀원의 성장을 응원합니다.<br />
                <br />
                • 건강검진비 지원<br />
                ▶ 연 1회 종합건강검진 비용을 지원해 드립니다.<br />
                <br />
                • 최고 사양의 개인장비 지원<br />
                ▶ iMac, Macbook Pro, 데스크탑, 노트북 등 원하는 개인별 맞춤 디바이스 제공하여 최고의 업무환경을 제공해 드립니다.<br />
                <br />
                •편리한 교통<br />
                ▶ 1,4호선 서울역과 연결된 오피스 빌딩<br />
                <br />
                •공유오피스<br />
                ▶커뮤니티 매니저가 상시 관리하는 최신 시설의 오피스에서 근무합니다.<br />
                (에스프레소 머신, Tea, 간식 무제한 제공)<br />
                <br />
                •청년내일채움공제<br />
                ▶ 지원 대상인 모든 분들께 청년내일채움공제 가입<br />
                <br />
                • 경조사비 지원<br />
                ▶ 구성원 경조사 발생 시 근조화 및 경조비 지원해 드립니다.<br />
                <br />
                • 자유로운 연차/반차 사용<br />
                ▶ 업무 스케쥴만 괜찮다면 언제든지 사용 가능합니다.<br />
                <br />
                • 스톡옵션 부여<br />
                ▶ 기여한 만큼 인정받아요. 성과에 따라 스톡옵션 부여해 드립니다.<br />
                <br />
                • 리프레쉬 휴가<br />
                ▶3년, 5년, 7년 근속 시 리프레쉬 휴가를 제공합니다. <br />
                <br />
                <br />
                ＜블루비커 개발팀 소개＞<br />
                <br />
                ✓ 저희 개발팀은 팀원 모두 새로운 기술과 방법을 도입하는데 주저하지 않고, 신기술에 대한 스터디와 공유를 즐기며 일하고 있습니다. 합류하시면 자율성과 소통을 바탕으로 좋은 동료들과 함께
                일하는 기쁨을 느끼실 수 있을 것이라 확신합니다.<br />
                현재 개발팀은 백엔드, 프론트엔드, 그래픽스, Hololens 2, 네이티브 앱, 클라우드, 데이터베이스 파트로 구성되어 있습니다. 개발 팀은 내부 기획 파트, 디자인 파트, 그래픽스,
                아티스트 파트와 협업 하여 바이오 메디컬 분야의 서비스 개발을 끊임없이 진행하고 있습니다.<br />
                <br />
                【블루비커 기술 스택】<br />
                • React, WebGL, Unity, Spring Boot, .Net Core, Kotlin, Swift, Stored Procedure : 개발팀에서 서비스에 적용하고 있는 기술
                스택입니다.<br />
                <br />
                • MS Azure Cloud, Netlify : 우리는 마이크로소프트의 Azure Cloud 의 기술들을 서비스에 활용하고 있습니다. PaaS App 및 Serverless
                Functions 와 Static Web App 을 이용한 웹앱, Blob Storage 및 CDN 을 이용한 대용량 스토리지, Traffic Manager 와 FrontDoor를 이용한
                분산처리, Notification Hub 와 PubSub 을 이용한 소켓통신 등을 사용합니다. 부하분산 처리가 필요하지 않은 단순한 웹 앱들은 Netlify 클라우드 서비스를
                사용합니다.<br />
                <br />
                • 그래픽스 : 자체적으로 개발한 국내 최고 수준의 WebGL 뷰어와, 마이크로소프트 Hololens2 의 서비스들을 개발합니다. Blender를 이용해서 모델링한 3D 에셋들을 활용하여
                웹과 Hololens2에서 사용하기 위한 최적화를 진행하여 개발하고 있습니다.<br />
                <br />
                【블루비커 개발 문화】<br />
                • CI/CD 파이프라인을 이용하며, 중요 서비스는 모두 스테이징 서버와 프로덕션 서버가 분리되어 있습니다.<br />
                • 초기 스타트업 특성상 다양한 아이디어를 빠르고 린하게 적용해야 하기 때문에 효율적인 개발 문화를 추구합니다.<br />
                • 개발 스택의 결정과 프로젝트의 설계는 모든 개발 팀원들의 토론을 통해 결정합니다.<br />
                • 코드 리뷰는 모든 개발 팀원들이 참가하여 본인이 개발하는 분야가 아닐지라도 함께 논의하고 분석합니다.<br />
                • 우리는 최신 기술 스택의 도입에 두려움을 가지지 않습니다. 새로운 기술에 대해 조사하고, 비교하고, 적용하는 과정을 통해 개발자는 한 단계 더 성장할 수 있다고 생각합니다.<br />
                • 주기적으로 일정 시간을 할애하여 외부 온/오프라인 교육을 받을 수 있도록 회사 차원에서 지원합니다. 교육을 통해서 서비스에 접목하고자 하는 아이디어가 떠오른다면 토론을 통해서 결정하고
                진행합니다.<br />
                • 명확한 Task를 설정한 뒤 업무를 진행합니다. 상황에 따른 우선순위를 정하고 Teams Planner를 기반으로 1주 혹은 2주 단위의 느슨한 스프린트 방식으로 개발하고
                있습니다.<br />
                • 개발자들은 중요한 기획안에 자신들의 아이디어를 제안하고, 기술적인 의견을 공유합니다.<br />
                <br />
                【주요 협업 툴】<br />
                • 모든 소스코드들은 깃허브를 통해 관리되고, 통신 협업을 위해서 Postman 을 사용하고 있으며, 모든 기술 문서는 Notion으로 정리합니다.<br />
                • 전사적으로 마이크로소프트 Teams, Notion, Microsoft 365 서비스와 같은 SaaS 서비스를 적극 사용해서 구성원 개인 분들의 업무 효율을 높이는데 도움 드리고
                있습니다.<br />
                • 모든 팀들은 Teams Planner를 통해 업무 및 일정 관리를 하고 있습니다.<br />
                • 프로덕트팀, 서비스개발팀, 마케팅팀과의 디자인 관련 업무는 Figma를 통해 협업하고 있습니다.<br />
                <br />
                <br />
                ＜채용절차 및 유의사항＞<br />
                <br />
                ✓ 채용절차는 이렇게 진행됩니다.<br />
                <br />
                1. 서류전형<br />
                • 블루비커는 자유양식의 지원서를 받고 있습니다. 본인의 강점이 잘 드러나는 다양한 정보를 알려주세요.<br />
                • 지원 시 본인의 이력서 또는 포트폴리오와 함께, 포지션과 유관하며 직접 작성한 “깃허브 주소” 혹은 “소스코드”를 첨부 및 제출해 주시기 바랍니다.<br />
                • 직접 운영 중인 개발 블로그나 서비스가 있다면 함께 보내주시면 적극 검토하겠습니다!<br />
                • 만약 제출이 어려운 경우, 개발팀에서 전달해드리는 과제를 수행해주시면 됩니다.<br />
                <br />
                2. 1차 기술 인터뷰(온라인)<br />
                • 개발팀과 진행하는 직무 관련 인터뷰로, 지원서 상의 경력과 소스코드 및 과제 내용을 중심으로 진행됩니다.<br />
                • 1시간 가량 온라인 면접으로 진행됩니다.<br />
                <br />
                3. 2차 임원 인터뷰(오프라인)<br />
                • 다른 직군의 팀원 및 경영진과 서로에 대해 조금 더 알아가는 시간입니다.<br />
                • 서로 추구하는 가치관과 생각 등에 대해 이야기하는 시간으로 약 1시간 가량 진행됩니다.<br />
                <br />
                4. 최종합격<br />
                • 처우에 대해 최종적으로 협의 후, 입사 일자를 결정합니다.<br />
                <br />
                ✓ 블루비커에 관심을 갖고 지원해 주신 모든 분들의 서류를 정말 감사한 마음으로 읽어 보고 있습니다. 채용의 모든 전형에서 가능한 빠른 피드백을 드리고자 노력하겠습니다.
              </span>
            </p>
            <h6 id="skillset_title">기술스택 ・ 툴</h6>
            <div id="skillset_container">
              <div className="skill_item">Git</div>
              <div className="skill_item">Azure</div>
              <div className="skill_item">React</div>
              <div className="skill_item">JavaScript</div>
              <div className="skill_item">TypeScript</div>
              <div className="skill_item">Redux</div>
              <div className="skill_item">Next.js</div>
            </div>
          </div>

          <div id="article_company"></div>
          <div id="article_warning"></div>
        </div>
        <div className="aside_section" ref={RecruiteAside}>
          <h3>채용보상금</h3>
          <div className="horizontal_wrapper">
            <div>
              <h4>추천인</h4>
              <div>500,000원</div>
            </div>
            <div>
              <h4>지원자</h4>
              <div>500,000원</div>
            </div>
            <button>
              <svg xmlns="https://www.w3.org/2000/svg" xlink="https://www.w3.org/1999/xlink" width="20" height="20"
                viewBox="0 0 19 19">
                <defs>
                  <path id="shareIcon"
                    d="M5.336 7.75c-.551-.703-1.418-1.136-2.365-1.136C1.337 6.614 0 7.898 0 9.494c0 1.596 1.336 2.879 2.971 2.879.93 0 1.785-.419 2.338-1.102l8.495 4.482c.128.068.276.092.42.068l.025-.004c.213-.036.395-.173.489-.367.101-.21.249-.393.437-.54.673-.526 1.643-.407 2.168.266.526.673.407 1.643-.265 2.167-.673.526-1.643.407-2.168-.266-.226-.29-.644-.34-.933-.115-.29.226-.34.644-.115.933.977 1.251 2.783 1.473 4.034.496 1.25-.976 1.472-2.782.495-4.033-.977-1.251-2.783-1.473-4.033-.496-.169.132-.32.28-.454.442L5.478 9.858c-.322-.241-.816-.145-1 .255-.259.558-.844.93-1.507.93-.913 0-1.642-.7-1.642-1.55 0-.849.73-1.55 1.642-1.55.636 0 1.2.343 1.473.863.107.368.526.64.954.413l9.026-4.762.118-.079.029-.024c.233-.197.303-.527.169-.8-.104-.212-.158-.442-.158-.68 0-.853.692-1.545 1.544-1.545.853 0 1.545.692 1.545 1.544 0 .854-.691 1.545-1.545 1.545-.367 0-.664.297-.664.664 0 .367.297.665.664.665C17.714 5.747 19 4.46 19 2.873 19 1.287 17.713 0 16.126 0c-1.586 0-2.873 1.287-2.873 2.873 0 .224.026.445.076.66L5.336 7.748z">
                  </path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use fill="#36F" href="#shareIcon"></use>
                </g>
              </svg>
            </button>
          </div>
          <div className="bookmark_btn">
            <button>
              <svg width="13" height="17" viewBox="0 0 13 17" style={{ color: 'rgb(51, 102, 255)' }}>
                <defs>
                  <path id="bookmarkIconLine"
                    d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z">
                  </path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use fill="currentColor" href="#bookmarkIconLine"></use>
                </g>
              </svg>
              <span>북마크하기</span>
            </button>
          </div>
          <div className="apply_btn">
            <button>
              지원하기
            </button>
          </div>
          <div className="reaction">
            <button className="likey-btn">
              <i className="icon-likey"></i>
              <span>9</span>
            </button>
          </div>
        </div>
      </div>


      <h5 className="grid_title">이 포지션을 찾고 계셨나요?</h5>
      <div className="grid_container">
        {
          gridData.jobs.map( ele => {
            return <GridItem
              key={ele.id}
              id={ele.id}
              imgLink={ele.imgLink}
              jobName={ele.jobName}
              company={ele.company}
              responseFlag={ele.responseFlag}
              location={ele.location}
              signingBonus={ele.signingBonus}
            />
          })
        }
      </div>
    </div>
  )
}

export default Recruite