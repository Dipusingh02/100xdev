import React, { useState, useEffect } from 'react';

function TodoItems({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

const Todo1 = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
   setInterval(()=>{
    const fetchTodos = async () => {
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json();
        setTodos(data);
      };
      fetchTodos();
   },10000) 
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map(todo => (
        <TodoItems key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

export default Todo1;
