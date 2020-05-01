import React from 'react';

import Jhucsse from '../Country/Jhucsse/Jhucsse';
import CountryList from '../Country/Countries/CountryList';
import FullCases from '../Country/FullCases';
import States from '../Country/States/States';


function Body({loadingJhucsse, loadingCountryList, loadingStates, loadingFull}) {
    return (
        <div>
            {loadingFull && <FullCases/>}
            {loadingJhucsse && <Jhucsse/>}
            {loadingCountryList && <CountryList/>}
            {loadingStates && <States/>}
        </div>
    );
}

export default Body;
