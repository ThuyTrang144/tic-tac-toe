import React, { useContext, useState } from 'react';
import { Input, TodoList } from './component';
import { TodoContext } from './context';
import './style.scss';
 
function App() {
    const context = useContext(TodoContext)
    const [todoList, setTodoListState] = useState(context.state.todoList);
    const [filterValue, setFilterValueState] = useState(context.state.filterValue);
    function deleteTodo(todoId) {
        const todoIndex = todoList.findIndex(item => item.id === todoId);
        todoList.splice(todoIndex, 1);
        setTodoListState([...todoList]);
    }
    function editTodo(todoId, text) {
        const todoIndex = todoList.findIndex(item => item.id === todoId);
        todoList[todoIndex].todoTitle = text;
        setTodoListState([...todoList])
    }
    function addNewTodo() {
        const newTodo = {
            id: Math.random().toString().substring(2),
            todoTitle: filterValue
        };
        console.log('new todo', newTodo)
        setTodoListState([
            newTodo,
            ...todoList
        ])
        setFilterValueState('')
        return todoList;
    }
    function searchTodo (text) {
        const filterValue = text;
        setFilterValueState(filterValue);
    }
    return (
        <TodoContext.Provider
            value={{
                state: { todoList, filterValue },
                editTodo: editTodo,
                deleteTodo: deleteTodo,
            }}>
            <div className='adding-box'>
                <Input
                    onChange={searchTodo}
                    onSubmit={addNewTodo}
                    placeholder='Add new todo'>
                </Input>
                <button 
                    className='add-btn'>
                    Add
                </button>
            </div>
            <TodoList />
        </TodoContext.Provider >

    );
}

export default App;
