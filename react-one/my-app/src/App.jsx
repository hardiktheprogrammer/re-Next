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
      <Profile name="sharma" lastname="ji" />
    </div>
  );
}

export default App;
