import React from 'react';
import InputTodo from './todoInput';
import TodoItem from './todoItem';
import TodoSearch from './todoSearch';
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
            ]
        }
    }
    renderTodoList() {
        const { todoList, filterValue } = this.state;
        const  newList = todoList.filter(item => {
            return filterValue ? item.todoTitle.toLowerCase().startsWith(filterValue) : true
        }).map((item, index) => 
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
    }
    searchTodo = (text) => {
        this.setState({filterValue: text})
    }
    render() { 
        return ( 
            <div>
                <TodoSearch searchTodo={this.searchTodo}/>
                <InputTodo onAddTodo = {this.addNewtodo}/>
                {this.renderTodoList()}
            </div>
         );
    }
}
 
export default TodoList;

// var Filter = function (array, text) {
//     const newArray = []
//     array.filter(item => {
//         if(item.includes(text)) {
//             newArray.push(item)
//         }
//     })
//     return newArray;
// }
// console.log(Filter(["thien", "trang", "thien khung", "trang thong minh"], "trang"))