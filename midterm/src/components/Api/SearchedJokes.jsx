import React from "react";

function SearchedJokes({ arrayjokesSearched }) {
	return (
		<div className='row row-cols-1'>
			{arrayjokesSearched.map((item) => (
				<div>
					<div className='col mb-2'>
						<div className='card back-blue-p'>
							<div className='row no-gutters' bg-info>
								<div className='card-body'>
									<img src={item.icon_url} alt=""/>
									<h4 className='card-title  body_width'>{item.value}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default SearchedJokes;
