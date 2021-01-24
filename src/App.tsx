import React from 'react';
import Todo from 'components/Todo'
import { hot } from 'react-hot-loader'

function App() {
  const todo = [
    {id: 'タスク1', text: 'ご飯を作る'},
  ];
  return (
    <div className="App">
      <Todo items={todo} />
    </div>
  )
}

export default hot(module)(App);
