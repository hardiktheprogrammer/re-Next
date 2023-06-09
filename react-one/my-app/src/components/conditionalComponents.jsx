import { useState } from 'react';
export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);
  if (display) {
    return (
      <div>
        <h3>Loop Whole 🕳️</h3>
      </div>
    );
  } else {
    <div>
      <h3></h3>
    </div>;
  }
  return (
    <div>
      <h3>Living in metrix</h3>
      <h3>State is missing</h3>
    </div>
  );
}
