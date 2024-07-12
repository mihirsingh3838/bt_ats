import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Admin/Pages/Login/Login';
import Header from './Admin/components/Header';
import Footer from './Admin/components/Footer';
import Dashboard from './Admin/Pages/Dahboard';
import RegistrationForm from './Admin/Pages/Registration/Registration';
import EmployeeDashboard from './Employee/Pages/EmployeeDashboard';

const AppLayout = ({ children }) => {
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
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<AppLayout><RegistrationForm /></AppLayout>} />
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
