import { useState } from 'react';
export default function ConditionalComponent() {
  const [Display, setDisplay] = useState(true);
  return (
    <div>
      <h3>Living in metrix</h3>
      <h3>State is missing</h3>
    </div>
  );
}
