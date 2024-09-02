import React from "react";
import { useNavigate } from "react-router-dom";
import './EventCard.css'
function EventCard({ event }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date.seconds * 1000).toLocaleDateString()}</p>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
}

export default EventCard;
