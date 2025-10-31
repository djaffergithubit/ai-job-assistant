import { FileText } from 'lucide-react'
import FormBtns from './formBtns'
import { useDispatch } from 'react-redux'
import { NextStep } from '../../utils/state/stepSlice'
import axios from "axios"
import { useEffect } from 'react'

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles w-5 h-5 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>

const JobOffer = ({ 
  file, 
  setFile, 
  input, 
  setInput,
  setAiResponse
}) => {

    const dispatch = useDispatch()
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setInput((prevInput) => {
        return {
          ...prevInput, 
          [name]: value
      }
      })}

    const sendResumeAndJobOffer = async (data) => {
      await axios.post(`${import.meta.env.VITE_API_URL}/candidates/new-candidate`, data)
      .then((res) => {        
        setFile(null)
        setAiResponse((prevResponse) => {
          return {
            ...prevResponse,
            enhancementsMade: `${res.data?.data}`.split("Part 2: Enhanced Resume")[0]?.replace("Part 1: Resume Enhancements", ""),
            motivationLetter: 'Dear' + `${res.data.data}`.split("Part 3: Motivation Letter")[1]?.split("Dear")[1],
            // enhancedResume: `${res.data.data}`.split("Part 2: ")[1].split("Part 3: ")[0]?.replace("Enhanced Resume", "")
          }
        })
        dispatch(NextStep())
      })
      .catch((err) => {
        console.log(err);
      })
    }

    const handleResumeJobOfferSubmit = async (e) => {
        
      e.preventDefault()

      const formData = new FormData()
      formData.append('file', file)
      formData.append("jobOffer", input.jobOffer)
      formData.append("resumeTxt", input.resumeTxt)
      formData.append("letterLanguage", input.letterLanguage)
      formData.append("letterTone", input.letterTone)
      if ((file != null || input.resumeTxt != '') && input.jobOffer != '' && input.letterLanguage != '' && input.letterTone != '') {
        await sendResumeAndJobOffer(formData)
      }
    }

    useEffect(() => {
      console.log("input data", input);
    }, [input])

  return (
    <section className=' bg-white px-6 py-3.5 lg:mx-12 md:mx-0 rounded-xl border-[2px] border-solid border-gray-100'>
      <div className=' flex flex-col items-start gap-y-0.5'>
        <h4 className=' flex items-center gap-x-2 text-2xl font-medium'>
          <FileText className=' w-5' /> Offre d'emploi
        </h4>
        <p className=' text-sm text-[#7588A3]'>Collez l'annonce d'emploi pour personnaliser votre candidature</p>
      </div>

      <form onSubmit={handleResumeJobOfferSubmit} encType='multipart/form-data'>
        <br />
        <div className=' flex flex-col gap-y-3.5'>
            <label htmlFor="jobOffer">Offre d'emploi <span className=' text-red-500'>*</span></label>
            <textarea 
            name="jobOffer" 
            id="" 
            placeholder={`Collez ici l'offre d'emploi complète (description, compétences requises, missions...)

Exemple:
Nous recherchons un Développeur Full-Stack pour rejoindre notre équipe dynamique.
Missions:
- Développement d'applications web
- Collaboration en équipe agile
- Maintenance et optimisation

Compétences requises:
- React, Node.js, TypeScript
- Expérience en base de données
- Autonomie et créativité"
                `} 
              rows={14} 
              onChange={handleInputChange}
              value={input.jobOffer}
              minLength={500}
              required
              className=' text-sm text-gray-900 bg-gray-50 p-3.5 border-[1.5px] border-solid border-gray-200 rounded-md outline-blue-500 placeholder:text-[#7588A3]'></textarea>
        </div>
        <br />
        <div className=' flex items-center gap-x-3.5'>
            <div className=' flex flex-col gap-y-1.5 w-full'>
                <label className=' text-sm' htmlFor="letterLanguage">Langue de la lettre</label>
                <select name="letterLanguage" id="" value={input.letterLanguage} onChange={handleInputChange} className=' w-full px-2.5 py-2.5 rounded-xl outline-blue-500 bg-gray-50 border-2 border-gray-100 text-sm'>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Espagnol">Espagnol</option>
                </select>
            </div>
            <div className=' flex flex-col gap-y-1.5 w-full'>
                <label className=' text-sm' htmlFor="letterTone">Ton de la lettre</label>
                <select name="letterTone" id="" value={input.letterTone} onChange={handleInputChange} className=' w-full px-2.5 py-2.5 rounded-xl outline-blue-500 bg-gray-50 border-2 border-gray-100 text-sm'>
                    <option value="Proffessionnel">Proffessionnel</option>
                    <option value="Chaleureux">Chaleureux</option>
                    <option value="Dynamique">Dynamique</option>
                    <option value="Formel">Formel</option>
                </select>
            </div>
        </div>
        <br />
        <FormBtns setInput={setInput} content={<div className=' flex items-center gap-x-2.5'>{icon} Générer la lettre</div>} />
      </form>
    </section>
  )
}

export default JobOffer