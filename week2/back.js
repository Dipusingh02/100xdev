const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use bodyParser middleware to parse JSON bodies
// app.use(bodyParser.json());

// POST route to test receiving JSON bodies
// app.post('/', (req, res) => {
//     console.log(req.body);  // Log the request body to the console
//     res.send("Received your request!");
// });

// GET route just says "hi there"
// app.get('/', (req, res) => {
//     res.send("hi there");
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);  // Note the use of backticks here
// });
app.length('/',(res,req) =>{
    res.send("hwllo dipu");
})
