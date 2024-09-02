import React from 'react';
import DestinationList from '../components/DestinationList';
import FlightList from '../components/FlightList';

const Home = ({ destinations, flights }) => (
  <div>
    <div className='divimg'
    style={{
      backgroundImage: "url('https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '35rem', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '',
      fontSize: "24px", 
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1>Plan your next adventure from the comfort of your home at unbeatable prices</h1>
    </div>
    <DestinationList destinations={destinations} />
    <div style={{
    backgroundImage: "url('https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_1280,c_limit/playa.jpg')",
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '35rem', 
      height: '35rem', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '',
      fontSize: "24px", 
      textAlign: 'center',
      padding: '20px',
    }}>
      <h2>The best destinations in the world at your fingertips.</h2>
    </div>
    <FlightList flights={flights} />
  </div>
);

export default Home;
