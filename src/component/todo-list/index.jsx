import React, { useContext } from 'react';
import { TodoContext } from '../../context'
import './style.scss'
import Todo from './Todo';
export function TodoList() {
    function renderTodoList(todoList, filterValue) {   
        const searchResult = todoList.filter(item => item.todoTitle.toLowerCase().startsWith(filterValue))
        const newList = (filterValue.length !== 0) ? searchResult : todoList
        const newTodoList = newList.map( item => 
        <Todo
            todoTitle={item.todoTitle} 
            key={item.id} 
            id={item.id}
            /> )
        if(searchResult.length === 0 && filterValue.length !== 0) {
            return <p className="search-result">There is no todo match with your search. Please add a new one.</p>
        }
        return newTodoList
    }
        return (
            <TodoContext.Consumer>
                {value => {
                    console.log('filterValue', value.state.filterValue);
                    return renderTodoList(value.state.todoList, value.state.filterValue)}}
            </TodoContext.Consumer>
        )
}