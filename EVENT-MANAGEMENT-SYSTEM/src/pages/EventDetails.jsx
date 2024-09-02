import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import './EventDetails.css'
function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, "events", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEvent(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) return <main>Loading...</main>;

  const handleRegisterClick = () => {
    if (currentUser) {
      navigate(`/event/${id}/register`);
    } else {
      navigate("/login"); 
    }
  };

  return (
    <main className="container">
      <h2>{event.title}</h2>
      {event.imageUrl && <img src={event.imageUrl} alt={event.title} style={{ maxWidth: "100%" }} />}
      <p>{event.description}</p>
      <p>{event.date}</p>
      <button onClick={handleRegisterClick} className="register-button">
        Inscribirse al Evento
      </button>
    </main>
  );
}

export default EventDetails;
