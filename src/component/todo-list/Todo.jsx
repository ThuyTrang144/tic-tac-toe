import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { InputTodo } from '..';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from './todoSlice';

function Todo (props) {

    const [ isEdit, setIsEdit ] = useState();
    const dispatch = useDispatch();

    const update = (id, todoTitle) => {
        dispatch(updateTodo({ id: id, todoTitle }));
        setIsEdit(false);
    };

    const deleteTodoItem = (id) => {
        dispatch(deleteTodo(id))
    };

    const openEditView = () => {
        if(isEdit) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    }
    return ( 
        <div>
            {isEdit ? 
                <InputTodo 
                    defaultValue={props.todoTitle} 
                    id={props.id}
                    update={update}
                /> :
                (<div className='todo-item'>
                    <span>{props.todoTitle}</span>
                    <div className='todo-action'>
                        <span 
                            className='edit-icon' 
                            onClick={openEditView}
                            >
                            <FontAwesomeIcon icon={faPen} />
                        </span>
                        <span 
                            className='delete-icon' 
                            onClick={() => deleteTodoItem(props.id)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </div>
                </div>)
            }
        </div>
        );
    }
 
export default Todo;