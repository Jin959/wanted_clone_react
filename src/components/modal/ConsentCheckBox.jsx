import './css/consent_check_box.css'
import { useState, useCallback } from 'react';
import { Link } from "react-router-dom"

const consentList = [
  { id: 0, class: "modal_agree_age", details: false, consent: "만 14세 이상입니다. (필수)"},
  { id: 1, class: "modal_agree_oneid", details: true, consent: "oneID 이용약관 동의(필수)"},
  { id: 2, class: "modal_agree_collect", details: true, consent: "개인정보 및 수집 이용 동의(필수)"}
]

const ConsentCheckBox = () => {
  const [checkedList, setCheckedList] = useState([]);

  const onCheckedAll = useCallback( e => {
    if (e.target.checked) {
      setCheckedList([...consentList]);
    } else {
      setCheckedList([]);
    }
    console.log(checkedList);
  }, [consentList])

  const onCheckedEach = useCallback( (e, checkedEle) => {
    if (e.target.checked) {
      setCheckedList([...checkedList, checkedEle]);
    } else {
      setCheckedList(checkedList.filter( ele => ele!==checkedEle));
    }
    console.log(checkedList)
  }, [checkedList])

  return (
    <div className="ConsentCheckBox">
      <div className="modal_agree_all">
        <div>
          <input type="checkbox" name="modal_agree_all" value="modal_agree_all"
            onChange={onCheckedAll}
            checked={checkedList.length === 3}
          />
          <p>전체동의</p>
        </div>
      </div>
      <hr />
      {
        consentList.map( ele => {
          return (
            <div className={ele.class} key = {ele.id}>
              <div>
                <input type="checkbox" name={ele.class} value={ele.class}
                  onChange={ e => {
                    onCheckedEach(e, ele);
                  }}
                  checked={checkedList.includes(ele) ? true : false}
                />
                <p>{ele.consent}</p>
              </div>
              {
                ele.details &&
                <Link to="/#none">자세히</Link>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default ConsentCheckBox