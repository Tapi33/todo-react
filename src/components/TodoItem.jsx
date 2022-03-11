import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const TodoItem = (props) => {
    const [newTodoBody, setNewTodoBody] = useState('')
    const [editing, setEditing] = useState(false);

    let classes = ['todo_elem'];
    if (props.todo.completed) {
        classes.push('active')
    }

    const editingTodo = (e) => {
        e.preventDefault()
        newTodoBody ? props.onEdit(props.todo, newTodoBody) : alert('Поле для редактирования пусто')
        setNewTodoBody('')
    }

    return (
        <div className={classes.join(' ')}>
            <div className="todo_elem_number">{props.number}</div>
            <input
                className={"todo_elem_input"}
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.toggle(props.todo)}
            />
            <div className="todo_title">{editing ? <div><MyInput placeholder={props.todo.body} value={newTodoBody} onChange={e=> setNewTodoBody(e.target.value)}/></div>: props.todo.body}</div>
            <MyButton onClick={() => props.remove(props.todo)}>Delete!</MyButton>
            {editing ? <MyButton onClick={e => {setEditing(!editing); editingTodo(e)}}>Accept</MyButton> : <MyButton onClick={() => setEditing(!editing)}>Edit</MyButton>}
        </div>
    );
};

export default TodoItem;