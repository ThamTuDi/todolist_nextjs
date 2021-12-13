
import { Typography, Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteItem, deleteTodo, setActiveTodo } from '../Actions/todo';
import styles from '../styles/Home.module.css'
import Todo from './todo';

const { Title } = Typography;
var randomstring = require('randomstring');
const todolist = () => {
    const [input, setInput] = useState('')
    const todolist = useSelector(state => state.todo.list)
    const dispatch = useDispatch()
    const activeId = useSelector(state => state.todo.activeId)


    useEffect(() => {
        const storageTodoList = localStorage.getItem('TODO')
        if (storageTodoList) {
            JSON.parse(storageTodoList).forEach((todo) => {
                dispatch(addTodo(todo))
            })
        }
    }, [])

    useEffect(() => {
        if (todolist) {
            localStorage.setItem('TODO', JSON.stringify(todolist))
        }
    }, [todolist])

    const handleClick = () => {
        const newtodo = {
            id: randomstring.generate(),
            name: input,
            status: true
        }
        setInput('')
        dispatch(addTodo(newtodo))
        // console.log(newtodo)
    }
    const handleClean = () => {
        dispatch(deleteTodo())
    }

    const handleItemClick = (todo) => {
        dispatch(deleteItem(todo))
    }

    const handleToDoClick = (todo) => {
        console.log(todo)
        dispatch(setActiveTodo(todo))
    }


    return (
        <Row>
            <Col span={12} offset={6}>
                <Title>Danh sách công việc</Title>
                <div className={styles.input_todo}>
                    <Input placeholder="" value={input} onChange={(e) => setInput(e.target.value)} />
                    <Button type="primary" htmlType="submit" onClick={handleClick}>Thêm</Button>
                    <Button type="primary " danger htmlType="submit" onClick={handleClean}>Xóa tất cả</Button>
                </div>
                <Todo todolist={todolist} activeId={activeId} onTodoClick={handleToDoClick} onItemClick={handleItemClick} />
            </Col>
        </Row>
    )
}

export default todolist
