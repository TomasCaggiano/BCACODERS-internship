import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Details.css';

const FlightDetails = ({ flights }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const flight = flights.find(flight => flight.id === id);

  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  };

  if (!flight) return <p>Vuelo no encontrado.</p>;

  const handleReserveClick = () => {
    if (isAuthenticated()) {
      navigate(`/reserve/${id}`);
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className="details-container">
      <h1>Vuelo a {flight.destination}</h1>
      <p>Precio: ${flight.price}</p>
      <p>Aerolínea: {flight.airline}</p>
      <p>Número de vuelo: {flight.flightNumber}</p>
      <p>Duración: {flight.duration}</p>
      <p>Hora de salida: {new Date(flight.departureTime).toLocaleString()}</p>
      <p>Hora de llegada: {new Date(flight.arrivalTime).toLocaleString()}</p>
      <p>Aeropuerto de salida: {flight.departureAirport}</p>
      <p>Aeropuerto de llegada: {flight.arrivalAirport}</p>
      <button onClick={handleReserveClick}>Reservar Vuelo</button>
    </div>
  );
};

export default FlightDetails;
