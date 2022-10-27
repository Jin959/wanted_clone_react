import './css/MainSection5.css';
import {Link} from 'react-router-dom';

const MainSection5 = () => {
  return (
    <section className="Section5 section">
      <Link to="#none">
        <div>
          직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀
          <svg width="15px" height="15px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
        </div>
      </Link>
    </section>
  )
}

export default MainSection5