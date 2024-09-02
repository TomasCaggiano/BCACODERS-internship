import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';
const DestinationList = ({ destinations }) => (
  <div className='card'>
    <h2>Top Destinations</h2>
    <ul>
      {destinations.map(dest => (
        <li key={dest.PlaceId}>
          <Link to={`/destination/${dest.PlaceId}`}><div>
            <br />
            <img src={dest.Img} alt="image" />
            <h2>{dest.PlaceName}</h2>
            <p>
              {dest.description}
              <br />
              ${dest.priceRange}
            </p>
          </div></Link>
        </li>
      ))}
    </ul>
  </div>
);

export default DestinationList;
