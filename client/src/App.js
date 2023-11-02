import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Demo from './components/auth/ReactLogin';
import Home from './Home';

import SignupPage from './views/Signup';
import LoginPage from './views/Login';

function App() {
  return (
  <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<Demo />} />
          </Routes>
        </BrowserRouter>
      </div>
  </div>
  );
}

export default App;
