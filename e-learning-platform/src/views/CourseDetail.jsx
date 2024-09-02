import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CourseDetail.css'
const courses = [
  {
    "id": 1,
    "name": "ReactJS",
    "start_date": "2024-01-01",
    "end_date": "2024-03-01",
    "days": ["Lunes", "Miércoles"],
    "time": "18:00-20:00",
    "status": "en curso",
    "commission": "A",
    "classes": [
      {
        "number": 1,
        "title": "Introducción a React",
        "zoomLink": "https://zoom.us/j/123456789",
        "googleDocsLink": "https://docs.google.com/document/d/1A2B3C4D5E6F7G8H9I10J"
      },
      {
        "number": 2,
        "title": "Componentes y Props",
        "zoomLink": "https://zoom.us/j/987654321",
        "googleDocsLink": "https://docs.google.com/document/d/2A3B4C5D6E7F8G9H10I11J"
      }
    ]
  },
  {
    "id": 2,
    "name": "JavaScript Avanzado",
    "start_date": "2024-02-01",
    "end_date": "2024-04-01",
    "days": ["Martes", "Jueves"],
    "time": "18:00-20:00",
    "status": "terminado",
    "commission": "B",
    "classes": [
      {
        "number": 1,
        "title": "Funciones Avanzadas",
        "zoomLink": "https://zoom.us/j/1122334455",
        "googleDocsLink": "https://docs.google.com/document/d/3A4B5C6D7E8F9G10H11I12J"
      },
      {
        "number": 2,
        "title": "Closures y Scope",
        "zoomLink": "https://zoom.us/j/5544332211",
        "googleDocsLink": "https://docs.google.com/document/d/4A5B6C7D8E9F10G11H12I13J"
      }
    ]
  }
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div className="course-detail">
      <div className="course-header">
        <h1>{course.name}</h1>
        <div className="course-info">
          <span>Comisión: {course.commission}</span>
          <Link to={`/chat`}>
            <button>Ir al Chat</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="course-program">
        <h2>Programa</h2>
        <Link to={`https://docs.google.com/`} target="_blank" rel="noopener noreferrer">
          <button>
             Material del Curso
          </button>
        </Link>
      </div>
      <div className="course-classes">
        {course.classes.map((courseClass, index) => (
          <div key={index} className="class-item">
            <h3>Clase {courseClass.number}: {courseClass.title}</h3>
            <div className="class-actions">
              <a href={courseClass.zoomLink} target="_blank" rel="noopener noreferrer">
                <button>Ir a Zoom</button>
              </a>
              <a href={courseClass.googleDocsLink} target="_blank" rel="noopener noreferrer">
                <button>
                  <i className="fas fa-file-alt"></i> Ver Material
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
