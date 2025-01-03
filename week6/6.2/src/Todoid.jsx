import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (id) { 
      // Fetch data only if id is valid
    setTimeout(()=>{
      axios.get(`http://localhost:3000/todos/${id}`)
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
    },2000)
      
    }
  },[id]);
  // if id change it rerender again and again if i didnt  put id then it will not render again and again

  if (!id) return <p>Please select a todo ID.</p>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}

const Todoid = () => {
  const [id, setId] = useState(null);
function todoid(id){
  setId(id);
}
  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>  
          <button onClick={() => todoid(4)}>4</button>

      <Todo id={id} />
    </div>
  );
}

export default Todoid;
