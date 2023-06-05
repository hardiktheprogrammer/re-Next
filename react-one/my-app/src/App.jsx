import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/hello';
import Message from './components/Message';
import Profile from './components/profile';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Hello />
      <Message /> */}
      <Profile name="hardik" lastname="sharma" />
      <Profile name=" Hardick" lastname="ji" />
      <h3> Live in your metrix </h3>
      <Profile name="Haardick" lastname="shri" />
    </div>
  );
}

export default App;
