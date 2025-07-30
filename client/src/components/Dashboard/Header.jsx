import React, { useState } from 'react'
import MainBtn from '../MainBtn'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleShowSidebar } from '../../utils/state/showSidebarSlice'
import { Plus } from 'lucide-react'
import { initializeStep } from '../../utils/state/stepSlice'

const Header = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <header className=' flex items-center justify-between px-2.5 py-3.5 border-b-[1.5px] border-solid border-gray-200'>
        <div className=' flex items-center justify-center mr-4 cursor-pointer' onClick={() => dispatch(toggleShowSidebar())}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-left" data-lov-id="src/components/ui/sidebar.tsx:279:6" data-lov-name="PanelLeft" data-component-path="src/components/ui/sidebar.tsx" data-component-line="279" data-component-file="sidebar.tsx" data-component-name="PanelLeft" data-component-content="%7B%7D"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path></svg>
        </div>
        <div className=' flex flex-col text-gray-900 font-bold text-2xl w-full'>
            Dashboard
            <span className=' text-sm text-[#7588A3] font-normal'>Gérez vos candidatures en cours</span>
        </div>
      <div className=' max-w-[250px] w-full' onClick={() => {Navigate("/dashboard/new"); dispatch(initializeStep())} }>
            <MainBtn content={<div className=' flex items-center gap-x-3.5'><Plus className=' w-4 h-4' /> Nouvelle condidature</div>} />
        </div>
    </header>
  )
}

export default Header