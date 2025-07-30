import { Copy, FileText } from 'lucide-react'
import React from 'react'
import MainBtn from '../MainBtn'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initializeStep } from '../../utils/state/stepSlice'

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-5 h-5 text-gray-900"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>

const LetterGeneration = () => {

  const Navigate = useNavigate()
  const dispatch = useDispatch()

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
      <div className=' flex md:flex-row flex-col items-start md:gap-x-3.5 gap-y-3.5 justify-between'>
        <div className=' w-full py-5 px-7 rounded-xl border-2 border-solid border-gray-100'>
          <h3 className=' flex items-center gap-x-2 font-medium'><FileText className=' text-green-500 w-6 h-6' /> Lettre de motivation</h3>
          <section className=' mt-4.5 px-4 py-4.5 bg-gray-50 rounded-md text-sm text-[#7588A3]'>
            <span className=' text-gray-900 font-medium'>Aperçu:</span>
            <p className=' mt-3.5'>
              "Madame, Monsieur,

              Passionné par le développement web et fort de mes 3 années d'expérience en React et Node.js..."
            </p>
          </section>
          <br />
          <div className=' flex items-center gap-x-2.5'>
            <button className=' flex items-center gap-x-4.5 px-3.5 py-1.5 rounded bg-gray-50 border-2 border-solid border-gray-100 text-sm hover:bg-[#20Be76] hover:text-white hover:border-[#20Be76] cursor-pointer '><Copy className=' w-4 h-4' /> Editer</button>
            <button className='px-3.5 py-1.5 rounded bg-gray-50 border-2 border-solid border-gray-100 text-sm hover:bg-[#20Be76] hover:text-white hover:border-[#20Be76] cursor-pointer '>Télécharger PDF</button>
          </div>
        </div>
        <div className=' w-full py-5 px-7 rounded-xl border-2 border-solid border-gray-100'>
          <h3 className=' flex items-center gap-x-2 font-medium'><FileText className=' text-blue-500 w-6 h-6' /> CV optimisé</h3>
          <section className=' mt-4.5 px-4 py-4.5 bg-gray-50 rounded-md text-sm text-[#7588A3]'>
            <span className=' text-gray-900 font-medium'>Améliorations:</span>
            <ul className=' mt-3.5'>
              <li>Mots-clés optimisés pour l'ATS</li>
              <li>Compétences mises en avant</li>
              <li>Expériences pertinentes</li>
            </ul>
          </section>
          <br />
          <div className=' flex items-center gap-x-2.5'>
            <button className=' flex items-center gap-x-4.5 px-3.5 py-1.5 rounded bg-gray-50 border-2 border-solid border-gray-100 text-sm hover:bg-[#20Be76] hover:text-white hover:border-[#20Be76] cursor-pointer '><Copy className=' w-4 h-4' /> Voir</button>
            <button className='px-3.5 py-1.5 rounded bg-gray-50 border-2 border-solid border-gray-100 text-sm hover:bg-[#20Be76] hover:text-white hover:border-[#20Be76] cursor-pointer '>Télécharger PDF</button>
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-12 place-items-stretch sm:gap-x-5 gap-y-1.5 mt-5'>
        <div className=' lg:col-span-9 sm:col-span-7 col-span-12 w-full'>
          <button className='hover:bg-[#20Be76] hover:text-white hover:border-[#20Be76]  px-2.5 sm:py-1.5 py-2 h-full text-sm cursor-pointer rounded-md border-2 border-solid border-gray-100  sm:w-auto w-full' onClick={() => dispatch(initializeStep())}>Créer une nouvelle candidature</button>
        </div>
        <div className=' lg:col-span-3 sm:col-span-5 col-span-12 w-full' onClick={() => {Navigate('/dashboard'), dispatch(initializeStep())}}>
          <MainBtn content={"Aller au dashboard"}/>
        </div>
      </div>
    </section>
  )
}

export default LetterGeneration