import React, { useEffect, useState } from "react";
import JokesService from "../getApi/JokesService";

function JokesCategory({ categoryid, handleOnGetBack }) {
	const [btn, setBtn] = useState(null);
	console.log(categoryid);

	const getJokeCategories = new JokesService();

	const getApiUrl = () => {
		getJokeCategories
			.getRandomJokes(categoryid)
			.then((response) => {
				setBtn(response);
			})
			.catch((err) => console.error("[JokesCategory.jsx]", err.message));
	};
	const handleGetAnother = () => {
		getApiUrl();
	};

	useEffect(() => {
		getApiUrl();
	}, [categoryid]);

	if (!btn) return null;
	return (
		<div className='flex-column p-3 container body_width md-4 flex-column'>
			<div className='container'>
				<div className='flex-column bg-Red text-blue p-3 body_width body_width md-4 flex-column'>
					<h2>{btn.value}</h2>
				</div>
				<button onClick={handleOnGetBack} className='btn btn-warning'>
					go back
				</button>
				<button onClick={handleGetAnother} className='btn btn-danger'>
					get another joke with same category
				</button>
			</div>
		</div>
	);
}

export default JokesCategory;
