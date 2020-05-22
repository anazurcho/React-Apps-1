import React, { useContext } from "react";

import { AuthContext } from "../../context/authContext";
import FilteredCategories from "../Api/FilteredCategories";

function Dashboard({ categories }) {
	const { logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut();
	};

	return (
		<div className='row flex-column p-5'>
			<div className='container'>
				<div className='flex-column form_search text-white p-3 back-Red body_width md-4 flex-column'>
					<h4>Now You can see jokes or you can</h4>
					<button onClick={handleLogOut} className='btn back-blue-p'>
						LogOut
					</button>
				</div>
			</div>
			<FilteredCategories categories={categories} />
		</div>
	);
}

export default Dashboard;
