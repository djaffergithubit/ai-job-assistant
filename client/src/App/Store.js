import { configureStore } from "@reduxjs/toolkit"
import showSidebarReducer from "../utils/state/showSidebarSlice"
import stepStateReducer from "../utils/state/stepSlice"
import authReducer from "../utils/state/authSlice"

export const Store = configureStore({
    reducer: {
        showSidebar: showSidebarReducer,
        stepState: stepStateReducer,
        auth: authReducer
    }
})