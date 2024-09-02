
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import './EventRegistrationForm.css';

function EventRegistrationForm() {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    dni: "",
    creditCard: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        ...formData,
        name: currentUser.displayName ? currentUser.displayName.split(' ')[0] : "",
        email: currentUser.email || "",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const creditCardRegex = /^[0-9]{13,16}$/;
    if (!creditCardRegex.test(formData.creditCard)) {
      setMessage({ text: "Número de tarjeta de crédito inválido.", type: "error" });
      return;
    }

    try {
      await addDoc(collection(db, "eventRegistrations"), {
        ...formData,
        eventId: id,
      });
      setMessage({ text: "¡Te has inscrito con éxito al evento!", type: "success" });
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        dni: "",
        creditCard: "",
      });
    } catch (error) {
      setMessage({ text: "Error al inscribirse al evento.", type: "error" });
      console.error("Error al inscribirse al evento:", error);
    }
  };

  return (
    <main className="container">
      <h2>Formulario de Inscripción</h2>
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>DNI:</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tarjeta de Crédito:</label>
          <input
            type="text"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleChange}
            required
            placeholder="Número de tarjeta"
          />
        </div>
        <button type="submit">Inscribirse</button>
      </form>
    </main>
  );
}

export default EventRegistrationForm;
