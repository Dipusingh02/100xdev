import React, { useState } from 'react';
let counter=4;
function TodoItem({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p3>{description}</p3>
    </div>
  );
}

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Gym", description: "Go to gym daily" },
    { id: 2, title: "Eat Food", description: "Daily food is good" },
    { id: 3, title: "Build House", description: "Building a house is good" },
  ]);
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
    <div >
    <button onClick={addTodo}>Add to todo</button>
      <h1>Todo List</h1>
      {todos.map(todo => (
        <TodoItem key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

export default Todo;
