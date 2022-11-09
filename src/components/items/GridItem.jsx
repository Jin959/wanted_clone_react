import './css/grid_item.css'
import { Link } from "react-router-dom"
import parseMoney from '../../module/parseMoney.js'

const GridItem = (props) => {
  return (
    <Link to={`/wd/${props.id}`} className="GridItem">
      <div className="grid_img_wrapper">
        <img src={props.imgLink} alt="❌" />
      </div>
      <div className="grid_body">
        <div className='jobname'>{props.jobName}</div>
        <div className='company'>{props.company}</div>
        {
          (props.responseFlag) && (
          <div className="response">
            <span>응답률 매우 높음</span>
          </div>
          )
        }
        <div className='location'>
          {props.location.city}.{props.location.contry}
        </div>
        <div className='bonus'>
          채용보상금 {parseMoney(props.signingBonus)}원
        </div>
      </div>
    </Link>
  )
}

GridItem.defaultProps = {
  id: "404",
  imgLink: "https://static.wanted.co.kr/images/rubbercone.png",
  jobName: "잡부",
  company: "정승네트워크",
  responseFlag: false,
  location: {contry : "조선", city: "한양"},
  signingBonus: 10000
}

export default GridItem