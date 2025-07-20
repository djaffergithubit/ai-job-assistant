import React, { useState } from 'react'
import Logo from './Logo'
import { motion } from 'motion/react'
import MainBtn from './MainBtn'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const Navigate = useNavigate()

  return (
    <header className=' fixed top-0 w-full z-20 bg-white'>
        <nav className=' flex items-center justify-between px-3.5 py-1.5 text-base border-b-[1.5px] border-solid border-gray-200 z-0'>
            <Logo />
            <>
                <ul className={`lg:flex hidden items-center gap-3.5 py-2 text-[#7588A3] font-normal`}>
                    <li className=' cursor-pointer hover:text-gray-950'>Fonctionnalités</li>
                    <li className=' cursor-pointer hover:text-gray-950'>Comment ça marche</li>
                    <li className=' cursor-pointer hover:text-gray-950'>Demo</li>
                </ul>
                <ul className=' lg:flex hidden items-stretch gap-3.5 py-2'>
                    <motion.li 
                        initial = {{ backgroundColor: "white ", color: '#101828' }}
                        whileHover = {{ backgroundColor: '#00c950', color: 'white' }}
                        transition = {{ duration: 0.1 }}
                        className=' cursor-pointer flex items-center font-medium px-3.5 py-1 rounded-xl text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in w-4 h-4 mr-2" data-lov-id="src/components/Header.tsx:37:12" data-lov-name="LogIn" data-component-path="src/components/Header.tsx" data-component-line="37" data-component-file="Header.tsx" data-component-name="LogIn" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" x2="3" y1="12" y2="12"></line></svg>
                            Se connecter
                    </motion.li>
                    <motion.li 
                        initial = {{ scale: 1 }}
                        whileHover = {{ scale: 1.03 }}
                        transition = {{ duration: 0.3 }}
                        className=' cursor-pointer bg-button px-3.5 py-2 rounded-lg hover:scale-105 text-sm'
                        onClick={() => Navigate('/dashboard/')}
                    >
                            Commencer gratuitement
                    </motion.li>
                </ul>
            </>
            <button className=' lg:hidden block p-1.5 rounded-md cursor-pointer hover:bg-green-500 hover:text-white' onClick={() => setShowMenu(!showMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-5 h-5" data-lov-id="src/components/Header.tsx:52:10" data-lov-name="Menu" data-component-path="src/components/Header.tsx" data-component-line="52" data-component-file="Header.tsx" data-component-name="Menu" data-component-content="%7B%22className%22%3A%22w-5%20h-5%22%7D"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
        </nav>
        {showMenu && <div className=' px-3.5 py-1.5 bg-white'>
                <ul className='lg:hidden flex flex-col items-start gap-3.5 py-2 text-[#7588A3] font-normal  border-b-[1.5px] border-solid border-gray-200'>
                    <li className=' cursor-pointer hover:text-gray-950'>Fonctionnalités</li>
                    <li className=' cursor-pointer hover:text-gray-950'>Comment ça marche</li>
                    <li className=' cursor-pointer hover:text-gray-950'>Demo</li>
                </ul>
                <ul className=' lg:hidden flex flex-col items-start gap-3.5 py-2'>
                    <li className=' cursor-pointer text-shadow-gray-900 flex items-center font-medium hover:bg-green-500 hover:text-white px-3.5 py-1.5 rounded-xl w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in w-4 h-4 mr-2" data-lov-id="src/components/Header.tsx:37:12" data-lov-name="LogIn" data-component-path="src/components/Header.tsx" data-component-line="37" data-component-file="Header.tsx" data-component-name="LogIn" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" x2="3" y1="12" y2="12"></line></svg>
                        Login
                    </li>
                    <MainBtn content={"Commancer gratuitement"} />
                </ul>
            </div>}
    </header>
  )
}

export default NavBar