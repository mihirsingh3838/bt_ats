import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login_Page/Login';

import Dashboard from './Admin/Pages/AdminDashboard';
import RegistrationForm from './Admin/Pages/Registration';
import EmployeeDashboard from './Employee/Pages/EmployeeDashboard';

/*const AppLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
