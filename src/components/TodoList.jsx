import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos,remove,toggle,editing}) => {
    return (
        <div className="todos">
            {todos.map((todo, index)=> <TodoItem  remove={remove} number = {index + 1} todo={todo} key={todo.id} toggle={toggle} onEdit={editing}/>)}
        </div>
    );
};

export default TodoList;