import React from "react";
import "./SingleCountry.css";

const SingleCountry = ({ country: { name, flags, capital } }) => {
  return (
    <div className="single__card">
      <img src={flags.svg} alt={name.official} />
      <h2>Name: {name.common}</h2>
      <h2>Capital: {capital}</h2>
    </div>
  );
};

export default SingleCountry;
