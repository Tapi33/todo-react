import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const TodoForm = ({create}) => {
    const [newTodo, setNewTodo] = useState({
        body: ''
    })

    const addNewTodo = (e) => {
        e.preventDefault()
        newTodo.body ? create(newTodo) : alert('Введите todo element')
        setNewTodo({body: ''});


    }

    return (
        <form className='todo_form'>
            <h1>Вvедите todo element</h1>
            <div className="todo_info">
                <MyInput
                    value={newTodo.body}
                    type="text"
                    placeholder='todo...'
                    onChange={event => setNewTodo({body: event.target.value, id:Date.now(), completed:false})}
                />
                <MyButton onClick={addNewTodo}>Создать to do</MyButton>
            </div>
        </form>
    );
};

export default TodoForm;