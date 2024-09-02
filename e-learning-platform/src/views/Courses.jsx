import React, { useState } from 'react';
import './Courses.css'
import { Link } from 'react-router-dom';
const Courses = ({ user }) => {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'in_progress' ? user.in_progress_courses :
                          filter === 'completed' ? user.completed_courses :
                          [...user.in_progress_courses, ...user.completed_courses];

  return (
    <div className="courses">
      <h1>Cursos</h1>
      <hr />
      <div className="filters">
        <button onClick={() => setFilter('in_progress')}>En curso</button>
        <button onClick={() => setFilter('completed')}>Terminados</button>
        <button onClick={() => setFilter('all')}>Todos</button>
      </div>
      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div key={course.id}>
              <h3>{course.name}</h3>
              <p>Fecha de Inicio: {course.start_date}</p>
              <p>Fecha de Finalización: {course.end_date}</p>
              <p>Días: {course.days.join(', ')}</p>
              <p>Hora: {course.time}</p>
              <Link to={`https://docs.google.com/`} target="_blank" rel="noopener noreferrer">
          <button>
             Material del Curso
          </button>
        </Link>
            </div>
          ))
        ) : (
          <p>No hay cursos para mostrar</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
