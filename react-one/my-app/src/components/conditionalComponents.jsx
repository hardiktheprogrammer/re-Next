import { useState } from 'react';
import Counter from './counter';
import FunctionalCounter from './functionalCounter';
export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);
  if (display) {
    return (
      <div>
        <Counter>
          <h3>Loop Whole 🕳️ </h3>
        </Counter>
      </div>
    );
  } else {
    return (
      <div>
        <FunctionalCounter>
          <h3>Loop Whole 🕳️</h3>
        </FunctionalCounter>
      </div>
    );
  }
  return (
    <div>
      <h3>Living in metrix</h3>
      <h3>State is missing</h3>
    </div>
  );
}
