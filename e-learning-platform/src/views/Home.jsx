import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const inProgressCourses = user.in_progress_courses;
  const completedCourses = user.completed_courses;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="home">
      <h1>Inicio</h1>
      <hr />
      <div className="user-info">
        <span>Hola, {user.name}</span>
        <span>Cursos</span>
        <button onClick={toggleMenu}>Menú de Cursos</button>
        {menuOpen && (
          <div className="course-menu">
            <ul>
              <li><a href="#inProgress" onClick={closeMenu}>En curso</a></li>
              <li><a href="#completed" onClick={closeMenu}>Terminados</a></li>
            </ul>
          </div>
        )}
      </div>
      <div id="inProgress" >
        <h2>Cursos en curso</h2>
        {inProgressCourses.length > 0 ? (
          inProgressCourses.map(course => (
            <div key={course.id} className="course-item">
              <h3>{course.name}</h3>
              <p>Fecha de Inicio: {course.start_date}</p>
              <p>Fecha de Finalización: {course.end_date}</p>
              <p>Días: {course.days.join(', ')}</p>
              <p>Hora: {course.time}</p>
              <Link to={`/courses/${course.id}`}>
                <button>Ver Contenido</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No tienes cursos en curso</p>
        )}
      </div>
      <div id="completed" >
        <h2>Cursos terminados</h2>
        {completedCourses.length > 0 ? (
          completedCourses.map(course => (
            <div key={course.id} className="course-item">
              <h3>{course.name}</h3>
              <p>Fecha de Inicio: {course.start_date}</p>
              <p>Fecha de Finalización: {course.end_date}</p>
              <p>Días: {course.days.join(', ')}</p>
              <p>Hora: {course.time}</p>
              <Link to={`/courses/${course.id}`}>
                <button>Ver Contenido</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No has completado ningún curso</p>
        )}
      </div>
    </div>
  );
};

export default Home;
