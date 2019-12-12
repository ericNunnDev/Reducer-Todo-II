import React, { useReducer } from 'react';
import './App.css';

// Components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// Reducers
import { initialState, reducer } from './reducers/index';

function App() {
  const [state, dipatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <p>{state.item}</p>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
