import { configureStore } from "@reduxjs/toolkit"
import showSidebarReducer from "../utils/state/showSidebarSlice"
import stepStateReducer from "../utils/state/stepSlice"

export const Store = configureStore({
    reducer: {
        showSidebar: showSidebarReducer,
        stepState: stepStateReducer
    }
})