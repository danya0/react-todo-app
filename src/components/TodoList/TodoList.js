import React from 'react';
import classes from './TodoList.module.scss';
import { withTheme } from 'styled-components'

function TodoList({children, theme}) {
    const { themeName } = theme;

    const TodoListClasses = [
        classes.TodoList,
    ]

    if (themeName === 'dark') {
        TodoListClasses.push(classes.dark)
    }
    return (
        <div className={TodoListClasses.join(' ')}>
            {children}
        </div>
    )
}

export default withTheme(TodoList)