import { useState } from 'react';
import Todo from './components/todo';
import './App.css';
import InlineComponent from './components/inlineComponent';

function App() {
  return (
    <div className="App">
      <Todo />
      <InlineComponent />
    </div>
  );
}

export default App;
