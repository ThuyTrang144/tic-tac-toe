import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Input } from '../input';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import { TodoContext } from '../../context';

class Todo extends React.PureComponent {
    static contextType = TodoContext;
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }
    changeView = () => {
        if(this.state.isEdit) {
            this.setState({ isEdit: false});
        } else {
            this.setState({ isEdit: true});
        }
    }
    onDelete = () => {
        this.context.deleteTodo(this.props.id);
    }
    onEdit = (text) => {
        this.context.editTodo(this.props.id, text);
        this.setState({isEdit: false});
    }
    render() { 
        return ( 
            <div>
                {this.state.isEdit ? 
                    <Input 
                        defaultValue={this.props.todoTitle} 
                        onSubmit={this.onEdit}
                    /> :
                    (<div className='todo-item'>
                        <span>{this.props.todoTitle}</span>
                        <div className='todo-action'>
                            <span 
                                className='edit-icon' 
                                onClick={this.changeView}>
                                <FontAwesomeIcon icon={faPen} />
                            </span>
                            <span 
                                className='delete-icon' 
                                onClick={this.onDelete}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </div>
                    </div>)
                }
            </div>
         );
    }
}
 
export default Todo;