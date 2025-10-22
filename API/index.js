// Import Express and SQLite
const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // '.verbose()' gives more helpful error messages

// Create an Express application
const app = express();

// Define the port your server will run on
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to (or create) your database file
const db = new sqlite3.Database('./fake-store.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the fake-store SQLite database.');
});

// Create the "products" table (if the table doesn't exist)
db.run('CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY AUTOINCREMENT, picture TEXT, name TEXT, description TEXT,price REAL)');

// Define endpoints
app.get('/products', (req, res) => {
    const sql = "SELECT * FROM products";

    // db.all() runs the query and gives all results in the 'rows' variable
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Send the rows back as JSON
        res.status(200).json(rows);
    });
});

app.post('/products', (req, res) => {
    // Get the picture, name, description and price from the request body
    const { picture, name, description, price } = req.body;
    const sql = "INSERT INTO products (picture, name, description, price) VALUES (?, ?, ?, ?)";
    
    // db.run() executes the query
    // The 'function(err)' syntax is used so we can access 'this.lastID'
    db.run(sql, [picture, name, description, price], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
        return;
        }
        res.status(201).json({
        id: this.lastID,
        picture: picture,
        name: name,
        description: description,
        price: price
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});