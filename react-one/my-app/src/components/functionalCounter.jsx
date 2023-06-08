import { useState } from 'react';

function FunctionalComponents() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div> Counter {counter}</div>
    </div>
  );
}

export default FunctionalComponents;
