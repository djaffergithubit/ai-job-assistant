import axios from "axios";
import { setAuth } from "../utils/state/authSlice";

export const registerUser = async (user, setHasAccount) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, 
        {   
            fullName: user.fullName,
            email: user.email, 
            password: user.password
        })

        console.log(res.data.message);
        setHasAccount(true)
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (user, Navigate, dispatch) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
            email: user.email,
            password: user.password
        }, {
            withCredentials: true
        })

        dispatch(setAuth({ value: true, user: res.data.user }))
        console.log(res.data.message);
        Navigate("/")
    } catch (error) {
        console.log(error);
    }
}

export const logoutUser = async (dispatch, Navigate) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {})
        console.log(res.data);
        dispatch(setAuth({ value: false }))
        Navigate("/auth")
    } catch (error) {
        console.log(error);
    }
}