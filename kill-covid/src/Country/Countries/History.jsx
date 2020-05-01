import React, { useEffect, useState } from 'react';
import axios from 'axios';

function History({ selectedBtnId }) {
  const [btn, setBtn] = useState(null);

  useEffect(() => {
    //   IIFE
    (async () => {
      try {
        const response = await axios.get(
          'https://disease.sh/v2/countries/' + selectedBtnId
        );

        setBtn(response.data);
      } catch (err) {
        console.error('[World.jsx]', err.message);
      }
    })();
  }, [selectedBtnId]);



  if (!btn) return null;
  return (
    <div className="flex-column  text-white p-3 container body_width md-4 flex-column">
        <img src={btn.countryInfo.flag} className="flag-png" alt=""/>
        <h1 className="card-title text-blue">{btn.country}</h1>
        <div className="row row-cols-1 row-cols-md-3">
            <div className='col back-Red'>
                <h2>Today Cases : {btn.todayCases} </h2>
            </div>
            <div className='col back-Dark'>
              <div>
                <h2>Today Death : {btn.todayDeaths} </h2>
              </div>
            </div>
            <div className='col back-Red'>
              <div>
                <h2>Recovered : {btn.recovered} </h2>
              </div>
            </div>
      </div>
    </div>
  );
}

export default History;