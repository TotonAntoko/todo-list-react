import React from 'react';
import './App.css';
import DisplayTodos from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <DisplayTodos />
    </div>
  );
}

export default App;
