import { useState } from 'react';
import Todo from './components/todo';
import './App.css';
import InlineComponent from './components/inlineComponent';
import StyleSheetComponent from './components/styelsheetcomponent';
function App() {
  return (
    <div className="App">
      <Todo />
      <InlineComponent />
      <StyleSheetComponent />
    </div>
  );
}

export default App;
