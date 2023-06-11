import { useState } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState();

  return (
    <div>
      <form>
        <input type="text"></input>
        <button type="submit"> Add </button>
      </form>
    </div>
  );
}
// export default Todo;
