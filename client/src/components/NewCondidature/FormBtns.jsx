import React from 'react'
import MainBtn from '../MainBtn'
import { ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { PreviousStep, stepState } from '../../utils/state/stepSlice'

const FormBtns = ({ content, setInput }) => {

    const currentStep = useSelector(stepState)
    const dispatch = useDispatch()

    const handleBackNavigation = () => {
        dispatch(PreviousStep())
        setInput({
            resumeTxt: "",
            jobOffer: "",
            letterLanguage: "",
            letterTone: ""
        })
    }

  return (
    <div className=' flex items-stretch justify-between gap-x-3.5'>
        <div className=' w-full'>
            {currentStep == 1 
            ? 
                <button className=' px-3.5 py-1.5 text-gray-900 rounded-md flex items-center gap-x-4 border-[1.5px] border-solid border-gray-100 h-full bg-gray-50 cursor-pointer hover:bg-[#30BF97] hover:text-white' onClick={handleBackNavigation}><ArrowLeft className=' w-4 h-4' /> Retour</button>
            :
                ""
            }
        </div> 
        <div className='flex items-center lg:max-w-[180px] max-w-[230px]  w-full '>
            <MainBtn 
                content={content}
            />
        </div>
    </div>
  )
}

export default FormBtns