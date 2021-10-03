import React, { useState } from 'react';
import { Input } from 'antd';
import './style.scss';
import { addTodo, searchTodo, updateTodo } from '../todo-list/todoSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default function InputTodo (props) {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.searchValue);
    const [ value, setValue ] = useState(searchValue || props.todoTitle);

    const onChange  = (e) => {
        const value = e.target.value;
        setValue(value);
        if (!props.id) {
            dispatch(searchTodo(value))
        }
    }

    const handleTodo = () => {
        if (!props.id) {
            const newTodo = {
                id: Math.random().toString().substring(2),
                todoTitle: value
            };
            dispatch(addTodo(newTodo))
            setValue('');

            dispatch(searchTodo(''))
        } 
        else {
            props.update(props.id, value);
            console.log('valie', value, props.defaultValue);
        }

    }

    return ( 
        <Input
            className={['input-text', props.className].join(' ')}
            defaultValue={props.defaultValue} 
            value={value}
            placeholder={props.placeholder}
            onChange={onChange} 
            onPressEnter={handleTodo}
            >
        </Input>
        );
};