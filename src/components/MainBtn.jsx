import React from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

const MainBtn = ({ content }) => {

  const Navigate = useNavigate()

  return (
    <motion.button 
      initial = {{ scale: 1 }}
      whileHover = {{ scale: 1.03 }}
      transition = {{ duration: 0.3 }}
      className=' text-base col-span-7 h-full font-medium cursor-pointer bg-button px-3.5 py-2.5 rounded-md w-full flex items-center justify-center gap-x-1.5'
      onClick={() => {content.toLowerCase() != 'nouvelle condidature' ? Navigate('/dashboard/') : ''}}
    >
      {content === 'Nouvelle condidature' ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4" data-lov-id="src/pages/Dashboard.tsx:120:22" data-lov-name="item.icon" data-component-path="src/pages/Dashboard.tsx" data-component-line="120" data-component-file="Dashboard.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> : ''}
      {content}
      {content === "Commancer gratuitement" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lov-id="src/components/HeroSection.tsx:54:16" data-lov-name="ArrowRight" data-component-path="src/components/HeroSection.tsx" data-component-line="54" data-component-file="HeroSection.tsx" data-component-name="ArrowRight" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20ml-2%20group-hover%3Atranslate-x-1%20transition-transform%22%7D"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> : ''}
    </motion.button>
  )
}

export default MainBtn