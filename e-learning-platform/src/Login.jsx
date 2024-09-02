import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const users = [
  {
    id: 1,
    name: 'Juan',
    username: 'juan',
    password: 'password1',
    in_progress_courses: [1],
    completed_courses: [2]
  },
  {
    id: 2,
    name: 'Maria',
    username: 'maria',
    password: 'password2',
    in_progress_courses: [2],
    completed_courses: []
  }
];

const courses = [
  {
    id: 1,
    name: 'ReactJS',
    start_date: '2024-01-01',
    end_date: '2024-03-01',
    days: ['Lunes', 'Miércoles'],
    time: '18:00-20:00',
    status: 'en curso',
    commission: 'A',
    classes: [
      {
        number: 1,
        title: 'Introducción a React',
        zoomLink: 'https://zoom.us/j/123456789',
        googleDocsLink: 'https://docs.google.com/document/d/1A2B3C4D5E6F7G8H9I10J'
      },
      {
        number: 2,
        title: 'Componentes y Props',
        zoomLink: 'https://zoom.us/j/987654321',
        googleDocsLink: 'https://docs.google.com/document/d/2A3B4C5D6E7F8G9H10I11J'
      }
    ]
  },
  {
    id: 2,
    name: 'JavaScript Avanzado',
    start_date: '2024-02-01',
    end_date: '2024-04-01',
    days: ['Martes', 'Jueves'],
    time: '18:00-20:00',
    status: 'terminado',
    commission: 'B',
    classes: [
      {
        number: 1,
        title: 'Funciones Avanzadas',
        zoomLink: 'https://zoom.us/j/1122334455',
        googleDocsLink: 'https://docs.google.com/document/d/3A4B5C6D7E8F9G10H11I12J'
      },
      {
        number: 2,
        title: 'Closures y Scope',
        zoomLink: 'https://zoom.us/j/5544332211',
        googleDocsLink: 'https://docs.google.com/document/d/4A5B6C7D8E9F10G11H12I13J'
      }
    ]
  }
];

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      const userCourses = {
        ...user,
        in_progress_courses: user.in_progress_courses.map(courseId =>
          courses.find(course => course.id === courseId)
        ),
        completed_courses: user.completed_courses.map(courseId =>
          courses.find(course => course.id === courseId)
        )
      };
      setUser(userCourses);
      navigate('/'); 
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Usuario</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
