import React from 'react';
import Todo from 'components/Todo'

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

export default App;
