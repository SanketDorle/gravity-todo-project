import { commonConstants } from '../helpers/constants';

export const TodoActions = {
    setTodoList,
    setTodoStatus,
    deleteTodoItem,
    filterList,
    addToDoItem
};

function addToDoItem(item){
    const list = [...JSON.parse(localStorage.getItem('todoList')), item];
    return setTodoList(list);
}


function filterList(filterType){
    const items = JSON.parse(localStorage.getItem('todoList'));
    if(filterType == 'All'){
        return {type: commonConstants.SET_TODO_LIST, payload: items}
    }else if(filterType == 'Completed'){
        let filterItem = items.filter((it)=>it.completed)
        return {type: commonConstants.SET_TODO_LIST, payload: filterItem}
    }else if(filterType == 'Pending'){
        let filterItem = items.filter((it)=>!it.completed)
        return {type: commonConstants.SET_TODO_LIST, payload: filterItem}
    }
}

function setTodoList(items) {
    items.sort((a,b)=>b.id-a.id)
    localStorage.setItem('todoList', JSON.stringify(items));
    return {type: commonConstants.SET_TODO_LIST, payload: items}
}

function setTodoStatus(items) {
    localStorage.setItem('todoList', JSON.stringify(items));
    return {type: commonConstants.SET_TODO_STATUS, payload: items}
}
function deleteTodoItem(items) {
    localStorage.setItem('todoList', JSON.stringify(items));
    return {type: commonConstants.DELETE_TODO_ITEM, payload: items}
}