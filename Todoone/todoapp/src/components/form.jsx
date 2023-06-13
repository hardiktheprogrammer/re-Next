import styles from '../style.module.css';
const Form = () => {
  return (
    <div clasName={styles.todoform}>
      <form>
        <input className={styles.todoinput} placeholder="Add item"></input>
        <button>Add Your Item</button>
      </form>
    </div>
  );
};

export default Form;
