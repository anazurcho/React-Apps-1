import React, {useContext} from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import HomeDashboard from './components/Dashboard/HomeDashboard';
import { AuthContext } from './context/authContext';
import { CategoriesContext } from './context/getCategories';
import Searched from "./components/Api/Searched";


function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="container">
      <Searched />
      {!isAuthenticated && <HomeDashboard  categories={categories}/>}
      {isAuthenticated && <Dashboard categories={categories}/>} 
    </div>
  );
}

export default App;
