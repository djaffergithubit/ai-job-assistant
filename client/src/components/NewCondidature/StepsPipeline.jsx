import { useSelector } from 'react-redux'
import { stepState } from '../../utils/state/stepSlice'
import { CircleCheckBig } from 'lucide-react'

const steps = [
    {
        id: "1",
        name: "Upload CV",
        action: "Importez votre CV"
    },

    {
        id: "2",
        name: "Offre d'emploi",
        action: "Collez l'annonce"
    }, 
    {
        id: "3",
        name: "Génération",
        action: "Création des documents"
    }
]

const StepsPipeline = () => {

    const currentStep = useSelector(stepState)

  return (
<div className=' grid grid-cols-12 place-items-stretch h-full w-full py-3.5'>
        {steps.map((step, index) => (
            <div className=' col-span-4 flex w-full items-center justify-between h-full' key={index}>
                <div key={index} className=' flex flex-col items-stretch gap-y-1.5 w-full'>
                    <div className={`flex items-center justify-center gap-x-7.5 mb-3.5`}>
                        <span className={` rounded-full border-2 border-solid ${index <= currentStep ? ' bg-blue-600 text-white border-blue-600' : 'border-gray-400 bg-gray-50 text-gray-900'}  ${index >= currentStep ? 'py-1 px-3 ' : "p-1"}`}>{index < currentStep ? <CircleCheckBig /> : step.id}</span>
                        <div className='w-28'>
                            <hr className={` ${ index < currentStep ? ' border-blue-500 border-solid' : 'border-solid border-gray-100'} ${index < 2 ? 'border-t-2' : ' border-none'} line-through block w-full`} />
                        </div>
                    </div>
                    <div className=' flex flex-col items-center text-sm h-full'>
                        <p className=' text-gray-900 font-medium '>{step.name}</p>
                        <p className='text-[#7588A3]'>{step.action}</p>
                    </div>
                </div>
            </div>
        )) }
    </div>
  )
}

export default StepsPipeline