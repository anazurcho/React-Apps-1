import React from "react";

function SelectedCategories({ item, handleItemClick }) {
	return (
		<div>
			<div className='col mb-2'>
				<div className='card' onClick={handleItemClick}>
					<div className='row no-gutters'>
						<div className='card-body back-Red'>
							<h4 className='card-title body_width'>{item}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectedCategories;
