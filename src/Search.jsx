import './css/search.css'
import { useSearchParams } from 'react-router-dom';

import TagFilter from "./components/tag_filter/TagFilter"
import GridItem from "./components/items/GridItem"
import CompanyListItem from './components/items/CompanyListItem';

import jobData from './json/job_data.json';

import styled from 'styled-components';

const StyledCompanyListItem = styled(CompanyListItem)`
  width: calc(45% - 10px);
  margin: 5px;
`;

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const filteredData = jobData.jobs.filter(ele => {
    if (ele.company !== undefined ) {
      if (ele.company.includes(searchQuery)) return true;
      else if (ele.jobName.includes(searchQuery)) return true;
    }
    return false;
  });

  const companyData = [];
  filteredData.forEach(ele => {
    const flag = companyData.find(comEle => comEle.company === ele.company)
    if (flag === undefined) companyData.push(ele);
  })

  return (
    <div className='Search'>
      <div className='Search-query'>
        <div>{searchQuery}</div>
      </div>
      <h2>
        회사 {companyData.length}
      </h2>
      <div className='Search-company_list_container'>
        {
          companyData.map((ele) => {
            return <StyledCompanyListItem
              key={ele.id}
              id={ele.id}
              logoLink={ele.logoLink}
              company={ele.company}
              biz={ele.biz}
            />
          })
        }
      </div>

      <h2>
        포지션 {filteredData.length}
      </h2>
      <TagFilter />
      <div className="Search-result">        
        <div className="grid_container">
          {
            filteredData.map((ele) => {
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

export default Search