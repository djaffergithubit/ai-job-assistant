import React from 'react'
import { 
    Filter,
    Search
 } from "lucide-react"
import SingleCondidature from './singleCondidature'

const RecentCondidatureSearchBar = () => {
  return (
    <div className=' flex items-center justify-between'>
        <div className=' flex flex-col items-start w-full'>
            <h4 className=' text-2xl font-medium text-gray-900'>Candidatures récentes</h4>
            <p className=' text-sm text-[#7588A3]'>Vos dernières candidatures et leur statut</p>
        </div>
        <div className=' w-full flex items-center gap-x-1.5'>
            <div className=' relative w-full'>
                <input type="text" className=' bg-gray-50 outline-blue-600 py-1.5 pr-3.5 pl-8 rounded-md border-[1.5px] border-solid border-gray-200 w-full' id='' name='' placeholder='Rechercher...' />
                <div className=' absolute top-0 left-0 h-full'>
                    <Search className='mx-1.5 h-full text-sm px-0.5 text-[#7588A3]' />
                </div>
            </div>
            <div className=' py-1.5 px-2.5 rounded-md bg-gray-50 border-[1.5px] border-solid border-gray-200 cursor-pointer hover:bg-[#30BF97] hover:text-white'>
                <Filter className=' w-4' />
            </div>
        </div>
    </div>
  )
}

export default RecentCondidatureSearchBar