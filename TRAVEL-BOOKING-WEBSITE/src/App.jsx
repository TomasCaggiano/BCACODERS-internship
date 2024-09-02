import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import DestinationDetails from './pages/DestinationDetails';
import FlightDetails from './pages/FlightDetails';
import ReservationForm from './pages/ReservationForm'; 
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchDestinations, fetchFlights } from './services/api';
import LoginForm from './pages/LoginForm.jsx';
import RegisterForm from './pages/RegisterForm.jsx';
import { AuthProvider } from './pages/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import FlightList from './components/FlightList.jsx';
import DestinationList from './components/DestinationList.jsx';
function App() {
  const [destinations, setDestinations] = React.useState([]);
  const [flights, setFlights] = React.useState([]);

  React.useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    const loadFlights = async () => {
      try {
        const data = await fetchFlights();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    loadDestinations();
    loadFlights();
  }, []);

  return (
    <div className="App"> 
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home destinations={destinations} flights={flights} />} />
          <Route path="/available-flights" element={<FlightList flights={flights}/>} />
          <Route path="/top-destinations" element={<DestinationList destinations={destinations}/>} />
          <Route path="/search-results" element={<SearchResults flights={flights} />} />
          <Route path="/destination/:id" element={<DestinationDetails destinations={destinations} flights={flights} />} />
          <Route path="/flight/:id" element={<FlightDetails flights={flights} />} />
          <Route path="/reserve/:flightId" element={<ReservationForm />} /> 
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          closeOnClick 
          pauseOnHover 
          draggable 
          pauseOnFocusLoss 
        />
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
