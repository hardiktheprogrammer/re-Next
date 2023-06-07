function FunctionEvent() {
  function handleClick() {
    console.log('button is click');
  }
  return (
    <div>
      Function Component
      <button onClick={handleClick}> Click me </button>
    </div>
  );
}
export default FunctionEvent;
