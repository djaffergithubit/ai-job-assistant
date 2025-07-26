import React from 'react'
import MainBtn from '../MainBtn'
import { ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { PreviousStep, stepState } from '../../utils/state/stepSlice'

const FormBtns = ({ content }) => {

    const currentStep = useSelector(stepState)
    const dispatch = useDispatch()

  return (
    <div className=' flex items-stretch justify-between gap-x-3.5'>
        <div className=' w-full'>
            {currentStep == 1 
            ? 
                <button className=' px-3.5 py-1.5 text-gray-900 rounded-md flex items-center gap-x-4 border-[1.5px] border-solid border-gray-100 h-full bg-gray-50 cursor-pointer hover:bg-[#30BF97] hover:text-white' onClick={() => dispatch(PreviousStep())}><ArrowLeft className=' w-4 h-4' /> Retour</button>
            :
                ""
            }
        </div> 
        <div className='flex items-center max-w-[180px] w-full '>
            <MainBtn 
                content={content}
            />
        </div>
    </div>
  )
}

export default FormBtns