import './css/search_bar.css';
import { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const SearchBar = ({ searchBarFlag, setSearchBarFlag }) => {
  const navigate = useNavigate();
  const searchInput = useRef();

  const onClickToClose = () => {
    if (searchBarFlag) setSearchBarFlag(false);
  }

  const preventClose = (e) => {
    e.stopPropagation();
  }

  const onSearchInputSubmit = (e) => {
    e.preventDefault();
    setSearchBarFlag(false);
    navigate(`/search?query=${searchInput.current.value}`);
  }

  useEffect(() => {
    searchInput.current.focus();
  }, [])
  

  return (
    <div className='SearchBar-background' onClick={onClickToClose}>
      <div className='SearchBar'>
        <div className='SearchBar-wrapper'>
          <form
            className='SearchBar-form'
            action="submit"
            onSubmit={onSearchInputSubmit}
          >
            <input
              className='SearchBar-input'
              type="search"
              placeholder='#태그, 회사, 포지션 검색'
              onClick={preventClose}
              ref={searchInput}
            />
            <SearchIcon />
          </form>
          <div className='SearchBar-recomend_tag'>
            <h4>추천태그로 검색해보세요</h4>
            <Link>
              기업태그 홈 이동하기
              <svg width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path></svg>
            </Link>
            <ul>
              <li>
                <button>#퇴사율5%이하</button>
              </li>
              <li>
                <button>#직무교육</button>
              </li>
              <li>
                <button>#연봉상위2~5%</button>
              </li>
              <li>
                <button>#주4일근무</button>
              </li>
              <li>
                <button>#상여금</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar