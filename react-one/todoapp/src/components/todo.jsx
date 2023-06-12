import { useState } from 'react';
import ListItem from '../components/ListItem';
export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState();
  const handleChange = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    console.log(todoList);
    setTodo('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} type="text"></input>
        <button type="submit"> Add </button>
      </form>
      {todoList.map((item) => (
        <ListItem Key={item} name={item}>
          List Item
        </ListItem>
      ))}
    </div>
  );
}
// export default Todo;
