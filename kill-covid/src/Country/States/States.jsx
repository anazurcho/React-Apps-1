import React, { useEffect, useState } from 'react';
import axios from 'axios';
import State from './State';

import Pagination from '../Pagination/Pagination';
import FormPagination from '../Pagination/FormPagination';

function States() {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [itemlength, setitemlength] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostPerPage] = useState(itemlength);

    useEffect(() => {
      axios
        .get('https://disease.sh/v2/states')
        .then((response) => {
            setList(response.data);
            setLoading(false);
        })
        .catch((err) => console.error('[States.jsx]', err.message));
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    list.sort((a,b) => b.cases - a.cases);
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    let contentStates = <h2>List States</h2>;
    let contentStatesids = <h2>List States</h2>;
    if (loading) {
        contentStates = (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Kill Covid-19</span>
            </div>
        </div>
      );
    } else {
        contentStatesids = currentPosts.map((item) => {
        return (
            <State
                key={item.id}
                item={item}
            />
        );
      });
      contentStates = (
        <div>
            <div className="row row-cols-1 row-cols-md-4">
                {contentStatesids}
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
            <h1 className="body_width">States info</h1>
                <div className="body_width">Total - {list.length}</div>
                <div>
                    {contentStates}
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={list.length}
                    paginate={paginate}
                />
        </div>
    );
}

export default States;