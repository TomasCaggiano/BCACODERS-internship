import React from 'react';
import FlightList from '../components/FlightList.jsx';

const SearchResults = ({ flights }) => (
  <div>
    <h1>Search Results</h1>
    <FlightList flights={flights} />
  </div>
);

export default SearchResults;
