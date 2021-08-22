import React from 'react';
import InputGeneral from './inputGeneral';
import './style.scss'
class InputTodo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    onSubmit = () => {
        this.props.onAddTodo(this.state.value)
    }
    onChange = (text) => {
        this.setState({value: text})
    }
    render() { 
        return ( 
            <div className='input-todo'>
                <InputGeneral onChange={this.onChange} onSubmit={this.onSubmit}/>
                <button className='add-btn' onClick={this.onSubmit}>Add</button>
            </div>
         );
    }
}
 
export default InputTodo;