// Import Express and SQLite
const express = require('express');
const cors = require('cors');   // To handle Cross-Origin Resource Sharing
const sqlite3 = require('sqlite3').verbose(); // '.verbose()' gives more helpful error messages

// Create an Express application
const app = express();

// Define the port your server will run on
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Connect to (or create) your database file
const db = new sqlite3.Database('./fake-store.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the fake-store SQLite database.');
});

// Create the "products" table (if the table doesn't exist)
db.run('CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY AUTOINCREMENT, picture TEXT, name TEXT, description TEXT,price REAL)');
db.run('CREATE TABLE IF NOT EXISTS cart(id INTEGER PRIMARY KEY AUTOINCREMENT, product_id INTEGER, quantity INTEGER, FOREIGN KEY(product_id) REFERENCES products(id))');

// Define endpoints
app.get('/products', (req, res) => {
    const { search } = req.query;

    let sql = "SELECT * FROM products";
    let params = [];

    if (search) {
        // The "LIKE" keyword is for partial matches
        // The "%" is a wildcard, meaning "match anything"
        // So '%harry%' means "find any text that has 'harry' in it"
        sql = "SELECT * FROM products WHERE name LIKE ?";
        params = [`%${search}%`]; 
    }

    // db.all() runs the query and gives all results in the 'rows' variable
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Send the rows back as JSON
        res.status(200).json(rows);
    });
});

app.post('/products/create', (req, res) => {
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

app.post('/cart/add', (req, res) => {
    const { product_id, quantity } = req.body;
    const sql = "INSERT INTO cart (product_id, quantity) VALUES (?, ?)";

    db.run(sql, [product_id, quantity], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(201).json({
            id: this.lastID,
            product_id: product_id,
            quantity: quantity
        });
    });
});

app.get('/cart', (req, res) => {
    const sql = `SELECT cart.id as cart_id, products.id as product_id, products.picture, products.name, products.description, products.price, cart.quantity 
                 FROM cart 
                 JOIN products ON cart.product_id = products.id`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(rows);
    });
});

app.put('/cart/update/:id', (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    const sql = "UPDATE cart SET quantity = ? WHERE id = ?";

    db.run(sql, [quantity, id], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }  
        res.status(200).json({ message: 'Cart updated successfully' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});