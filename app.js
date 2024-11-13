const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route that returns a JSON object
app.get('/api/sample', (req, res) => {
    const jsonObject = {
        message: 'This is a sample JSON object',
        data: {
            name: 'John Doe',
            age: 30,
            email: 'john.doe@example.com'
        }
    };
    res.json(jsonObject);
});

// Start the server and export it for testing
const server = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

// Export both app and server for testing
module.exports = { app, server };