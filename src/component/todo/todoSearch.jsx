// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { TodoContext } from './context';
import React from 'react';

class TodoSearch extends React.PureComponent {
    static contextType = TodoContext
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: context.state.filterValue
        }
        console.log('context', this.context)
    }
    onChange = (e) => {
        const value = e.target.value
        this.setState({value: value})
        this.context.searchTodo(value)
        console.log('Context', this.context)
        
    }
    render() {  
        return ( 
            <input 
                className='search-box' 
                placeholder='Search todo...' 
                type='search' 
                onChange={this.onChange}>
            </input>
         );
    }
}

// TodoSearch.contextType = TodoContext
 
export default TodoSearch;