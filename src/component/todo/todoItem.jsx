import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import InputGeneral from './inputGeneral';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons'
import './style.scss'
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }
    changeView = () => {
        if(this.state.isEdit) {
            this.setState({ isEdit: false})
        } else {
            this.setState({ isEdit: true})
        }
    }
    onDelete = () => {
        this.props.onDelete(this.props.keyIndex)
    }
    onEdit = (text) => {
        this.props.onEdit(this.props.keyIndex, text)
        this.setState({isEdit: false})
    }
    render() { 
        return ( 
            <div>
                {this.state.isEdit ? <InputGeneral defaultValue={this.props.value} onSubmit={this.onEdit}/> :
                <div className='todo-item'>
                    <span>{this.props.value}</span>
                    <div className='todo-action'>
                        <span className='edit-icon' onClick={this.changeView}><FontAwesomeIcon icon={faPen} /></span>
                        <span className='delete-icon' onClick={this.onDelete}><FontAwesomeIcon icon={faTimes} /></span>
                    </div>
                </div> }
            </div>
         );
    }
}
 
export default TodoItem;