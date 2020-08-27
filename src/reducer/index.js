import * as types from '../constants'

const initialState = {
    showTodos: true,
    newId: 1,
    todos: {},
    todosOrder: [],
    filter: 'all',
}

const reducer = (state = initialState, action) => {
    const todosKeys = Object.keys(state.todos)

    switch (action.type) {

        case types.CREATE_TODO: {
            const newTodoName = `todo-${state.newId}`;
            const {text} = action;
            const newState = {
                ...state,
                newId: state.newId + 1,
                todos: {
                    ...state.todos,
                    [newTodoName]: {
                        id: state.newId,
                        text,
                        complited: false,
                    }
                },
            }
            if (state.filter === 'all' || state.filter === 'noCompleted') {
                return {
                    ...newState,
                    todosOrder: [
                        ...state.todosOrder,
                        newTodoName,
                    ],
                }
            } else {
                return {
                    ...newState
                }
            }
        }

        case types.TOGGLE_TODO_COMPLITE: {
            const currentItem = `todo-${action.id}`;
            const idx = state.todosOrder.findIndex(item => item === currentItem);
            const newState = {
                ...state,
                    todos: {
                        ...state.todos,
                            [currentItem]: {
                                ...state.todos[currentItem],
                                complited: !state.todos[currentItem].complited 
                            }
                    },
            }
            if (state.filter === 'all') {
                return {
                    ...newState,
                }
            } else { 
                return {
                    ...newState,
                    todosOrder: [
                        ...state.todosOrder.slice(0, idx),
                        ...state.todosOrder.slice(idx + 1),
                    ]
                }
            }
        }

        case types.DELETE_TODO: {
            const todoName = `todo-${action.id}`
            const copyTodos = state.todos;
            const indexTodo = state.todosOrder.findIndex(item => item === todoName)
            delete copyTodos[todoName]

            return {
                ...state,
                todos: {
                    ...copyTodos,
                },
                todosOrder: [
                    ...state.todosOrder.slice(0, indexTodo),
                    ...state.todosOrder.slice(indexTodo + 1),
                ]
            }
        }

        case types.TOGGLE_TODO_SHOW: {
            return {
                ...state,
                showTodos: !state.showTodos,
            }
        }

        case types.DELETE_COMPLETED: {
            const newTodos = state.todos;
            todosKeys.filter(item => state.todos[item].complited === true).map(item => delete newTodos[item]);
            
            return {
                ...state,
                todos: newTodos,
                todosOrder: Object.keys(newTodos),
                filter: 'all',
            }
        }

        case types.FILTER_TODO: {
            switch (action.filter) {
                case 'all': {
                    return {
                        ...state,
                        todosOrder: todosKeys,
                        filter: 'all',
                    }
                    /* falls through */
                }
                case 'completed': {
                    return {
                        ...state,
                        todosOrder: todosKeys.filter(item => state.todos[item].complited === true),
                        filter: 'completed'
                    }
                    /* falls through */
                }
                case 'noCompleted': {
                    return {
                        ...state,
                        todosOrder: todosKeys.filter(item => state.todos[item].complited === false),
                        filter: 'noCompleted'
                    }
                    /* falls through */
                }
                default: {
                    return {
                        ...state,
                        todosOreder: state.todosOrder
                    }
                }
            }
        }
        default: {
            return state;
        }

    }
}

export default reducer