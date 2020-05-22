import React from 'react';
import Form from '../Form';
import Categories from '../logout/Categories';
import RandomJoke from '../logout/RandomJoke';

function HomeDashboard({categories}) {
  return (
    <div>
      <RandomJoke />
      <div className="row row-cols-1 ">
        <div className="col-9">
            <Categories  categories={categories}/>
        </div>
        <div className="col-3">
            <Form />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
