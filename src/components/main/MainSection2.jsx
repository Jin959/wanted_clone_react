import "./css/main_section2.css";
import MainGridItem from "./MainGridItem";
import mainGirdData from "../../json/main_grid_data.json";

const MainSection2 = () => {
  const scrollItemTag = [
    "커리어고민",
    "IT/기술",
    "인간관계",
    "조직문화",
    "라이프스타일",
    "리더십",
    "회사생활",
    "취업/이직",
    "마케팅",
    "노무",
    "개발",
  ];

  return (
    <section className="Section2 section">
      <div className="section_wrapper">
        <div className="section_title">
          <h2>나에게 필요한 커리어 인사이트</h2>
          <button>
            <svg width="24" height="24" className="" viewBox="0 0 17 17">
              ...
            </svg>
          </button>
        </div>

        <div className="horizontal_scroll_wrapper">
          <div className="scroll_container">
            {scrollItemTag
              .reduce(
                (acc, ele, idx) => (acc = [...acc, { id: idx, tag: ele }]),
                []
              )
              .map((ele) => {
                return (
                  <button key={ele.id}>
                    <span>{ele.tag}</span>
                  </button>
                );
              })}
          </div>
          <button className="scroll_prev_btn">
            <svg viewBox="0 0 18 18">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </button>
          <button className="scroll_nxt_btn">
            <svg viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </button>
          <button className="scroll_more_btn">
            <svg width="16" height="3" viewBox="0 0 16 3">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="grid_container">
          {mainGirdData.insights.slice(0, 8).map((ele) => {
            return (
              <MainGridItem
                key={ele.id}
                id={ele.id}
                thumnailLink={ele.thumnailLink}
                title={ele.title}
                subtitleFlag={ele.subtitleFlag}
                subtilte={ele.subtilte}
                logoLink={ele.logoLink}
                author={ele.author}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainSection2;
