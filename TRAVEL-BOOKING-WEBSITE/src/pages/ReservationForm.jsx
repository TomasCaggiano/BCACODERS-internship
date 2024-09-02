// ReservationForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ReservationForm.css'; 

const ReservationForm = () => {
  const { flightId } = useParams();
  const [flight, setFlight] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    cardNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [userValid, setUserValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await fetch('/flights.json'); // Cambia la URL según tu configuración
        const flights = await response.json();
        const selectedFlight = flights.find(flight => flight.id === flightId);
        setFlight(selectedFlight);
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlightDetails();
  }, [flightId]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserValid(storedUser.email === formData.email);
    }
  }, [formData.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.email !== formData.email) {
      setSubmissionMessage('User email does not match.');
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      setSubmissionMessage('Reservation successful!');
      toast.success('Reservation successful!'); 
      navigate('/'); 
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setSubmissionMessage('Failed to reserve the flight.');
      toast.error('Failed to reserve the flight.'); 
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!flight) {
    return <div>Loading flight details...</div>;
  }

  return (
    <div className="reservation-container">
      <h1>Reserve Your Flight to {flight.destination}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Reserving...' : 'Reserve'}
        </button>
      </form>
      {submissionMessage && <p>{submissionMessage}</p>}
    </div>
  );
};

export default ReservationForm;
