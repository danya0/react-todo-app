import * as types from '../constants'

export function createTodo(text) {
    return {
        type: types.CREATE_TODO,
        text,
    }
}

export function toggleTodoComplite(id) {
    return {
        type: types.TOGGLE_TODO_COMPLITE,
        id
    }
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function toggleShowTodo() {
    return {
        type: types.TOGGLE_TODO_SHOW,
    }
}

export function deleteComplited() {
    return {
        type: types.DELETE_COMPLETED,
    }
}

// * FILTERS

export function filterTodo(filter) {
    return {
        type: types.FILTER_TODO,
        filter,
    }
}