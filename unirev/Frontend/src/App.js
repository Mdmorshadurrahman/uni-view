import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import UniversityDetails from './pages/UniversityDetails';
import Universities from './pages/Universities'; // Component listing universities
import FacultyList from './pages/FacultyList';  // Assuming this component is created
import Navbar from './components/Navbar';
import Login from './pages/AuthForm';
import ChatBox from './components/Chatbox';
import DepartmentDetails from './components/DepartmentDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedStatus === 'true');
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status.toString());
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogin={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university/:id" element={isLoggedIn ? <UniversityDetails /> : <Navigate to="/login" />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/faculty" element={<FacultyList />} />
        <Route path="/faculty/:universityId/department/:departmentName" element={<DepartmentDetails />} />
        <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" replace />} />
      </Routes>
      {isLoggedIn && <ChatBox isVisible={isLoggedIn} />}
    </Router>
  );
}

export default App;
