const express = require('express');
const { faker } = require('@faker-js/faker');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

const generateRandomTodos = (count = 5) => {
  const todos = [];
  for (let i = 0; i < count; i++) {
    todos.push({
      id: i + 1, // Simple sequential IDs for easier testing
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
    });
  }
  return todos;
};

const todos = generateRandomTodos(); // Pre-generate a list of TODOs

// Define route to get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Define route to get a todo by ID
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
