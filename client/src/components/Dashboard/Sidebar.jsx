import React from 'react'
import Logo from '../Logo'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showSidebarState } from '../../utils/state/showSidebarSlice'
import { animate, motion, scale } from 'motion/react'
import { initializeStep } from '../../utils/state/stepSlice'

const sideBarElements = [
    {
        name: "Dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard w-4 h-4" data-lov-id="src/pages/Dashboard.tsx:120:22" data-lov-name="item.icon" data-component-path="src/pages/Dashboard.tsx" data-component-line="120" data-component-file="Dashboard.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>, 
        link: "/dashboard"
    },
    {
        name: "Nouvelle condidature",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4" data-lov-id="src/pages/Dashboard.tsx:120:22" data-lov-name="item.icon" data-component-path="src/pages/Dashboard.tsx" data-component-line="120" data-component-file="Dashboard.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>, 
        link: "/dashboard/new"
    },
    {
        name: "Historique",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history w-4 h-4" data-lov-id="src/pages/Dashboard.tsx:120:22" data-lov-name="item.icon" data-component-path="src/pages/Dashboard.tsx" data-component-line="120" data-component-file="Dashboard.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>, 
        link: "/dashboard/history"
    },
    {
        name: "Profil",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-4 h-4" data-lov-id="src/pages/Dashboard.tsx:120:22" data-lov-name="item.icon" data-component-path="src/pages/Dashboard.tsx" data-component-line="120" data-component-file="Dashboard.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>, 
        link: "/dashboard/profile"
    },
    {
        name: "Déconnexion",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out w-4 h-4" data-lov-id="src/pages/Dashboard.tsx:135:18" data-lov-name="LogOut" data-component-path="src/pages/Dashboard.tsx" data-component-line="135" data-component-file="Dashboard.tsx" data-component-name="LogOut" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>, 
        link: "/logout"
    }
]

const Sidebar = () => {

    const showSidebar = useSelector(showSidebarState)
    const Navigate = useNavigate()
    const dispatch = useDispatch()

  return (
        <motion.div 
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`bg-gray-50 lg:w-[300px] lg:sticky fixed z-20 w-[250px] top-0 h-screen ${showSidebar ? 'block' : 'hidden'}`}
        >
            <nav className='flex flex-col border-r-[1.5px] border-solid border-gray-200 h-full'>  
                <div className=' px-1.5 py-1.5 border-r-[1.5px] border-b-[1.5px] border-solid border-gray-200 w-[250px]'>
                    <Logo />
                </div>
                <h3 className=' text-sm text-gray-700 font-medium pt-8 px-1.5'>Navigation</h3>
                <br />
                <ul className='flex flex-col h-full px-1.5 pb-3 gap-y-2.5'>
                    {sideBarElements.map((el, index) => (
                        <li
                            className={` flex items-center gap-x-1.5 cursor-pointer ${el.name === 'Déconnexion' ? 'mt-auto pb-3 pt-5 text-red-500 border-t-2 border-solid border-gray-200' : ''}`}
                            key={index}
                            onClick={() => {Navigate(el.link); el.link == "/dashboard/new" ? dispatch(initializeStep()) : ''}}
                        >
                            {el.icon}
                            <span className={`text-sm ${el.name === "Déconnexion" ? ' text-red-500': 'text-gray-900'}`}>{el.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.div>
  )
}

export default Sidebar