import React, { useEffect, useState } from 'react';
import axios from 'axios';

function World({ selectedItemId }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    //   IIFE
    (async () => {
      try {
        const response = await axios.get(
          'https://corona.lmao.ninja/v2/countries/' + selectedItemId
        );

        setItem(response.data);
      } catch (err) {
        console.error('[World.jsx]', err.message);
      }
    })();
  }, [selectedItemId]);

  if (!item) return null;
  return (
    <div className="flex-column background-country-item-bl container body_width  md-4 text-white p-3">
      <div className="row">
        <div className='col'>
          <img src={item.countryInfo.flag} className="flag-png" alt=""/>
          <h2>{item.country}</h2>
        </div>
        <div className='col'>
          <h2>Cases {item.cases}</h2>
          <h2>Deaths {item.deaths}</h2>
          <h2>Recovered {item.recovered}</h2>
        </div>
        <div className='col'>
          <h2>Today Cases {item.todayCases}</h2>
          <h2>Today Deaths {item.todayDeaths}</h2>
          <h2>Active Now {item.active}</h2>
        </div>
      </div>
    </div>
  );
}

export default World;
