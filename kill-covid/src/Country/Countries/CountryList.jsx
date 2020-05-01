import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Country from './Country';
import World from './World';
import History from './History';

import Pagination from '../Pagination/Pagination';
import FormPagination from '../Pagination/FormPagination';

function CountryList() {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedBtnId, setSelectedBtnId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [country, setSelectCountry] = useState(null);

    const [itemlength, setitemlength] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostPerPage] = useState(itemlength);
  
    useEffect(() => {
        axios
          .get('https://disease.sh/v2/countries/')
          .then((response) => {
            setList(response.data);
            setLoading(false);
          })
          .catch((err) => console.error('[CountryList.jsx]', err.message));
      }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    list.sort((a,b) => b.cases - a.cases);
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    const handleCountry = (itemId) => {
      console.log('[Country.jsx]', itemId);
      setSelectCountry(itemId);
      setSelectedItemId(null);
      setSelectedBtnId(null);
    };
    const handleItemClick = (itemId) => {
      console.log('[Country.jsx]', itemId);
      setSelectedItemId(itemId);
      setSelectCountry(null);
      setSelectedBtnId(null);
    };
    const handleBtnClick = (itemId) => {
      console.log('[History.jsx]', itemId);
      setSelectedBtnId(itemId);
      setSelectedItemId(null);
      setSelectCountry(null);
    };

    let content = <h2>List</h2>;
    let contentcountry = <h2>List</h2>;
    if (loading) {
      content = (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Kill Covid-19</span>
            </div>
        </div>
      );
    } else {
      contentcountry = currentPosts.map((item) => {
        return (
            <Country
                key={item.id}
                item={item}
                handleItemClick={() => {
                  handleItemClick(item.country);
                  }}
                handleBtnClick={() => 
                  {handleBtnClick(item.country);}}    
            />
        );
      });
      content = (
        <div>
          <div className="container mb-4">
              <select name="country" className="form-control" onChange={(e) => {handleCountry(e.target.value)} }>
                {list.map((country) => {
                  return (
                    <option key={country.country} value={country.country}>
                      {country.country}
                    </option>
                  );
                })}
              </select>
          </div>
          <div className='row row-cols-1 row-cols-md-4'>
            {contentcountry}
          </div>
          <FormPagination 
                setitemlength={setitemlength}
                setpostPerPage={setpostPerPage}
                itemlength={itemlength}
            />
        </div>
      )
    }
  
    return (
        <div>
            <h1 className="body_width">full info about countries</h1>
            {selectedItemId && <World selectedItemId={selectedItemId}/>}
            {selectedBtnId && <History selectedBtnId={selectedBtnId}/>}
            {country && <World selectedItemId={country}/>}
            <div className="body_width">Total - {list.length}</div>
            <div>  
              {content}
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={list.length}
              paginate={paginate}
            />
        </div>
    );
}

export default CountryList;