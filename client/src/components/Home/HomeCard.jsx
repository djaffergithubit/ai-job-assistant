import React from 'react'
import {motion} from 'motion/react'

const HomeCard = ({ functionality, isProcess }) => {

  return (
    <motion.div 
      initial={{ scale: 1, background: 'white' }}
      whileHover={{ scale: !isProcess && 1.05, backgroundColor: !isProcess && '#f0f9ff' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-start gap-3 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow lg:col-span-4 ${isProcess ? ' col-span-12 relative' : 'sm:col-span-6 col-span-12'}`}
    >
        {isProcess && <>
          <div className=' absolute h-full lg:flex hidden items-center justify-center -right-4 top-0'>
            <div className={`${[1, 2].find((el) => el === functionality.id ) ? 'block' : 'hidden'} border-[3px] border-solid border-green-500 text-green-500 p-1.5 rounded-full `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4" data-lov-id="src/components/HowItWorksSection.tsx:36:12" data-lov-name="ArrowRight" data-component-path="src/components/HowItWorksSection.tsx" data-component-line="36" data-component-file="HowItWorksSection.tsx" data-component-name="ArrowRight" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
          <div className=' text-6xl font-bold text-sky-100 mb-2'>
            0{functionality.id}
          </div>
        </>}
        <div className=' px-3.5 py-3.5 rounded-lg bg-button mb-2'>
          {functionality.icon}
        </div>
        <h3 className=' text-lg font-semibold'>{functionality.title}</h3>
        <p className=' text-base text-[#7588A3]'>{functionality.description}</p>
        <ul className="list-disc list-inside text-sm text-[#7588A3]">
          {functionality.options?.map((option, index) => (
            <li className={`mb-2 ${!isProcess && 'flex items-start'} text-green-500 marker:text-base`} key={index}>
              {!isProcess && (
                <span className="text-green-400 mr-2 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big w-4 h-4 text-accent flex-shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </span>
              )}
              <span className='text-[#7588A3]'>{option}</span>
            </li>
          ))}
        </ul>

    </motion.div>
  )
}

export default HomeCard