import React, { useState, useEffect } from "react";
import Category from "./Category";
import { useAlert,types } from "react-alert";

function Categories({categories}) {
	const [loading, setLoading] = useState(true);
	const alert = useAlert();
	const handleItemClick = (itemId) => {
		alert.show(<div style={{ color: "white" }}>If u want to see chucks' jokes login!</div>, {type: types.INFO, });
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	let content = <h2>List</h2>;
	if (loading) {
		content = (
			<div className='spinner-border text-info align-self-center' role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
		);
	} else {
		content = categories.map((item) => {
			return (
				<Category
					key={item.id}
					item={item}
					handleItemClick={() => {
						handleItemClick(item);
					}}
				/>
			);
		});
	}

	return (
		<div className='row flex-column'>
			<div
				className={`row p-5 ${
					loading
						? "justify-content-center"
						: "row row-cols-1 row-cols-md-4"
				}`}>
				{content}
			</div>
		</div>
	);
}

export default Categories;
