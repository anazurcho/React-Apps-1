import logo from '../virus.png'
import React from 'react';


function Header({JhucsseClick, CountryListClick, StateClick, FullClick}) {
  return (
        <nav className="navbar navbar-dark back-Dark fl-d">
          <div className="navbar-brand pad" onClick={FullClick}>
            <img src={logo} alt="store" className="d-inline-block align-top App-logo"/>
            Kill Covid-19
          </div>
          <div  className="navbar">
            <button type="button"
                className="btn back-Dark btn-sm" 
                onClick={CountryListClick}><h5>CountryList</h5>
            </button>
            <button type="button"
              className="btn back-Dark btn-sm" 
              onClick={JhucsseClick}><h5>Jhucsse</h5>
            </button>
            <button type="button"
              className="btn back-Dark btn-sm" 
              onClick={StateClick}><h5>State</h5>
            </button>
          </div>
        </nav>
  );
}

export default Header;
