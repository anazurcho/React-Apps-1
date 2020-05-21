import React, { useEffect, useState } from "react";
// import axios from "axios";
import JokesService from "../getApi/JokesService";

function RandomJoke(props) {
	const [list, setList] = useState([]);
	const randomJoke = new JokesService();

	useEffect(() => {
		randomJoke
			.getRandom()
			.then((response) => {
				setList(response);
			})
			.catch((err) => console.error("[RandomJoke.jsx]", err.message));
	}, []);

	if (!list) return null;
	return (
		<div className='container'>
			<div className='flex-column bg-Red text-blue p-3 body_width md-4 flex-column'>
				<h2>{list.value}</h2>
			</div>
		</div>
	);
}

export default RandomJoke;
