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
        const searchResult = todoList.filter(item => item.todoTitle.toLowerCase().startsWith(filterValue))
        console.log("Search Value", searchResult)
        const newList = (filterValue.length !== 0) ? searchResult : todoList
        console.log("todoList", todoList)
        const newTodoList = newList.map((item, index) => 
        <TodoItem 
            value={item.todoTitle} 
            key={index} 
            keyIndex={index} 
            onEdit={this.editTodo} 
            onDelete={this.deleteTodo}/> )
        console.log("newTodoList", newTodoList)
        if(searchResult.length === 0 && filterValue.length !== 0) {
            console.log('Im here')
            return <p className="search-result">There is no todo match with your search. Please add a new one.</p>
        }
        return newTodoList
        
    }
    addNewtodo = (text) => {
        const { todoList } = this.state;
        todoList.push({todoTitle: text})
        this.setState({todoList: [...todoList]})
        console.log("todoList", todoList)
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