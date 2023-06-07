import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/hello';
import Message from './components/Message';
import Profile from './components/profile';
import Counter from './components/counter';
import Resume from './components/resume';
import FunctionalEvent from './components/FunctionEvent';
import ClassEvent from './components/classEvent';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Profile name="sharma" lastname="ji" />    */}
      <Message />
      <Profile name="hardik" lastname="sharma" />
      <Resume name="DoomSingh" />
      <Counter />
      <FunctionalEvent />
      <ClassEvent />
    </div>
  );
}

export default App;
