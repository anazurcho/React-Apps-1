import React, { useState } from "react";
import JokesService from "../getApi/JokesService";
import SearchedJokes from "../Api/SearchedJokes";
import { useAlert } from "react-alert";

function Searched({ see, onClickSeeMore, onClickGoBack }) {
	const [term, setterm] = useState("");
	const [arrayjokes, setArrayjokes] = useState([]);
	const [arrayjokesSearched, setArrayjokesSearched] = useState([]);
	const [joke, setJokes] = useState("");
	const getSearch = new JokesService();
	const alert = useAlert();

	const onSearchChange = (event) => {
		setterm(event.target.value);
	};

	const onGoBack = () => {
		setterm("");
		onClickGoBack();
		setArrayjokes([]);
		setJokes("");
	};
	const onClickChange = () => {
		if (term) {
			getSearch
				.getSearch(term)
				.then((response) => {
					setArrayjokes(response);
					setArrayjokesSearched(response.result.slice(0, 10));
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
		<div className='container'>
			{!see && (
				<div className='row form_search'>
					<div className='col'>
						<input
							value={term}
							type='text'
							className='form-control search-input'
							placeholder='Type to search'
							onChange={onSearchChange}
						/>
					</div>
					<div className='col-2'>
						<button onClick={onClickChange} className='btn btn-warning'>
							get
						</button>
					</div>
				</div>
			)}
			<div className='App'>
				{arrayjokes.total > 0 && (
					<div>
						{!see && (
							<div className='flex-column  form_search text-white p-3 back-Dark body_width md-4 flex-column'>
								<h1> total - {arrayjokes.total}</h1>
								<p>{joke}</p>
								<button onClick={onClickSeeMore} className='btn btn-warning'>
									see more with this words
								</button>
							</div>
						)}
						{see && (
							<div>
								<button onClick={onGoBack} className='btn back-Red'>
									search again
								</button>
								<SearchedJokes arrayjokesSearched={arrayjokesSearched} />
								<button onClick={onGoBack} className='btn back-Red'>
									search again
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Searched;
