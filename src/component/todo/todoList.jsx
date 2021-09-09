import React from 'react';
import InputTodo from './todoInput';
import TodoSearch from './todoSearch';
import { TodoContext } from './context'
import TodoListView from './TodoListView';
import './style.scss'

class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: '',
            todoList: [
                {todoTitle: 'Cooking'},
                {todoTitle: 'English'},    
                {todoTitle: 'Coding'},
                {todoTitle: 'Eating'}
            ],
        };

    }


    addNewtodo = (text) => {
        const { todoList } = this.state;
        todoList.push({todoTitle: text})
        this.setState({todoList: [...todoList]})
        console.log("todoList", todoList)
    };
    editTodo = (keyIndex, text) => {
        const todoList = this.state.todoList
        const newList = todoList.map((item, index) => {
            if(keyIndex === index) {
                item = {...item, todoTitle: text}
            }
            return item
        })
        this.setState({todoList: newList})    
    }
    searchTodo = (text) => {
        this.setState({filterValue: text})
    }
    deleteTodo = (keyIndex) => {
        const newList = [...this.state.todoList];
        newList.splice(keyIndex, 1)
        this.setState({todoList: newList})
    }
    render() { 
        return ( 
            <TodoContext.Provider 
                value={{
                    state: this.state,
                    addNewtodo: this.addNewtodo,
                    searchTodo: this.searchTodo,
                    editTodo: this.editTodo,
                    deleteTodo: this.deleteTodo
                }}  
            >
              <div>
                <TodoSearch />
                {/* <InputTodo/> */}
                {/* <TodoListView /> */}
            </div>
            </TodoContext.Provider>
         );     
    }
}
 
export default TodoList;