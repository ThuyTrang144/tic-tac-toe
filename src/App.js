import React, { useContext, useState } from 'react';
import { InputTodo, TodoList } from './component';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './style.scss';
 
function App() {
    return (
        <Provider store={store}>
            <div className='adding-box'>
                <InputTodo
                    placeholder='Add new todo'>
                </InputTodo>
                <button 
                    className='add-btn'>
                    Add
                </button>
            </div>
            <TodoList />
        </Provider>

    );
}

export default App;
