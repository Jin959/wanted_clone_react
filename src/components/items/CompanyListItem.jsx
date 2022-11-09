import { Link } from "react-router-dom";
import './css/company_list_item.css';

const CompanyListItem = (props) => {
  return (
    <Link to='#none' className="CompanyListItem"
      style={{
        width: props.styleWidth,
        margin: props.styleMargin
      }}
    >
      <div className="CompanyListItem-item">
        <div className="logo_wrapper">
          <img src={props.logoLink} alt="" />
        </div>
        <div className="company_info">
          <h5>{props.company}</h5>
          <h6>{props.biz}</h6>
        </div>
      </div>
      <button className="follow_btn">
        <div>팔로우</div>
      </button>
    </Link>
  )
}

CompanyListItem.defaultProps = {
  id: "404",
  logoLink: "https://static.wanted.co.kr/images/img_company_empty_new.png",
  company: "한수인력사무소",
  biz: ["용역", "일수"]
}

export default CompanyListItem