import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
import Todo from './Todo';

export function TodoList() {
    const todoList = useSelector(state => state.todoList);
    console.log('todo', todoList);
    const searchValue = useSelector(state => state.searchValue);
    const renderTodoList = (todoList, searchValue) => {
        const searchResult = todoList.filter(item => item.todoTitle.toLowerCase().startsWith(searchValue))
        const newList = (searchValue.length !== 0) ? searchResult : todoList
        const  renderList = newList.map(item => 
            <Todo
                todoTitle={item.todoTitle} 
                key={item.id} 
                id={item.id}
            />
        )
        if (searchResult.length === 0 && searchValue.length !== 0) {
            return <p className="search-result">There is no todo match with your search. Please add a new one.</p>
        } else return renderList;
    }

    return (
        renderTodoList(todoList, searchValue)
    )
};