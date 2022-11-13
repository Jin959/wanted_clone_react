import './css/bookmark.css'
import { useSelector } from 'react-redux';

import GridItem from "./components/items/GridItem"

import jobData from './json/job_data.json';

const BookMark = () => {
  const bookmarkList = useSelector(state => state.bookmarkList);

  const bookmarkData = jobData.jobs.filter(ele => {
    if (ele.id !== undefined ) {
      if (bookmarkList.includes(ele.id)) return true;
    }
    return false;
  });

  return (
    <div className='BookMark'>
      <p>북마크</p>
      <div className="bookmark_list">        
        <div className="grid_container">
          {
            bookmarkData.map((ele) => {
              return <GridItem
                key={ele.id}
                id={ele.id}
                imgLink={ele.imgLink}
                jobName={ele.jobName}
                company={ele.company}
                responseFlag={ele.responseFlag}
                location={ele.location}
                signingBonus={ele.signingBonus}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BookMark