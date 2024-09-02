import React from 'react';

const ErrorPage = () => {
  return (
    <div className="error-page" style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <a href="/" style={styles.link}>Go back to the homepage</a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    textAlign: 'center',
  },
  header: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default ErrorPage;
