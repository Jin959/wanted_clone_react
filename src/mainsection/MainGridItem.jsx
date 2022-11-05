import './css/main_grid_item.css'
import { Link } from "react-router-dom";

const MainGridItem = (props) => {    
  return (    
    <Link to={`/${props.id}`} className='MainGridItem'>
      <div className="item_link_img_wrapper">
        <img src={props.thumnailLink} alt=""></img>
      </div>
      <p className="contents_title">{props.title}</p>
      {
        (props.subtitle === undefined) && (
          <p className="contents_subtitle">
            {props.subtilte}
          </p>
        )
      }
      <div className="grid_author">
        <img src={props.logoLink} alt=""></img>
        <p>{props.author}</p>
      </div>
    </Link>
  )
} 

MainGridItem.defaultProps = {
  id: "404",
  thumnailLink: "https://static.wanted.co.kr/images/rubbercone.png",
  title: "더미 제목",
  logoLink: "https://static.wanted.co.kr/images/rubbercone.png",
  author: "더미 author"
}

export default MainGridItem