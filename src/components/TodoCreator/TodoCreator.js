import React from "react";
import classes from "./TodoCreator.module.scss";
import arrow from './arrow.svg'

export default function TodoCreator({createTodo, showTodos, toggleShowTodo}) {
    const arrowClasses = [
        classes.TodoCreator_arrow,
    ]

    if (showTodos) {
        arrowClasses.push(classes.show)
    }

    const keyPresFnc = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            createTodo(e.target.value)
            e.target.value = '';
        }
    }

    return (
        <div className={classes.TodoCreator}>
            <div 
                className={arrowClasses.join(' ')}
                onClick={toggleShowTodo}
            >
                <img src={arrow} alt="arrow"/>
            </div>
            <input
                autoFocus
                placeholder="Что нужно сделать?"
                className={classes.TodoCreator_input}
                onKeyPress={keyPresFnc}
            />
        </div>
    );
}
