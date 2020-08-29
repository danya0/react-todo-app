import React from 'react';
import classes from './TodoTool.module.scss'

import { withTheme } from 'styled-components'

function TodoTool({total, totalNoCompleted, actions, theme}) {
    const {themeName} = theme;
    const TodoListClasses = [
        classes.TodoTool,
    ]

    if (themeName === 'dark') {
        TodoListClasses.push(classes.dark)
    }

    const buttonClasses = [
        classes.TodoTool_deleteCompleted
    ]
    if (totalNoCompleted() === 0) {
        buttonClasses.push(classes.hidden)
    }

    return (
        <div className={TodoListClasses.join(' ')}>
            <div>
                {total === 0 ? (
                    'Нет задач'
                ) : (
                    `Осталось ${total}`
                )}
            </div>
            <div>
                <input type="radio" name="filter" id="filterAll" defaultChecked={true}/>
                <label htmlFor="filterAll" onClick={()=> {actions.filterTodo('all')}}>Все</label>
                <input type="radio" name="filter" id="filterNoCompleted" />
                <label htmlFor="filterNoCompleted" onClick={()=> {actions.filterTodo('noCompleted')}}>Не выполненные</label>
                <input type="radio" name="filter" id="filterCompleted" />
                <label htmlFor="filterCompleted" onClick={()=> {actions.filterTodo('completed')}}>Выполненные</label>
            </div>
            <div>
                <button className={buttonClasses.join(' ')} onClick={()=> {
                    actions.deleteComplited();
                    document.getElementById('filterAll').checked = true;
                }} 
                >Удалить выполненные</button>
            </div>
        </div>
    )
}

export default withTheme(TodoTool)