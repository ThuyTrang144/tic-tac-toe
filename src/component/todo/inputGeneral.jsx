import React from 'react';
import './style.scss'
class InputGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || '',
        }
    }
    onSubmit = (e) => {
        if(e.charCode === 13) {
            this.props.onSubmit(this.state.value);
            this.setState({value: ''})
        }
    }
    onChange = (e) => {
        const value = e.target.value
        this.setState({ value: value})
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }
    render() { 
        return ( 
            <input className='input-text' placeholder='Add todo' value={this.state.value} onChange={this.onChange} onKeyPress={this.onSubmit}></input>
         );
    }
}
 
export default InputGeneral;