import styles from '../style.module.css';
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };
};
const Form = () => {
  return (
    <div className={styles.todoform}>
      <form>
        <input className={styles.todoinput} placeholder="Add item"></input>
        <button className={styles.todobutton}>Add Your Item</button>
      </form>
    </div>
  );
};

export default Form;
