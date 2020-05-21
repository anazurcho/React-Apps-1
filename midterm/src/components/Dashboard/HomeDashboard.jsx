import React from 'react';
import Form from '../Form';
import Categories from '../logout/Categories';
import RandomJoke from '../logout/RandomJoke';

function HomeDashboard({categories}) {
  return (
    <div>
      <RandomJoke />
      <div className="row">
        <div className="col-8">
            <Categories  categories={categories}/>
        </div>
        <div className="col-4">
            <Form />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
