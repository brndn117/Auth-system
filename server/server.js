// server.js (Adjusted for 'project' database and 'buyer' table)
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing

const app = express();
const port = 5000; // You can choose any available port

// Middleware
app.use(cors());
app.use(express.json());

// --- MySQL Database Connection ---
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <<< REMEMBER TO REPLACE THIS
    password: 'Severin.10', // <<< REMEMBER TO REPLACE THIS
    database: 'project' // <<< Changed to 'project'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database: project');
});

// Assuming your 'buyer' table has columns like:
// buyer_id (PK, AUTO_INCREMENT), name, email, password, createdAt
// You might need to check the exact column names in your 'buyer' table in MySQL Workbench.

// Register/Sign Up Route for Buyers
app.post('/api/signup', async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Check if buyer already exists
        const [existingBuyers] = await db.promise().query('SELECT * FROM buyer WHERE email = ?', [email]);
        if (existingBuyers.length > 0) {
            return res.status(409).json({ message: 'Email already registered.' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert new buyer into the 'buyer' table
        // Adjust column names if they are different in your 'buyer' table
        const query = 'INSERT INTO buyer (name, email, password) VALUES (?, ?, ?)'; // Assuming 'name', 'email', 'password' columns
        await db.promise().query(query, [fullName, email, hashedPassword]);

        res.status(201).json({ message: 'Buyer registered successfully!' });
    } catch (error) {
        console.error('Error during buyer signup:', error);
        res.status(500).json({ message: 'Server error during signup.' });
    }
});

// Login Route for Buyers
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Find buyer by email
        const [buyers] = await db.promise().query('SELECT * FROM buyer WHERE email = ?', [email]);

        if (buyers.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const buyer = buyers[0];

        // Compare provided password with hashed password
        const isMatch = await bcrypt.compare(password, buyer.password); // Assuming 'password' column

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        res.status(200).json({ message: 'Login successful!', user: { id: buyer.buyer_id, fullName: buyer.name, email: buyer.email } });
    } catch (error) {
        console.error('Error during buyer login:', error);
        res.status(500).json({ message: 'Server error during login.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});