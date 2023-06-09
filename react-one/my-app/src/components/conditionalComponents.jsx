import { useState } from 'react';
import Counter from './counter';
// import FunctionalCounter from './functionalCounter';

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);
  let output;
  if (display) {
    outpost = <h3>Loop Whole 🕳️ </h3>;
  }
  if (display) {
    return <div></div>;
  } else {
  }

  if (display) {
    return (
      <div>
        <h3>Living in metrix</h3>
        <h3>State is missing</h3>
      </div>
    );
  } else {
    return ( <div></div>;
    
    )
  }
    
}
