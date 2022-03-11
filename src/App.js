import React, {useState} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
    const [todo, setTodos] = useState([
        {id:1,body:'Выгул собаки',completed: false},
        {id:2,body:'Купить хлеб',completed: true},
        {id:3,body:'Выпить воду',completed: false}
    ])

    const [modal, setModal] = useState(false)

    const createNewTodo = (newTodo) =>{
        setTodos([...todo, newTodo])
    }

    const removeTodo = (todoRemove) =>{
        setTodos(todo.filter(todo => todo.id !== todoRemove.id));
    }
    const toggleCLass = (classToggle) =>{
        setTodos(todo.map(todo=>{
            if(todo.id === classToggle.id){
                todo.completed = !todo.completed;
            }
            return todo
        }))
    }

    const editingTodo = (edit,newTodoBody) =>{
        setTodos(todo.map(todo=>{
            if(todo.id === edit.id){
                todo.body = newTodoBody
            }
            return todo
        }))
    }

  return (
    <div className="App">
        <MyButton style={{width:'200px', marginBottom:'50px'}} onClick={()=>setModal(true)}>Создать пост</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <TodoForm create={createNewTodo}/>
        </MyModal>
        {todo.length ? <TodoList remove={removeTodo} editing={editingTodo} todos = {todo} toggle={toggleCLass} onEdit={setTodos}/> : <h1 style={{textAlign:'center'}}>Няма todo elementov</h1> }
    </div>
  );
}

export default App;
