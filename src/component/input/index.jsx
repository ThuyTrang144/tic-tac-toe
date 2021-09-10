import React from 'react';
import './style.scss'
export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || '',

        }
    }
    onSubmit = (e) => {
        if(e.charCode === 13 && this.props.onSubmit) {
           this.props.onSubmit(this.state.value);
            this.setState({value: ''})
    }
}
    onChange = (e) => {
        const value = e.target.value
        this.setState({ value: value})
        if (this.props.onChange) {
            this.props.onChange(value)
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