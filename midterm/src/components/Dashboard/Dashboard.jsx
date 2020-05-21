import React, { useContext } from "react";

import { AuthContext } from "../../context/authContext";
import FilteredCategories from "../Api/FilteredCategories";

function Dashboard({categories}) {
	const { logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut();
	};

	return (
		<div className='row flex-column p-5 bg-info'>
			<h4>you can see jokes</h4>
			<hr />
			<button onClick={handleLogOut} className='btn btn-warning'>
				LogOut
			</button>
			<FilteredCategories categories={categories} />
		</div>
	);
}

export default Dashboard;
