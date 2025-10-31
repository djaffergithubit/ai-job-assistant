import { Building, Calendar, Download, FileText, RotateCcw } from 'lucide-react';

const SingleCondidature = () => {
  return (
    <div className=' w-full flex items-center justify-between gap-2 py-3.5 px-6 rounded-md bg-white hover:bg-gray-50 border-[1px] border-solid border-gray-200'>
        <div className=' flex flex-col items-start gap-y-1.5'>
            <div className=' flex items-center'>
                <h5 className=' text-gray-900 text-sm font-semibold'>Développeur Full-Stack</h5>
                <span className=' px-2.5 py-0.5 rounded-full bg-amber-400 text-white ml-1.5 text-xs'>En attente</span>
            </div>
            <div className=' flex items-center text-[#7588A3] text-sm'>
                <p className=' flex items-center'><Building className=' mr-0.5 w-4' /> TechCorp</p>
                <p className=' flex items-center ml-2.5'><Calendar className=' mr-0.5 w-4' /> 15/01/2024</p>
            </div>
        </div>
        <div className=' flex items-center justify-between gap-x-2.5'>
            <button className=' bg-gray-50 flex items-center px-3 py-1.5 rounded-md text-sm font-medium border-[1.5px] border-solid border-gray-200 cursor-pointer hover:bg-[#30BF97] hover:text-white'><FileText className='  mr-1.5 w-4' /> Voir</button>
            <button className='border-[1.5px] border-solid border-gray-200 bg-gray-50 flex items-center px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer hover:bg-[#30BF97] hover:text-white'><Download className='  mr-1.5 w-4' /> Export</button>
            <button className=' cursor-pointer border-[1.5px] border-solid border-gray-200 bg-gray-50 flex items-center px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#30BF97] hover:text-white '><RotateCcw className=' mr-1.5 w-4' /> Regénerer</button>
        </div>
    </div>
  )
}

export default SingleCondidature