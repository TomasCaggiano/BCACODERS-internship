import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Plataforma E-Learning</h2>
      <hr />
      <ul>
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/chat"><i className="fas fa-comments"></i> Chat</Link></li>
        <li><Link to="/courses"><i className="fas fa-graduation-cap"></i> Cursos</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
