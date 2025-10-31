import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepsPipeline from '../components/NewCondidature/StepsPipeline';
import UploadCv from '../components/NewCondidature/UploadCv';
import JobOffer from '../components/NewCondidature/JobOffer';
import LetterGeneration from '../components/NewCondidature/letterGeneration';
import { useSelector } from 'react-redux';
import { stepState } from '../utils/state/stepSlice';

const NewCandidature = () => {

    const [file, setFile] = useState(null)
    const [input, setInput] = useState({
      resumeTxt: "",
      jobOffer: "",
      letterLanguage: "Anglais",
      letterTone: "Proffessionnel",
    })
    const Navigate = useNavigate()
    const currentStep = useSelector(stepState)
    const [aiResponse, setAiResponse] = useState({
      motivationLetter: "",
      enhancementsMade: "",
      enhancedResume: ""
    })

  return (
    <main className=' w-full bg-gray-50 h-full'>
        <header className=' w-full flex items-center gap-x-3 px-2.5 py-3.5 border-b-[1.5px] border-solid border-gray-200 bg-white'>
            <ArrowLeft className=' w-4 cursor-pointer' onClick={() => Navigate(-1)}/>
            <div className=' flex flex-col items-start'>
                <h4 className=' text-2xl font-bold text-gray-900'>Nouvelle Condidature</h4>
                <p className=' text-sm text-[#7588A3]'>Créez votre candidature personnalisée</p>
            </div>
        </header>
        <section className=' py-8 md:px-10 sm:px-6 px-3 h-full'>
          <StepsPipeline />
          <br />
          {currentStep === 0 
            ? 
          <UploadCv file={file} setFile={setFile} setInput={setInput} input={input}/>
            : currentStep === 1
            ?
          <JobOffer 
            file={file} 
            setFile={setFile} 
            input={input} 
            setInput={setInput} 
            setAiResponse={setAiResponse}
          />
            :
          <LetterGeneration aiResponse={aiResponse} />}
        </section>
    </main>
  )
}

export default NewCandidature