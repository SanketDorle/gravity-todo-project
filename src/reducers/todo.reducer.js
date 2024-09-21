import { commonConstants } from "../helpers/constants";

const defaultState = []

function todoList(prevState = defaultState, action) {

    switch (action.type) {
        case commonConstants.SET_TODO_LIST:
            return action.payload;
        case commonConstants.SET_TODO_STATUS:
            return action.payload;
        case commonConstants.DELETE_TODO_ITEM:
            return action.payload;
        default:
            return prevState
    }
}


export {
    todoList
};