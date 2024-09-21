import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { TodoActions } from '../action';

const AddModal = ({closeModal}) => {

    const [task, setTask] = useState("")
    const [err, setErr] = useState("")
    const todoList = JSON.parse(localStorage.getItem('todoList'));

    const dispatch = useDispatch();

    const chnageInput = (e)=>{
        setErr('');
        setTask(e.target.value);
    }

    const addTask = ()=>{
        if(task != ''){
            let item = {
                id: todoList[0].id + 1,
                userId: 1,
                todo: task,
                completed: false
            }

            dispatch(TodoActions.addToDoItem(item));
            closeModal();
        }else{
            setErr('Task description is manditory.')
        }
    }
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Add To Do Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="Task">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={chnageInput} value={task} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <div style={{color: 'red'}}>{err}</div>
                <Button variant="secondary" onClick={() => setTask('')}>
                    Reset
                </Button>
                <Button variant="primary" onClick={addTask}>
                    Add Item
                </Button>
            </Modal.Footer>
        </>
    );
};

export default AddModal;