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
			<div className='flex-column form_search text-white p-3 back-Red body_width md-4 flex-column'>
				<h5>Random Joke :))))</h5>
				<img src={list.icon_url} alt=""/>
				<h3>{list.value}</h3>
			</div>
		</div>
	);
}

export default RandomJoke;
