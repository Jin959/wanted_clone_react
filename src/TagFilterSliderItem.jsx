import './css/tag_filter_slider_item_style.css'

const TagFilterSliderItem = (props) => {
  return (
    <div className='TagFilterSliderItem'>
      <button
        style={{ backgroundColor: props.color }}
      >
        <span>{props.tag}</span>
        <img src={props.imgLink} alt="" />
      </button>
    </div>
  )
}

TagFilterSliderItem.defaultProps = {
  id: "404",
  color: "#f2fbf5",
  tag: "연봉이 최고의 복지 x 10",
  imgLink: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
}

export default TagFilterSliderItem