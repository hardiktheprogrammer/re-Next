import Header from './components/header';
import Form from './components/form';
import Todo from './components/todo';
import Todolist from '../components/TodoList';
import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form Todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>

      <Todo />
      <Todolist />
    </div>
  );
}

export default App;
