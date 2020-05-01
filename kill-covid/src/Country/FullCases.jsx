import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../logo.svg'

function FullCases(props) {

    const [list, setList] = useState([]);

    useEffect(() => {
      //   IIFE
      (async () => {
        try {
          const response = await axios.get('https://disease.sh/v2/all'
          );
          setList(response.data);
        } catch (err) {
          console.error('ssdadad', err.message);
        }
      })();
    }, []);
  
    if (!list) return null;
    return (
      <>
      <h1 className="body_width">#StopCovid</h1>
      <h1 className="body_width">#StayHome</h1>
      <h1 className="body_width">#StaySafe</h1>
      
      <div className="container">
         <div className="flex-column bg-Red text-white p-3 body_width body_width md-4 flex-column">
         <img src={logo} className="App-logo App-logo-logo" alt=""/>
            <h2>Total Covid-19 Cases {list.cases}</h2>
            <p>Death {list.deaths}</p>
            <p>Recovered {list.recovered}</p>
            <p>Today Cases {list.todayCases}</p>
            <p>Today Death {list.todayDeaths}</p>
            <p>Recovered {list.recovered}</p>
            <p>Active {list.active}</p>
            <p>Critical {list.critical}</p>
            <p>Tests {list.tests}</p>
          </div>
      </div>
      </>
    );
}

export default FullCases;