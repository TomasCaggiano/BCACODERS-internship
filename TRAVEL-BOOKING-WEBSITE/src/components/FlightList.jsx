import React from 'react';
import { Link } from 'react-router-dom';

const FlightList = ({ flights }) => (
  <div className='card'>
    <h2>Available Flights</h2>
    <ul>
      {flights.map(flight => (
        <li key={flight.id}>
          <Link to={`/flight/${flight.id}`}><div>{flight.destination} 
            <p>
              airlane:{flight.airline} 
              <br />
              duration:{flight.duration}
              <br />
              ${flight.price}
            </p>
            </div>
            </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FlightList;
