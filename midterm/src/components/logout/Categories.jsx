import React, { useState, useEffect } from "react";
import Category from "./Category";

function Categories({categories}) {
	const [loading, setLoading] = useState(true);

	const handleItemClick = (itemId) => {
		alert("can't touch this until login");
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
			<div className='App'>Total - {categories.length}</div>
			<div
				className={`row p-5 ${
					loading
						? "justify-content-center"
						: " bg-success row row-cols-1 row-cols-md-4"
				}`}>
				{content}
			</div>
		</div>
	);
}

export default Categories;
