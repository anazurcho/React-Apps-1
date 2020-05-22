import React from "react";

function Category({ item, handleItemClick }) {
	return (
		<div className='col mb-2' onClick={handleItemClick}>
			<div className='card back-blue-p'>
				<div className='row no-gutters  '>
					<div className='card-body back-blue '>
						<h4 className='card-title body_width text-white'>{item}</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Category;
