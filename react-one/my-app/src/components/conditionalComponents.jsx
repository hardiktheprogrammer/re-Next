import { useState } from 'react';
import Counter from './counter';
// import FunctionalCounter from './functionalCounter';

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);
  let output;

  if (display) {
    output = <h3>Living in metrix</h3>;
  } else {
    output = <h3></h3>;
  }

  return <div>{output}</div>;
}
