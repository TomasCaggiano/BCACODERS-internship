import React from 'react';

const notFoundStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f8f9fa', 
  color: '#343a40', 
  fontFamily: 'Arial, sans-serif', 
  marginLeft: '175px', 
  padding: '20px', 
  width: '126vh' 
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '0.5rem'
};

const hrStyle = {
  width: '50%',
  border: '1px solid #dee2e6',
  margin: '1rem 0'
};

const paragraphStyle = {
  fontSize: '1.25rem',
  textAlign: 'center'
};

const NotFound = () => {
  return (
    <div style={notFoundStyle}>
      <h1 style={headingStyle}>Página no encontrada</h1>
      <hr style={hrStyle} />
      <p style={paragraphStyle}>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
}

export default NotFound;
