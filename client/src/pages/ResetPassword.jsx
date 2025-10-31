import { ArrowLeft, Lock, XCircle } from 'lucide-react';
import MainBtn from '../components/MainBtn';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { validatePassword } from '../utils/utils';
import axios from 'axios';

const ResetPassword = () => {

    const { token } = useParams()
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [errors, setErrors] = useState([]);
    const Navigate = useNavigate()

    const ModifyPassword = async (newPassword) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/modify-password`, {
                newPassword: newPassword,
                token: token
            })

            console.log("forget password data", res.data);
            setLoading(false)
            Navigate('/auth')
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (newPassword === confirmNewPassword) {
         await ModifyPassword(newPassword) 
        }else{
          alert("Unmatched Password!! Please try again.")
        }
    }

    useEffect(() => {
      console.log("token", token);
    }, [token])

  return (
    <main className=' py-8 px-6'>
        <div>
            <button className=' flex items-center text-sm gap-x-2 px-2.5 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer rounded-md' onClick={() => Navigate("/auth")}><ArrowLeft className=' w-4.5' /> Retour à la connexion</button>
        </div>
        <br />
        <section className=' max-w-md w-full bg-white mx-auto p-8 rounded-2xl border-solid border-[1px] border-gray-300 shadow-xl'>
            <div className=' flex flex-col items-center justify-center h-full gap-y-2.5'>
                <div className=' bg-button text-white py-2 px-2.5 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-7 h-7 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                </div>
                <h3 className=' text-lg font-semibold text-gray-900'>Mot de passe oublié</h3>
                <p className=' text-base text-gray-400 text-center'>réinitialiser votre mot de passe</p>
            </div>
            <br />
            <form className=' flex flex-col gap-y-2.5' onSubmit={onSubmit}>
              <div className=' flex flex-col gap-y-1.5 mb-1.5'>
                    <label className=' text-sm font-medium text-gray-900' htmlFor="newPassword">Nouveau Mot de passe</label>
                    <div className=' relative w-full flex items-center h-full'>
                        <input 
                            className=' pl-10 pr-3 py-2.5 rounded-md border-[1px] border-solid border-gray-300 outline-blue-600 bg-gray-50 text-sm w-full placeholder:text-gray-400' 
                            placeholder='********' 
                            type="password" 
                            name="newPassword" 
                            id="" 
                            value={newPassword}
                            onChange={(e) => {setNewPassword(e.target.value); validatePassword(e.target.value, setErrors)}}
                            minLength={10}
                            maxLength={100}
                            required
                        />
                        <div className='  absolute h-full flex items-center justify-center max-w-10 w-full'>
                            <Lock className='w-4 text-gray-400' />
                        </div>
                    </div>
                    <ul className="text-red-500 text-xs mt-1">
                        {errors.map((err, i) => (
                        <li key={i} className=' flex items-center gap-x-1.5'><XCircle className='w-4' /> {err}</li>
                        ))}
                    </ul>
                </div>
                  <div className=' flex flex-col gap-y-1.5 mb-1.5'>
                    <label className=' text-sm font-medium text-gray-900' htmlFor="confirmNewPassword">Confirmer le nouveau mot de passe</label>
                    <div className=' relative w-full flex items-center h-full'>
                        <input 
                            className=' pl-10 pr-3 py-2.5 rounded-md border-[1px] border-solid border-gray-300 outline-blue-600 bg-gray-50 text-sm w-full placeholder:text-gray-400' 
                            placeholder='********' 
                            type="password" 
                            name="confirmNewPassword" 
                            id="" 
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            />
                        <div className='  absolute h-full flex items-center justify-center max-w-10 w-full'>
                            <Lock className='w-4 text-gray-400' />
                        </div>
                    </div>
                </div>
                <MainBtn content={loading ? 'Loading...' : "Modifier le mot de passe"} />
            </form>
        </section>
    </main>
  )
}

export default ResetPassword