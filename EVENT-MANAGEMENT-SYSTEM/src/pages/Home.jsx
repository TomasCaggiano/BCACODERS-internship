import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import EventCard from "../components/EventCard"; 
import './Home.css'
function Home() {
  const { currentUser } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsList);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="home">
      <h1>Welcome{currentUser ? `, ${currentUser.displayName}` : ""}!</h1>
      <h2>Upcoming Events</h2>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <div className="events-list">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p>No events found.</p>
      )}
    </main>
  );
}

export default Home;