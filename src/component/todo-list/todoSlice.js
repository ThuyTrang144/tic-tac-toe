import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        todoList: [ 
            {id: 1, todoTitle: 'Cooking'},
            {id: 2, todoTitle: 'English'},    
            {id: 3, todoTitle: 'Coding'},
            {id: 4, todoTitle: 'Eating'}],
        searchValue: ''
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.splice(0, 0, action.payload);
            return state;
        },
        deleteTodo: (state, action) => {
            const todoIndex = state.todoList.findIndex(item => item.id === action.payload);
            state.todoList.splice(todoIndex, 1);
            return state;
        },
        searchTodo: (state, action) => {
            state.searchValue = action.payload;
        },
        updateTodo: (state, action) => {
            const { id, todoTitle } = action.payload
            const todoIndex = state.todoList.findIndex(item => item.id === id);
            state.todoList[todoIndex].todoTitle = todoTitle
            return state;
        }
    }
})
export const { addTodo, deleteTodo, searchTodo, updateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;