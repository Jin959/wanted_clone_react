import './css/recruite-list_style.css';
import { ReactComponent as BookMarkIcon } from "./assets/BookMarkIcon.svg";
import { Link } from 'react-router-dom';
import GridItem from './GridItem';
import gridData from './json/job_data.json';
import TagFilter from './TagFilter';

const RecruiteList = () => {
  return (
    <div className='RecruiteList'>
      <div className="RecruiteList-category">
        <div className="category_wrapper">
          <div>
            <button className="RecruiteList-category_first_btn">
              <span>개발</span>
              <span><svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg></span>
            </button>
          </div>
          <div>|</div>
          <div>
            <button className="RecruiteList-category_second_btn">
              <span>개발 전체</span>
              <span><svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg></span>
            </button>
          </div>
        </div>
      </div>

      <TagFilter />

      <main>
        <div className='RecruteList-main_wrapper'>
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

          <div className="RecruiteList-flex_link">
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