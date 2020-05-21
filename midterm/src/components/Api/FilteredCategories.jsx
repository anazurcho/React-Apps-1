import React, { useState, useEffect } from "react";
import SelectedCategories from "./SelectedCategories";
import JokesCategory from "./JokesCategory";

function FilteredCategories({ categories }) {
	const [loading, setLoading] = useState(true);
	const [selectedItemId, setSelectedItemId] = useState(null);

	const handleItemClick = (itemId) => {
		setSelectedItemId(itemId);
		console.log(itemId);
	};

	const handleOnGetBack = () => {
		setSelectedItemId(null);
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
				<SelectedCategories
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
		<div>
			{!selectedItemId && (
				<div className='row flex-column bg-success'>
					<div className='App'>Total - {categories.length}</div>
					<div
						className={`row p-5 ${
							loading
								? "justify-content-center"
								: "bg-success row row-cols-1 row-cols-md-4"
						}`}>
						{content}
					</div>
				</div>
			)}
			{selectedItemId && (
				<JokesCategory
					categoryid={selectedItemId}
					handleOnGetBack={handleOnGetBack}
				/>
			)}
		</div>
	);
}

export default FilteredCategories;
