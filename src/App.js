import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ManageCompanies from './pages/ManageCompanies';
import ManageCommunicationMethods from './pages/ManageCommunicationMethods';
import CalendarView from './pages/CalendarView';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Menu */}
        <nav style={{ marginBottom: '20px', background: '#f4f4f4', padding: '10px' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/manage-companies">Manage Companies</Link></li>
            <li><Link to="/manage-communication-methods">Manage Communication Methods</Link></li>
            <li><Link to="/calendar-view">Calendar View</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-companies" element={<ManageCompanies />} />
          <Route path="/manage-communication-methods" element={<ManageCommunicationMethods />} />
          <Route path="/calendar-view" element={<CalendarView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
