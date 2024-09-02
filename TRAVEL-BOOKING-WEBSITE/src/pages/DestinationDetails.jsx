import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Details.css';

const DestinationDetails = ({ destinations }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(dest => dest.PlaceId === id);

  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  };

  if (!destination) return <p>Destino no encontrado.</p>;

  const handleReserveClick = () => {
    if (isAuthenticated()) {
      navigate(`/reserve/${id}`);
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className="details-container">
      <h1>{destination.PlaceName}</h1>
      <p>{destination.description}</p>
      <h2>Destinos Turísticos:</h2>
      <ul>
        {destination.touristDestinations.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
      <p><strong>Rango de Precios:</strong> {destination.priceRange}</p>
      <p><strong>Mejor Época para Visitar:</strong> {destination.bestTravelTime}</p>
      <p><strong>Temperatura Promedio:</strong> {destination.averageTemperature}</p>
      <button onClick={handleReserveClick}>Reservar vuelo</button>
    </div>
  );
};

export default DestinationDetails;
