import React from 'react'

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-5 h-5 text-gray-900"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>

const LetterGeneration = () => {
  return (
    <section className=' bg-white px-6 py-3.5 lg:mx-12 md:mx-0 rounded-xl border-[2px] border-solid border-gray-100'>
      <div className=' flex flex-col items-start gap-y-0.5'>
        <h4 className=' flex items-center gap-x-2 text-2xl font-medium text-gray-900'>
          {icon} Documents générés
        </h4>
        <p className=' text-sm text-[#7588A3]'>
          Votre lettre de motivation et CV optimisé sont prêts
        </p>
      </div>
        <br />
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default LetterGeneration