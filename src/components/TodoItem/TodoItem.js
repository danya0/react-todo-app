import React from "react";
import classes from "./TodoItem.module.scss";
import closeImg from "./close.svg";
import checkImg from "./check.svg"

export default function TodoItem({ index, id, text, complited, actions }) {
    const itemClasses = [classes.TodoItem];

    if (complited) {
        itemClasses.push(classes.complited);
    }

    if (index === 0) {
        itemClasses.push(classes.first)
    }

    const onItemClickFnc = e => {
        if (e.target.classList.contains(classes.TodoItem) || e.target.classList.contains(classes.TodoItem_text)) {
            actions.toggleTodoComplite(id)
        }
    }

    return (
        <div className={itemClasses.join(" ")} onClick={onItemClickFnc}>
            <div
                className={classes.TodoItem_completeBox}
                onClick={()=> {actions.toggleTodoComplite(id)}}
            >
                {complited ? (<img src={checkImg} alt="check" />) : null}
            </div>
            <div className={classes.TodoItem_text} title={text}>
                {text}
            </div>
            <div className={classes.TodoItem_close} onClick={()=> {actions.deleteTodo(id)}}>
                <img src={closeImg} alt="close" />
            </div>
            {/* <div className>

            </div> */}
        </div>
    );
}
