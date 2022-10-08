import { configureStore } from "@reduxjs/toolkit"

import rootReducer from './reducers/todoSlice'

export default configureStore({
    reducer:{
        todos: rootReducer,
    }
})