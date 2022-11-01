import './css/recruite-list_style.css';
import { ReactComponent as BookMarkIcon } from "./assets/BookMarkIcon.svg";
import { Link } from 'react-router-dom';
import GridItem from './GridItem';
import gridData from './json/grid_data.json'

const RecruiteList = () => {
  return (
    <div className='RecruiteList'>
      <div className="RecruiteList-category">
        <div className="horizontal_wrapper">
          <div>
            <button className="RecruiteList-category_first">
              <span>개발</span>
              <span><svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg></span>
            </button>
          </div>
          <div>|</div>
          <div>
            <button className="RecruiteList-category_second">
              <span>개발 전체</span>
              <span><svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg></span>
            </button>
          </div>
        </div>
      </div>
      <header>
        <div className="vertical_wrapper">
          <div className="horizontal_wrapper">
            <div>
              <button>
                <div>지역</div>
                <div>한국</div>
              </button>
              <button>
                <div>경력</div>
                <div>전체</div>
                <div>
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                </div>
              </button>
              <button>
                <div>기술스택</div>
                <div>
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                </div>
              </button>
            </div>
            <div>
              <button>
                <div>응답률순</div>
                <div>
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                </div>
              </button>
            </div>
          </div>
          <hr />
          {/* slick slider, slick list, slick track */}
          <div className='horizontal_scroll_wrapper'>
            <div className="scroll_container">
              <button>
                <span>연봉이 최고의 복지</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>재택근무</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>인간관계</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>퇴사율10%이하</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>급성장중</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>병역틀례</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>50인 이하</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>50인 이상</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>업력 5년 이상</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>유연근무</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
              <button>
                <span>자유로운 휴가</span>
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
              </button>
            </div>
            <button className="scroll_prev_btn">
              <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
            </button>
            <button className="scroll_nxt_btn">
              <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="vertical_wrapper">
          <div className="RecruiteList-main_title">
            <div>
              <BookMarkIcon />
              북마크 모아보기
              <svg width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path></svg>
            </div>
            <div>
              적극 채용 중인 회사
            </div>
          </div>
          <div className="RecruiteList-flex_link horizontal_wrapper">
            <Link to="#none">
              <div className="flex_img_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23165%2Fivihugmapkafh5ao__400_400.jpg&w=400&q=75" alt="❌" />
              </div>
              <div className="logo_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.620261a9.jpg&w=100&q=75" alt="" />
              </div>
              <div className="flex_body">
                <h4>더블유클럽</h4>
                <h5>15개 포지션</h5>
              </div>
            </Link>
            <Link to="#none">
              <div className="flex_img_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23269%2F3k7p8yrpqooa4res__400_400.jpg&w=400&q=75" alt="❌" />
              </div>
              <div className="logo_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.6f081094.png&w=100&q=75" alt="" />
              </div>
              <div className="flex_body">
                <h4>모아시스</h4>
                <h5>2개 포지션</h5>
              </div>
            </Link>
            <Link to="#none">
              <div className="flex_img_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F32747%2Ferdpss0nwsb3oqzx__400_400.jpg&w=400&q=75" alt="❌" />
              </div>
              <div className="logo_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.3b2f0836.jpg&w=100&q=75" alt="" />
              </div>
              <div className="flex_body">
                <h4>휴이노에임</h4>
                <h5>7개 포지션</h5>
              </div>
            </Link>
            <Link to="#none">
              <div className="flex_img_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1355%2F16906_2_0.__400_400.jpg&w=400&q=75" alt="❌" />
              </div>
              <div className="logo_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5_01c06ee3-c3ec-4c81-8f3f-ab7418f1d75a.jpg&w=100&q=75" alt="" />
              </div>
              <div className="flex_body">
                <h4>탭조이코리아(Tapjoy)</h4>
                <h5>8개 포지션</h5>
              </div>
            </Link>
            <Link to="#none">
              <div className="flex_img_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F34395%2Fyybet3hslji7eetx__400_400.jpg&w=400&q=75" alt="❌" />
              </div>
              <div className="logo_wrapper">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.0b63b47f.jpg&w=100&q=75" alt="" />
              </div>
              <div className="flex_body">
                <h4>에스비솔루션</h4>
                <h5>1개 포지션</h5>
              </div>
            </Link>
          </div>
          <div className="grid_container">
            {
              gridData.jobs.map((ele) => {
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
      </main>
    </div>
  )
}

export default RecruiteList