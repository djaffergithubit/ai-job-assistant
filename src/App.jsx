import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Dashboard/Sidebar'
import NewCodidature from './pages/NewCodidature'

const App = () => {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <main className={`${isDashboardRoute ? "flex items-start" : ""}`}>
      {isDashboardRoute && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/new" element={<NewCodidature />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App