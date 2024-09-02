
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import './Dashboard.css'
function Dashboard() {
  const [events, setEvents] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return (
    <main className="container">
      <h2>Dashboard</h2>
      <div>
        {currentUser.photoURL && <img src={currentUser.photoURL} alt="Profile" style={{ maxWidth: "50px", borderRadius: "50%" }} />}
        <h3>Welcome, {currentUser.displayName}</h3>
      </div>
      <Link to="/create-event">Create New Event</Link>
      <Link to="/profile">Edit Profile</Link>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Dashboard;
