import React from 'react';
import classes from './TodoList.module.scss';


export default function TodoList({children}) {
    return (
        <div className={classes.TodoList}>
            {children}
        </div>
    )
}