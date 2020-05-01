import React from 'react';

function State({ item }) {
  return (
        <div className="col mb-2 text-White">
            <div className="card bg-mainDark">
               <div class="row no-gutters">
                    <div className="card-body">
                        <h4 className="card-title">{item.state}</h4>
                        <div className="row">
                            <div className='col'>
                                <p className="card-text">Cases : {item.cases}</p>
                            </div>
                            <div className='col'>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>                 
        </div>
  );
}

export default State;