
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        <div className="footer-links">
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
