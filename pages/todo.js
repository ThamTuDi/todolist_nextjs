import React from 'react'
import { Table, Button, Tag } from 'antd'
import {
    DeleteOutlined, CheckOutlined
} from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import PropTypes from 'prop-types';
import Column from 'antd/lib/table/Column';

Todo.propTypes = {
    todolist: PropTypes.array,
    activeId: PropTypes.string,
    onItemClick: PropTypes.func,
    onTodoClick: PropTypes.func,
}

Todo.defaultProps = {
    todolist: [],
    activeId: null,
    onItemClick: null,
    onTodoClick: null,
}
export default function Todo(props) {
    const { todolist, activeId, onTodoClick, onItemClick } = props

    const handleItemClick = (todo) => {
        if (onItemClick) {
            onItemClick(todo)
        }
    }

    const handleClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }

    return (
        <div>
            {todolist.map((todo, index) =>
                <li key={index}
                    className={styles.todoo}
                >
                    <strong>  {index}</strong>
                    <strong onClick={() => handleClick(todo)} style={todo.id === activeId ? { textDecorationLine: 'line-through' } : {}}>  {todo.name}</strong>
                    <Button onClick={() => handleItemClick(todo)}>
                        <DeleteOutlined />
                    </Button>
                </li>)}
        </div>
    )
}
