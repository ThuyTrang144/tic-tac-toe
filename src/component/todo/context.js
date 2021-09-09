import React from 'react'

export const TodoContext = React.createContext({ 
    state: {
        todoList: [], 
        filterValue: 'value', 
    },
   addNewtodo: () => {},
    editTodo: () => {},
    searchTodo: () => {}
})
