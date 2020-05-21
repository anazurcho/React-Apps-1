import React, { useState } from "react";
import JokesService from "../getApi/JokesService";
import { useAlert } from "react-alert";

function Searched(props) {
	const [term, setterm] = useState("");
	const [arrayjokes, setArrayjokes] = useState([]);
	const [joke, setJokes] = useState("");
	const getSearch = new JokesService();
	const alert = useAlert();

	const onSearchChange = (event) => {
		setterm(event.target.value);
	};
	const onClickChange = () => {
		if (term) {
			getSearch
				.getSearch(term)
				.then((response) => {
					setArrayjokes(response);
					setJokes(response.result[0].value);
					console.log(response);
				})
				.catch((err) => console.error("[Searched.jsx]", err.message));
		} else {
			alert.show(<div style={{ color: "red" }}>Try to search first!</div>);
		}
	};

	if (!arrayjokes) return null;
	return (
		<div>
			<div className='row'>
				<div className='col-8'>
					<input
						value={term}
						type='text'
						className='form-control search-input'
						placeholder='Type to search'
						onChange={onSearchChange}
					/>
				</div>
				<div className='col-4'>
					<button onClick={onClickChange} className='btn btn-warning'>
						get
					</button>
				</div>
			</div>

			<div className='App'>
				<h1> {arrayjokes.total}</h1>
				{joke}
			</div>
		</div>
	);
}

export default Searched;
