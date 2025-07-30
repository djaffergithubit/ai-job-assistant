import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("showSidebar")) || true
const showSidebarSlice = createSlice({
    initialState,
    name: "showSidebar",
    reducers:{
        toggleShowSidebar: (state, action) => {
            const newState = !state
            localStorage.setItem("showSidebar", JSON.stringify(newState))
            return newState
        },

        setShowSidebar: (state, action) => {
            const { value } = action.payload
            const newState = value
            localStorage.setItem("showSidebar", JSON.stringify(newState))
            return newState
        }
    }
})

export const showSidebarState = (state) => state.showSidebar
export const { toggleShowSidebar, setShowSidebar } = showSidebarSlice.actions
export default showSidebarSlice.reducer