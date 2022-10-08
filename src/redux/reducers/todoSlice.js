import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],

    reducers: {
        addTodo: (state = todoSlice.initialState, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                complete: false
            }

            state.push(todo)
        },

        toogleComplete:(state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed
        },

        removeTodo:(state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        }
    }
})

export const { addTodo, toogleComplete, removeTodo } = todoSlice.actions
export default todoSlice.reducer