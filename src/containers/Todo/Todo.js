import React from "react";
import { connect } from "react-redux";

import TodoList from "../../components/TodoList/TodoList";
import TodoCreator from "../../components/TodoCreator/TodoCreator";
import TodoItem from "../../components/TodoItem/TodoItem";
import TodoTool from "../../components/TodoTool/TodoTool";

import styled from "styled-components";

import {
    toggleTodoComplite,
    createTodo,
    deleteTodo,
    toggleShowTodo,
    deleteComplited,
    filterTodo,
} from "../../actions";

const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    ${this}::-webkit-scrollbar {
        width: 0;
    }
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    overflow-y: scroll;
`;

const TitleNoObjects = styled.div`
    padding: 15px 0;
    color: inherit;
    font-size: 22px;
    text-align: center;
`;

function Todo({
    showTodos,
    todos,
    todosOrder,
    toggleTodoComplite,
    createTodo,
    deleteTodo,
    toggleShowTodo,
    deleteComplited,
    filterTodo,
    filter,
}) {
    const ItemActions = { toggleTodoComplite, deleteTodo };
    const ToolActions = { deleteComplited, filterTodo };

    const totalTodos = () => {
        let size = 0;
        Object.keys(todos).map((item) =>
            todos[item].complited === false ? size++ : null
        );
        return size;
    };

    const totalNoCompleted = () => {
        let size = 0;
        Object.keys(todos).map(item => 
            todos[item].complited ? size++ : null   
        );
        return size;
    }

    const renderTodoItems = () => {
        return (
            <ItemWrap>
                {todosOrder.map((todoId, index) => {
                    const currentItem = todos[todoId];
                    return (
                        <TodoItem
                            key={index}
                            index={index}
                            id={currentItem.id}
                            text={currentItem.text}
                            complited={currentItem.complited}
                            filter={filter}
                            actions={ItemActions}
                        />
                    );
                })}
            </ItemWrap>
        );
    };

    return (
        <>
        <TodoList>
            <TodoCreator
                createTodo={createTodo}
                showTodos={showTodos}
                toggleShowTodo={toggleShowTodo}
            />
            {todosOrder.length === 0 ? <TitleNoObjects>Задач этого типа нет.</TitleNoObjects> : showTodos ? renderTodoItems() : null}
            <TodoTool total={totalTodos()} totalNoCompleted={totalNoCompleted} actions={ToolActions} />
        </TodoList>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        showTodos: state.showTodos,
        todos: state.todos,
        todosOrder: state.todosOrder,
        filter: state.filter
    };
};

const mapDispatchToProps = {
    toggleTodoComplite,
    createTodo,
    deleteTodo,
    toggleShowTodo,
    deleteComplited,
    filterTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
