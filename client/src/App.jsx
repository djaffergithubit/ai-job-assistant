import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Dashboard/Sidebar'
import NewCodidature from './pages/NewCandidature'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSidebar, showSidebarState } from './utils/state/showSidebarSlice'

const App = () => {

  const showSidebar = useSelector(showSidebarState)
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  const dispatch = useDispatch()

  return (
    <main className={`${isDashboardRoute ? "flex items-start" : ""} bg-gray-50`}>
      {isDashboardRoute && <Sidebar />}
      <div className=' relative w-full'>
        {showSidebar && isDashboardRoute ? <div className=' lg:hidden absolute w-full h-full bg-black/30 z-10' onClick={() => dispatch(setShowSidebar({ value: false }))}></div> : ''}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/new" element={<NewCodidature />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}

export default App