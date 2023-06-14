import styles from './styles.modules.css';

const Todo = () => {
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}> todo item</h3>
        <button className={styles.deletebutton}>Done</button>
      </div>
    </div>
  );
};

export default Todo;
