const express = require('express');
const { faker } = require('@faker-js/faker');
const cors=require("cors")
const app = express();
const PORT = 3000;
app.use(cors({
    origin: 'http://127.0.0.1:5500', 
    methods: ['GET', 'POST','PUT','DELETE'],
    credentials: true
}));
// Function to generate random todos
const generateRandomTodos = (count = 5) => {
  const todos = [];
  for (let i = 0; i < count; i++) {
    todos.push({
      id: faker.string.uuid(),  // Updated from faker.datatype.uuid() to faker.string.uuid()
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
    });
  }
  return todos;
};

// Define a route to get random todos
app.get('/todos', (req, res) => {
  const todos = generateRandomTodos();
  res.json(todos);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
