import React, {useContext, useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import HomeDashboard from './components/Dashboard/HomeDashboard';
import { AuthContext } from './context/authContext';
import { CategoriesContext } from './context/getCategories';
import Searched from "./components/Api/Searched";


function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const { categories } = useContext(CategoriesContext);

  const [see, setSee] = useState(false);
  const onClickSeeMore = () => {
		setSee(true);
  };
  const onClickGoBack = () => {
    setSee(false);
	};
  return (
    <div>
      <div className="container-fluid full-dark">
        <Searched see={see}  onClickSeeMore={onClickSeeMore} onClickGoBack={onClickGoBack}/>
        {!see && (
        <div>
          {!isAuthenticated && <HomeDashboard  categories={categories}/>}
          {isAuthenticated && <Dashboard categories={categories}/>} 
        </div>)}
      </div>
    </div>
    
  );
}

export default App;
