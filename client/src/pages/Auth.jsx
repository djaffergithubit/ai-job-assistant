import { ArrowLeft, Lock, Mail, User, XCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MainBtn from '../components/MainBtn';
import { useState } from 'react';
import { loginUser, registerUser } from '../api/authApi';
import { validatePassword } from '../utils/utils';
import { useDispatch } from 'react-redux';

const Auth = () => {

    const [hasAccount, setHasAccount] = useState(true)
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState([]);
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prevUser) => {
            return {
                ...prevUser,
                [name]: value
            }
        })
        if (name === 'password') {
            validatePassword(value, setErrors)
        }
    }   

    const onSubmit = async (e) => {
        e.preventDefault()
        
        if (!hasAccount) {
            if (user.password === user.confirmPassword) {
                await registerUser(user, setHasAccount)
            }else{
                alert("Unmatched password!!")
            }
        }else{
            await loginUser(user, Navigate, dispatch)
        }
    }

  return (
    <main className=' py-8 px-6'>
        <div>
            <button className=' flex items-center text-sm gap-x-2 px-2.5 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer rounded-md' onClick={() => Navigate("/")}><ArrowLeft className=' w-4.5' /> Retour à l'acceuil</button>
        </div>
        <br />
        <section className=' max-w-md w-full bg-white mx-auto p-8 rounded-2xl border-solid border-[1px] border-gray-300 shadow-xl'>
            <div className=' flex flex-col items-center justify-center h-full gap-y-2.5'>
                <div className=' bg-button text-white py-2 px-2.5 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-7 h-7 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                </div>
                <h3 className=' text-lg font-semibold text-gray-900'>{hasAccount ? "Connexion" : "Créer un compte"}</h3>
                <p className=' text-base text-gray-400'>{hasAccount ? "Connectez-vous pour accéder à votre compte" : "Créez votre compte pour commencer"}</p>
            </div>
            <br />
            <form className=' flex flex-col gap-y-2.5' onSubmit={onSubmit}>
                {!hasAccount && <div className=' flex flex-col gap-y-1.5'>
                    <label className=' text-sm font-medium text-gray-900' htmlFor="fullName">Nom complet</label>
                    <div className=' relative w-full flex items-center h-full'>
                        <input 
                            className=' pl-10 pr-3 py-2.5 rounded-md border-[1px] border-solid border-gray-300 outline-blue-600 bg-gray-50 text-sm w-full placeholder:text-gray-400' 
                            placeholder='écrivez votre nom complet....' 
                            type="text" 
                            name="fullName" 
                            id="" 
                            value={user.fullName}
                            onChange={handleChange}
                            required
                            />
                        <div className='  absolute h-full flex items-center justify-center max-w-10 w-full'>
                            <User className='w-4 text-gray-400' />
                        </div>
                    </div>
                </div>}
                <div className=' flex flex-col gap-y-1.5'>
                    <label className=' text-sm font-medium text-gray-900' htmlFor="email">Email</label>
                    <div className=' relative w-full flex items-center h-full'>
                        <input 
                            className=' pl-10 pr-3 py-2.5 rounded-md border-[1px] border-solid border-gray-300 outline-blue-600 bg-gray-50 text-sm w-full placeholder:text-gray-400' 
                            placeholder='vous@gmail.com' 
                            type="email" 
                            name="email" 
                            id="" 
                            value={user.email}
                            onChange={handleChange}
                            required
                            />
                        <div className='  absolute h-full flex items-center justify-center max-w-10 w-full'>
                            <Mail className='w-4 text-gray-400' />
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-y-1.5 mb-1.5'>
                    <label className=' text-sm font-medium text-gray-900' htmlFor="password">Mot de passe</label>
                    <div className=' relative w-full flex items-center h-full'>
                        <input 
                            className=' pl-10 pr-3 py-2.5 rounded-md border-[1px] border-solid border-gray-300 outline-blue-600 bg-gray-50 text-sm w-full placeholder:text-gray-400' 
                            placeholder='********' 
                            type="password" 
                            name="password" 
                            id="" 
                            value={user.password}
                            onChange={handleChange}
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
                    {hasAccount && <p className=' text-xs font-medium text-blue-500 w-full text-right cursor-pointer' ><Link to={"/forgot-password"}>Mot de passe oublié?</Link> </p>}
                </div>
                {!hasAccount && <div className=' flex flex-col gap-y-1.5 mb-1.5'>
                    <label className=' text-sm font-medium text-gray-900' htmlFor="confirmPassword">Confirmer mot de passe</label>
                    <div className=' relative w-full flex items-center h-full'>
                        <input 
                            className=' pl-10 pr-3 py-2.5 rounded-md border-[1px] border-solid border-gray-300 outline-blue-600 bg-gray-50 text-sm w-full placeholder:text-gray-400' 
                            placeholder='********' 
                            type="password" 
                            name="confirmPassword" 
                            id="" 
                            value={user.confirmPassword}
                            onChange={handleChange}
                            />
                        <div className='  absolute h-full flex items-center justify-center max-w-10 w-full'>
                            <Lock className='w-4 text-gray-400' />
                        </div>
                    </div>
                </div>}
                <MainBtn content={hasAccount ? "se connecter " : "Créer un compte"} />
                <button className=' pr-3 py-2.5 rounded-md bg-gray-50 border-[1.5px] border-solid border-gray-300 text-gray-900 text-sm cursor-pointer'>Continuez avec Google</button>
                <div className=' text-center mt-1.5 text-sm text-gray-400 cursor-pointer' onClick={() => {setHasAccount(!hasAccount); setErrors([])}}>
                    {hasAccount ? "Pas encore de compte ? Inscrivez-vous" : "Déjà un compte ? Connectez-vous"}
                </div>
            </form>
        </section>
    </main>
  )
}

export default Auth