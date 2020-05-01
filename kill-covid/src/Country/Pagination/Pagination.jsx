import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul class="pagination justify-content-center row row-cols-10">
          {pageNumbers.map(number => (
            <li key={number}>
              <a onClick={() => paginate(number)} href='!#' className='page-link bg-mainDark text-White'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

 
  );
};

export default Pagination;