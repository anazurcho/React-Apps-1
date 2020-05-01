import React from 'react';

function Daily({ item }) {
  return (
        <div className="col mb-2">
            <div className="card back-Blue">
               <div class="row no-gutters">
                    <div className="card-body">
                        <h4 className="card-title  body_width">{item.country}</h4>
                        <div className="row mb-2 body_width">
                            <div className='col'>
                               <p className="card-text">Confirmed: {item.stats.confirmed}</p>
                            </div>
                            <div className='col'>
                              <p className="card-text">Death: {item.stats.deaths}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col body_width'>
                                <p className="card-text text-Red">Updated At: {item.updatedAt}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>                 
        </div>
  );
}

export default Daily;