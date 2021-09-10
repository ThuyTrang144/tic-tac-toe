import React from 'react';
import { TodoContext } from '../../context';
import './style.scss'
export class Input extends React.Component {
    static contextType = TodoContext;
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || '',

        }
    }
    onSubmit = (e) => {
        if(e.charCode === 13) {
            if (this.props.onEdit) {
                this.props.onEdit(this.state.value);
            }
            if (this.props.addNewTodo) {
                this.props.addNewTodo(this.state.value);
            }
            this.setState({value: ''})
        }
    }
    onChange = (e) => {
        const value = e.target.value
        this.setState({ value: value})
        if (this.props.searchTodo) {
            this.props.searchTodo(value)
        }
    }
    render() { 
        return ( 
            <input 
                className={['input-text', this.props.className].join(' ')}
                value={this.state.value} 
                placeholder={this.props.placeholder}
                onChange={this.onChange} 
                onKeyPress={this.onSubmit}>
            </input>
         );
    }
}