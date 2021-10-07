import React, { useEffect, useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";
import Spinner from "../Spinner/Spinner";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <section className="country__container">
        {
          // map countries data
          countries.length > 0 ? (
            countries.map((country) => (
              <SingleCountry key={country.cca2} country={country} />
            ))
          ) : (
            <Spinner />
          )
        }
      </section>
    </>
  );
};

export default Countries;
