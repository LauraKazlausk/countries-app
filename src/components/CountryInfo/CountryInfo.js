import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import SearchInput from '../SearchInput/SearchInput';
import './CountryInfo.css';


const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { countryName } = useParams();
  const borders = country.map((country) => country.borders);

  useEffect(()=> {
    const GetCountryByName = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

        if (!res.ok) throw new Error (' Could not found country...');
        const data = await res.json();
        setIsLoading(false);
        setCountry(data);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    }
    GetCountryByName()
  },[countryName])

  return (
 
    <div className='country-wrapper'>

      {isLoading && !error && <SpinnerDotted enabled={true}  color='#595b5c'  />}
      {error && !isLoading && {error}}


      {country?.map((country, index) =>(
        <div className='country-container' key={index}>
          <div className='country-flag'>
            <img src={country.flag.png} alt='' />
          </div>
          <h3 className='country-name'>{country.name.common}</h3>
          <div className="country-info">
                <span>
                  <img src={country.flags.png} alt="" />
                </span>
                <h3>Capital: {country.capital}</h3>
              <h5>
                  {" "}
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h5>
                <h5> Region: {country.region}</h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>

            </div>
        </div>
      ))}

      <button className='back-button'>
        <Link className='link-button' to ='/'> Back</Link>
      </button>
    </div>
  )
}

export default CountryInfo