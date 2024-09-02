import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Home from './views/Home.jsx';
import Chat from './views/Chat.jsx';
import Courses from './views/Courses.jsx';
import CourseDetail from './views/CourseDetail.jsx';
import Login from './Login.jsx';
import NotFound from './views/NotFound.jsx'; 

function App() {
  const [user, setUser] = useState(null); 

  return (
    <Router>
      <div className="App">
        {user ? (
          <>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/chat" element={<Chat user={user} />} />
              <Route path="/courses" element={<Courses user={user} />} />
              <Route path="/courses/:id" element={<CourseDetail user={user} />} />
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/login" />} /> 
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
