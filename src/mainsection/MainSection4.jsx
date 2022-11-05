import './css/main_section4.css';
import {Link} from 'react-router-dom';

const MainSection4 = () => {
  return (
    <section className="Section4 section">
      <div className="section_wrapper">
        <div className="section_nav">
          <button>
            <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
          </button>
          <div className="section_title">
            <h2>직장인을 위한 Wanted+ VOD</h2>
            <div>
              <Link to="#none">
                VOD 전체보기
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
              <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211111%2F10%2F24788089.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_subtitle">피플펀드 권순관, 드림어스 제정민</p>
            <p className="contents_title">신입 개발자의 취업 성공기</p>
            <p className="contents_subtitle">신입 개발자의 취업 성공기 : Live Talk #50</p>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210713%2F1%2F22621559.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_subtitle">인터비즈 팀장클럽 김진영</p>
            <p className="contents_title">팀장으로 산다는 건</p>
            <p className="contents_subtitle">팀장으로 산다는 건 : Live Talk #30</p>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F32385576.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_subtitle">애프터모멘트 박창선</p>
            <p className="contents_title">터지는 콘텐츠는 이렇게 만듭니다 Part 3 : 위트와 무리수레벨 조절하기 - 박창선</p>
            <p className="contents_subtitle">터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To</p>
          </Link>
          <Link to="#none">
            <div className="item_link_img_wrapper">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210618%2F2%2F34753914.jpg&w=800&q=75" alt=""></img>
            </div>
            <p className="contents_subtitle">노무법인 예담HR컨설팅 장내석</p>
            <p className="contents_title">회사를 구하는 인사</p>
            <p className="contents_subtitle">회사를 구하는 인사</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MainSection4