import React from 'react'

export const TodoContext = React.createContext({ 
    state: {
        todoList: [
            {id: 1, todoTitle: 'Cooking'},
            {id: 2, todoTitle: 'English'},    
            {id: 3, todoTitle: 'Coding'},
            {id: 4, todoTitle: 'Eating'}
        ], 
        filterValue: '', 
    },
   addNewtodo: () => {},
    editTodo: () => {},
    searchTodo: () => {}
})
