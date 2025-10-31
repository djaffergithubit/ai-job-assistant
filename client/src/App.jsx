import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Dashboard/Sidebar'
import NewCodidature from './pages/NewCandidature'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSidebar, showSidebarState } from './utils/state/showSidebarSlice'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import { authSelector } from './utils/state/authSlice'

const App = () => {

  const auth = useSelector(authSelector)
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
          <Route path='/auth' element={!auth.isAuth ? <Auth /> : <Navigate to={"/"} />} />
          <Route path="/dashboard" element={auth.isAuth ? <Dashboard /> : <Navigate to={"/auth"} replace />} />
          <Route path="/dashboard/new" element={auth.isAuth ? <NewCodidature /> : <Navigate to={"/auth"} replace />} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default App