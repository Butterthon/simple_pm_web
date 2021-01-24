import React, { useEffect } from 'react'

interface TodoProps {
  items: {
    id: string,
    text: string
  }[]
};

const Todo: React.FC<TodoProps> = props => {
  return (
    <ul>
      {
        props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))
      }
    </ul>
  )
};

export default Todo;
