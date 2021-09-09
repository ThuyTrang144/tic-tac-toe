import TodoItem from "./todoItem";
import { TodoContext } from './context';
import { useContext } from "react";

export default function TodoListView() {
    const context = useContext(TodoContext)
    function renderTodoList(todoList, filterValue) {   
        const searchResult = todoList.filter(item => item.todoTitle.toLowerCase().startsWith(filterValue))
        console.log("Search Value", searchResult)
        const newList = (filterValue.length !== 0) ? searchResult : todoList
        console.log("todoList", todoList)
        const newTodoList = newList.map((item, index) => 
        <TodoItem 
            value={item.todoTitle} 
            key={index} 
            keyIndex={index} 
            // onEdit={this.editTodo} 
            // onDelete={this.deleteTodo}
            /> )
        console.log("newTodoList", newTodoList)
        if(searchResult.length === 0 && filterValue.length !== 0) {
            console.log('Im here')
            return <p className="search-result">There is no todo match with your search. Please add a new one.</p>
        }
        return newTodoList
    }
        return (
            // newTodoList
            <TodoContext.Consumer>
                {value => renderTodoList(value.todoList, value.filterValue)}
            </TodoContext.Consumer>
        )
}