import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header/Header';
import SearchInput from '../SearchInput/SearchInput';
import { SpinnerDotted } from 'spinners-react';

const AllCountries = () => {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      console.log(data);

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

      if (!res.ok) throw new Error("Not country found!");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${regionName}`);

      if (!res.ok) throw new Error("Something went wrong...");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all-country-wrapper">
      <div className="country-top">

        {/* <div className="filter">
          <FilterCountry onSelect={getCountryByRegion} />
        </div> */}
      </div>

      <div className="country__bottom">
        {isLoading && !error &&  <SpinnerDotted enabled={true} color='#e61515'  />}
        {error && !isLoading && <h4>{error}</h4>}

        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>

        
        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="country__card">
              <div className="country__img">
                <img src={country.flags.png} alt="" />
              </div>

              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>
                  {" "}
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h6>
                <h6> Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountries


 