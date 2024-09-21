import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { TodoActions } from '../action';

const useFetch = ({url, payload}) => {

    const dispatch = useDispatch()
    useEffect(()=>{
        if(payload){

        }else{
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    localStorage.setItem('todoList', JSON.stringify(json.todos));
                    dispatch(TodoActions.setTodoList(json.todos));
                    return json.todos;
                });
        }
    },[])
};

export default useFetch;