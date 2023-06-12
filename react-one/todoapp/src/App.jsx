import { useState } from 'react';
import Todo from './components/todo';
import './App.css';
import InlineComponent from './components/inlineComponent';
import StyleSheetComponent from './components/styelsheetcomponent';
import ModuleComponents from './components/ModuleComponent';
function App() {
  return (
    <div className="App">
      <Todo />
      <InlineComponent />
      <StyleSheetComponent />
      <ModuleComponents />
    </div>
  );
}

export default App;
