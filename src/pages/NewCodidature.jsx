import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewCodidature = () => {

    const Navigate = useNavigate()

  return (
    <main className=' w-full'>
        <header className=' w-full flex items-center gap-x-3 px-2.5 py-3.5 border-b-[1.5px] border-solid border-gray-200'>
            <ArrowLeft className=' w-4 cursor-pointer' onClick={() => Navigate(-1)}/>
            <div className=' flex flex-col items-start'>
                <h4 className=' text-2xl font-bold text-gray-900'>Nouvelle Condidature</h4>
                <p className=' text-sm text-[#7588A3]'>Créez votre candidature personnalisée</p>
            </div>
        </header>
    </main>
  )
}

export default NewCodidature