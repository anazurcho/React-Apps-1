import React, { useState, useEffect } from "react";
import JokesService from "../components/getApi/JokesService";


export const CategoriesContext = React.createContext({
    categories: [],
  });
const GetCategories = (props) => {
	const [list, setList] = useState([]);
    const getCategories = new JokesService();
    
	useEffect(() => {
		getCategories
			.getCategories()
			.then((response) => {
				setList(response);
			})
			.catch((err) => console.error("[GetCategories.js]", err.message));
	}, []);

	return (
		<CategoriesContext.Provider
			value={{
				categories: list,
			}}>
			{props.children}
		</CategoriesContext.Provider>
	);
}

export default GetCategories;
