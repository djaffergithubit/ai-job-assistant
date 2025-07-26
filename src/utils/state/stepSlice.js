import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("stepState")) || 0
const stepStateSlice = createSlice({
    initialState,
    name: "stepState",
    reducers: {
        NextStep: (state) => {
            const nextStep = state + 1
            nextStep <= 2 && localStorage.setItem("stepState", JSON.stringify(nextStep))
            return nextStep <= 2 ? nextStep : state
        },
        PreviousStep: (state) => {
            const previousStep = state - 1
            previousStep >= 0 && localStorage.setItem("stepState", JSON.stringify(previousStep)) 
            return previousStep >= 0 ? previousStep : state
        },

        initializeStep: (state) => {
            const newState = 0
            localStorage.setItem("stepState", JSON.stringify(newState))
            return newState
        }
    }
})

export const stepState = (state) => state.stepState
export const { NextStep, PreviousStep, initializeStep } = stepStateSlice.actions
export default stepStateSlice.reducer