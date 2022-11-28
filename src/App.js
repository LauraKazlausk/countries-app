import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCountries from './components/AllCountries/AllCountries';
import CountryInfo from './components/CountryInfo/CountryInfo';




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllCountries />}/>
        <Route path='/country/:countryName' element={<CountryInfo />} />
      </Routes>  
    </div>
  );
}

export default App;
