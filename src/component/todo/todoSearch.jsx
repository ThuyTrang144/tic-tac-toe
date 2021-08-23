// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSearch} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
class TodoSearch extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    onChange = (e) => {
        const value = e.target.value
        this.setState({value: value})
        this.props.searchTodo(value)
    }
    render() {  
        return ( 
            <div>
                 <input className='search-box' placeholder='Search todo...' type='search' onChange={this.onChange}></input>
            </div>
           
         );
    }
}
 
export default TodoSearch;