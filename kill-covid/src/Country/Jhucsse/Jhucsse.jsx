import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Daily from './Daily';


import Pagination from '../Pagination/Pagination';
import FormPagination from '../Pagination/FormPagination';

function Jhucsse(props) {
    const [loadingDaily, setLoadingDaily] = useState(true);
    const [listDaily, setListDaily] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [itemlength, setitemlength] = useState(12);
    const [postsPerPage, setpostPerPage] = useState(itemlength);

    
    useEffect(() => {
      axios
        .get('https://disease.sh/v2/jhucsse')
        .then((response) => {
          setListDaily(response.data);
          setLoadingDaily(false);
        })
        .catch((err) => console.error('[Jhuccsse.jsx]', err.message));
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    listDaily.sort((a,b) => b.cases - a.cases);
    const currentPosts = listDaily.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    let contentDaily = <h2>List Daily</h2>;
    let contentDailyIds = <h2>List Daily</h2>;
    if (loadingDaily) {
      contentDaily = (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Kill Covid-19</span>
            </div>
        </div>
      );
    } else {
      contentDailyIds = currentPosts.map((item) => {
        return (
            <Daily
                key={item.id}
                item={item}
            />);
      });
      contentDaily = (
        <div>
            <div className="row row-cols-1 row-cols-md-4">
                {contentDailyIds}
            </div>
            <FormPagination 
                setitemlength={setitemlength}
                setpostPerPage={setpostPerPage}
                itemlength={itemlength}
            />
        </div>
      );
    }
  
    return (
        <div>
            <hr />
            <h1 className="body_width">jhucsse info</h1>
                <div className="body_width">Total - {listDaily.length}</div>
                <div>
                  {contentDaily}
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={listDaily.length}
                  paginate={paginate}
                />
            <hr /> 
        </div>
    );
}

export default Jhucsse;
