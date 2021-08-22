import React from 'react';
import InputTodo from './todoInput';
import TodoItem from './todoItem';
import './style.scss'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {todoTitle: 'Cooking'},
                {todoTitle: 'English'},    
                {todoTitle: 'Coding'},
                {todoTitle: 'Eating'}
            ]
        }
    }
    renderTodoList() {
        const { todoList } = this.state;
        const  newList = todoList.map((item, index) => 
            <TodoItem 
                value={item.todoTitle} 
                key={index} 
                keyIndex={index} 
                onEdit={this.editTodo} 
                onDelete={this.deleteTodo}/> )
        return newList
    }
    addNewtodo = (text) => {
        const { todoList } = this.state;
        todoList.push({todoTitle: text})
        this.setState({todoList: todoList})
        return todoList
    }
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
    deleteTodo = (keyIndex) => {
        const newList = [...this.state.todoList];
        newList.splice(keyIndex, 1)
        this.setState({todoList: newList})
        return this.state.todoList
    }
    render() { 
        return ( 
            <div>
                <InputTodo onAddTodo = {this.addNewtodo}/>
                {this.renderTodoList()}
            </div>
         );
    }
}
 
export default TodoList;