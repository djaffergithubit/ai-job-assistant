import React from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

const MainBtn = ({ content }) => {

  const Navigate = useNavigate()

  const onClickMainBtn = () => {
    content.includes("Commancer gratuitement") ? Navigate('/dashboard') : ''
  }

  return (
    <motion.button 
      initial = {{ scale: 1 }}
      whileHover = {{ scale: 1.03 }}
      transition = {{ duration: 0.3 }}
      className=' text-base col-span-7 h-full font-medium cursor-pointer bg-button px-3.5 py-2.5 rounded-md w-full flex items-center justify-center gap-x-1.5 ml-auto'
      type='submit'
      // onClick={onClickMainBtn}
    >
      {content}
    </motion.button>
  )
}

export default MainBtn