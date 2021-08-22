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
    // onChange = (e) => {
    //     const value = e.target.value
    //     this.setState({ value: value})
    //     if(this.props.onChange) {
    //         this.props.onChange(value)
    //     }
    // }
    render() {  
        return ( 
            <div>
                 <input className='search-box' placeholder='Search todo...' type='search' onChange={this.onChange}></input>
                 <button className='search-btn'>Search</button>
            </div>
           
         );
    }
}
 
export default TodoSearch;