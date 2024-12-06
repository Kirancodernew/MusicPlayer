import React from 'react';
import MusicPlayer from './pages/MusicPlayer';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  // If token is not available, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/music' element={<ProtectedRoute><MusicPlayer /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
