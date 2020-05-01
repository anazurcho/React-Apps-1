import React, {useState}from 'react';
import './App.css';
import Header from './container/Header';
import Body from './container/Body';

function App() {
  const [loadingJhucsse, setLoadingJhucsse] = useState(false);
  const [loadingCountryList, setloadingCountryList] = useState(false);
  const [loadingStates, setloadingStates] = useState(false);
  const [loadingFull, setloadingFull] = useState(true);
  
  const FullClick= () => {
    setloadingFull(true);
    setloadingCountryList(false);
    setLoadingJhucsse(false);
    setloadingStates(false);
  };
  const JhucsseClick= () => {
    setLoadingJhucsse(!loadingJhucsse);
    setloadingCountryList(false);
    setloadingStates(false);
    if (!loadingJhucsse) {setloadingFull(false)}
    else {setloadingFull(true)}
  };
  const CountryListClick= () => {
    setloadingCountryList(!loadingCountryList);
    setLoadingJhucsse(false);
    setloadingStates(false);
    if (!loadingCountryList) {setloadingFull(false)}
    else {setloadingFull(true)}
  };
  const StateClick= () => {
    setloadingStates(!loadingStates);
    setloadingCountryList(false);
    setLoadingJhucsse(false);
    if (!loadingStates) {setloadingFull(false)}
    else {setloadingFull(true)}
  };

  return (
    <div>
        <Header JhucsseClick={JhucsseClick} 
                CountryListClick={CountryListClick}
                StateClick={StateClick} 
                FullClick={FullClick}/>

        <Body loadingJhucsse={loadingJhucsse} 
              loadingCountryList={loadingCountryList} 
              loadingStates={loadingStates}
              loadingFull={loadingFull}/>
    </div>
  );
}

export default App;
