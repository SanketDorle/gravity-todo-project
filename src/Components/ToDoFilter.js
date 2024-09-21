import React, { useState, useEffect } from 'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { TodoActions } from '../action';

const ToDoFilter = () => {

    const [filterName, setFilterName] = useState('All')

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(TodoActions.filterList(filterName))
    },[filterName])

    return (
        <ButtonToolbar>
            <ButtonGroup style={{marginRight: 10}}>
                <Button variant={filterName == 'All' ? 'success' : 'secondary'} onClick={() => setFilterName('All')}>All</Button>
            </ButtonGroup>
            <ButtonGroup style={{marginRight: 10}}>
                <Button variant={filterName == 'Completed' ? 'success' : 'secondary'} onClick={() => setFilterName('Completed')}>Completed</Button>
            </ButtonGroup>
            <ButtonGroup style={{marginRight: 10}}>
                <Button variant={filterName == 'Pending' ? 'success' : 'secondary'} onClick={() => setFilterName('Pending')}>Pending</Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
};

export default ToDoFilter;