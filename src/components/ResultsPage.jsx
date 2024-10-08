import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultsPage.css'; // Make sure to create this file if it doesn't exist

const ResultsPage = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  const getCountryIcon = (countryName) => {
    const countryCode = countryName.toLowerCase().replace(/\s+/g, '-');
    return `fas fa-map-marker-alt ${countryCode}`;
  };

  return (
    <div className="results-container">
      <h1 className="results-title">Search Results</h1>
      {results.length > 0 ? (
        <div className="results-list">
          {results.map((country, index) => (
            <div key={index} className="result-item">
              <span className="country-icon">
                <i className={getCountryIcon(country.country)}></i>
              </span>
              <div className="country-info">
                <span className="country-name">{country.country}</span>
                <span className="capital-name">{country.capital}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">No results found.</div>
      )}
    </div>
  );
};

export default ResultsPage;
