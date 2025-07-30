import { ChevronRight, FileText, Trash2, Upload } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import FormBtns from './formBtns'
import { useDispatch } from 'react-redux'
import { NextStep } from '../../utils/state/stepSlice'
import ProgressBar from '../ProgressBar'

const UploadCv = ({ file, setFile, setInput, input }) => {
  const fileInputRef = useRef(null)
  const dispatch = useDispatch()
  const [fileLoading, setFileLoading] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            let timerId = setTimeout(() => {
              setFileLoading(false)
              setFile(selectedFile)
              setProgressValue(0)
            }, 4000)

            setFileLoading(true)

            return () => {
              clearTimeout(timerId);
            };
        }
  }

  const handleResumeTxtChange = (e) => {
    setInput((prevInput) => {
      return{
        ...prevInput,
        resumeTxt: e.target.value
      }
    })
  }

  const handleCvSubmit = async (e) => {
    e.preventDefault()
    if (file != null || input.resumeTxt != "") {
      dispatch(NextStep())
    }else{
      console.log("Please fulfill all the fields !!!");
    }
  }

  useEffect(() => {
    if (fileLoading && progressValue < 100) { 
       let timerId = setTimeout(() => {
          setProgressValue((prevValue) => prevValue + 10)
        }, 500)

        return () => {
          clearTimeout(timerId);
        };
    }
    
  }, [fileLoading, progressValue])

  return (
    <section className=' bg-white px-6 py-3.5 lg:mx-12 md:mx-0 rounded-xl border-[2px] border-solid border-gray-100'>
      <div className=' flex flex-col items-start gap-y-0.5 mb-4'>
        <h4 className=' flex items-center gap-x-2 text-2xl font-medium'>
          <Upload className=' w-5' /> Upload de votre CV
        </h4>
        <p className=' text-sm text-[#7588A3]'>
          Glissez-déposez votre CV ou cliquez pour le sélectionner
        </p>
      </div>
      <br />
      <form onSubmit={handleCvSubmit} encType='multipart/form-data'>
        <label
            className={` flex flex-col items-center justify-center gap-y-2.5 py-10 border-2 border-dotted border-gray-300 rounded-md cursor-pointer hover:bg-sky-50 hover:border-blue-500 px-3 ${file || fileLoading ? ' max-w-lg mx-auto w-full px-10' : ''}`}
            onClick={!file ? handleButtonClick : null}
        >
          {fileLoading ? 
              <ProgressBar progressValue={progressValue} /> 
            :
              !file ? <><span>
            <Upload className=' w-10 h-10 text-gray-400' />
            </span>
            <div className=' text-gray-900 text-lg font-medium'>
            Uploadez votre CV
            </div>
            <p className=' text-[#7588A3] text-center'>
            Formats supportés: PDF, DOC, DOCX, TXT (Max 5 MB)
            </p>
            <input
              type='file'
              accept='.pdf,.doc,.docx,.txt'
              onChange={handleFileChange}
              ref={fileInputRef}
              className='hidden'
            />
            <button
            type='submit'
            className='font-medium text-gray-900 px-3.5 py-1.5 rounded-md border-[1.5px] border-solid border-gray-100 bg-gray-50 hover:text-white hover:bg-[#30BF97]'
            >
            Choisir un fichier
            </button>
            </> 
            :
              <div className=' w-full flex items-center justify-between  px-1.5 py-0'>
                <div className=' flex gap-x-4 items-center py-2.5 text-[#7588A3]'>
                  <FileText className=' w-7 h-7' />
                  {file?.name}
                </div>
                <Trash2 className=' text-red-500 z-20 w-5 h-5' onClick={() => setFile(null)} />
              </div>
            }
        </label>
        <br />
        <div className=' grid grid-flow-col w-full place-items-center'>
            <div className='w-full col-span-6'><hr className=' border-t-2 border-gray-400 w-full' /></div>
            <span className=''>ou</span>
            <div className=' col-span-6 w-full'><hr className=' border-t-2 border-gray-400 w-full' /></div>
        </div>
        <br />
        <div className=' flex flex-col gap-y-3.5'>
            <label htmlFor="resumeTxt">Collez votre CV en texte</label>
            <textarea 
              name="resumeTxt" 
              id="" 
              placeholder='Collez ici votre contenue de CV...' 
              rows={8} 
              onChange={handleResumeTxtChange}
              value={input.resumeTxt}
              minLength={500}
              disabled={file != null}
              className=' text-sm text-gray-900 bg-gray-50 p-3.5 border-[1.5px] border-solid border-gray-200 rounded-md outline-blue-500 placeholder:text-[#7588A3]'>
            </textarea>
        </div>
        <br />
        <FormBtns content={<div className=' flex items-center gap-x-2.5'>Continuez <ChevronRight className=' w-5 h-5' /> </div>} />
      </form>
    </section>
  )
}

export default UploadCv