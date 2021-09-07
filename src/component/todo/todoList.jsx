import React from 'react';
import InputTodo from './todoInput';
import TodoSearch from './todoSearch';
import './style.scss'
import TodoListView from './TodoListView';

const TodoContext = React.createContext({ todoList: [], 
    filterValue: '', 
    addNewtodo: () => {}, 
    editTodo: () => {}})
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
        this.addNewtodo = (text) => {
            const { todoList } = this.state;
            todoList.push({todoTitle: text})
            this.setState({todoList: [...todoList]})
            console.log("todoList", todoList)
        };
        this.editTodo = (keyIndex, text) => {
            const todoList = this.state.todoList
            const newList = todoList.map((item, index) => {
                if(keyIndex === index) {
                    item = {...item, todoTitle: text}
                }
                return item
            })
            this.setState({todoList: newList})    
        }
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
            <TodoContext.Provider value={this.state} addNewtodo={this.addNewtodo} editTodo={this.editTodo}>
              <div>
                <TodoSearch searchTodo={this.searchTodo}/>
                <InputTodo/>
                {/* <TodoListView todoList={this.state.todoList} filterValue={this.state.filterValue}></TodoListView> */}
                <TodoListView />
            </div>
            </TodoContext.Provider>
         );     
    }
}
 
export default TodoList;
export { TodoContext}