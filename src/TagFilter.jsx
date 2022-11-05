import './css/tag_filter_style.css';
import TagFilterSliderItem from './TagFilterSliderItem';
import TagFilterData from './json/tag_filter_data.json'
import chooseItemColor from './jsmodule/chooseItemColor'

const TagFilter = () => {

  return (
    <div className='TagFilter'>
      <div className="TagFilter-wrapper">

        <div className="TagFilter-btn_wrapper">
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

        <div className='TagFilter-slider_wrapper'>
          <div className="scroll_container">
            {
              TagFilterData.tags.map(ele => {
                return <TagFilterSliderItem
                  key={ele.id}
                  color={chooseItemColor()}
                  tag={ele.tag}
                  imgLink={ele.imgLink}
                />
              })
            }
          </div>
          <button className="scroll_prev_btn">
            <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
          </button>
          <button className="scroll_nxt_btn">
            <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default TagFilter