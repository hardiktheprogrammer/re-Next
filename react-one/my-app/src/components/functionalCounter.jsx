import { useState } from 'react';

function FunctionalComponents() {
  const [counter, setCounter] = useState(0);
  const [surname, FirstName] = useState('Haardik');
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div> Counter {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default FunctionalComponents;
