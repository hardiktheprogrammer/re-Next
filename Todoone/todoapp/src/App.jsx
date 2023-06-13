import Header from './components/header';
import Form from './components/form';
import useState from 'react';
function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
