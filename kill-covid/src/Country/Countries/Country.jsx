import React from 'react';

function Country({ item, handleItemClick, handleBtnClick }) {
  return (
        <div className="col mb-2">
            <div className="card">
            <div class="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{item.country}</h4>
                            <div className="row">
                                <div className='col'>
                                    <p className="card-text">Cases:{item.cases}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <p className="card-text">Recovered: {item.recovered}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <p className="card-text">Today Cases:{item.todayCases}</p>
                                </div> 
                            </div>
                            <div className="row">
                            <div className='col'>
                                    <button type="button"
                                        className="btn back-Dark btn-sm" 
                                        onClick={handleBtnClick}>Today info
                                    </button>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={handleItemClick}>
                        <img src={item.countryInfo.flag} className="card-img" alt=""/>
                    </div>
                </div>
            </div> 
        </div>
  );
}

export default Country;

