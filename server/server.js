// Required packages
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

// Initialize express app
const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'project',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL Connection Error:', err);
  } else {
    console.log('Connected to MySQL database: project');
  }
});

/* ------------------------------
   ADMIN LOGIN
-------------------------------- */
app.post('/api/adminlogin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const [rows] = await db.promise().query('SELECT * FROM administrator WHERE email = ?', [email]);

    if (rows.length === 0 || rows[0].password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const admin = rows[0];

    res.status(200).json({
      message: 'Login successful!',
      user: {
        id: admin.adminID,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

/* ------------------------------
   BUYER SIGNUP & LOGIN
-------------------------------- */
app.post('/api/signup', async (req, res) => {
  const { fullName, email, phoneNumber, password } = req.body;

  if (!fullName || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const [existingBuyers] = await db.promise().query('SELECT * FROM buyer WHERE email = ?', [email]);
    if (existingBuyers.length > 0) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.promise().query(
      'INSERT INTO buyer (name, email, phoneNumber, password) VALUES (?, ?, ?, ?)',
      [fullName, email, phoneNumber, hashedPassword]
    );

    res.status(201).json({ message: 'Buyer registered successfully!' });
  } catch (error) {
    console.error('Buyer signup error:', error);
    res.status(500).json({ message: 'Server error during signup.' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const [buyers] = await db.promise().query('SELECT * FROM buyer WHERE email = ?', [email]);
    if (buyers.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const buyer = buyers[0];
    const isMatch = await bcrypt.compare(password, buyer.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({
      message: 'Login successful!',
      user: {
        id: buyer.buyer_id,
        name: buyer.name,
        email: buyer.email,
        phoneNumber: buyer.phoneNumber,
      },
    });
  } catch (error) {
    console.error('Buyer login error:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

/* ------------------------------
   SELLER SIGNUP & LOGIN
-------------------------------- */
app.post('/api/seller-signup', async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  if (!name || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const [existing] = await db.promise().query('SELECT * FROM seller WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.promise().query(
      'INSERT INTO seller (name, email, phoneNumber, password) VALUES (?, ?, ?, ?)',
      [name, email, phoneNumber, hashedPassword]
    );

    res.status(201).json({ message: 'Seller registered successfully.' });
  } catch (err) {
    console.error('Seller signup error:', err.message);
    res.status(500).json({ message: 'Server error during seller signup.' });
  }
});

app.post('/api/seller-login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const [sellers] = await db.promise().query('SELECT * FROM seller WHERE email = ?', [email]);
    if (sellers.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const seller = sellers[0];
    const isMatch = await bcrypt.compare(password, seller.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({
      message: 'Login successful!',
      user: {
        id: seller.sellerID,
        name: seller.name,
        email: seller.email,
        phoneNumber: seller.phoneNumber,
      },
    });
  } catch (err) {
    console.error('Seller login error:', err);
    res.status(500).json({ message: 'Server error during seller login.' });
  }
});

/* ------------------------------
   ADMIN CRUD ROUTES
-------------------------------- */
// Get all buyers
app.get('/api/buyer', async (req, res) => {
  try {
    const [buyer] = await db.promise().query(
      'SELECT buyerID, name, email, phoneNumber FROM buyer'
    );
    res.status(200).json(buyer);
  } catch (err) {
    console.error('Error fetching buyers:', err);
    res.status(500).json({ message: 'Server error while fetching buyers.' });
  }
});

// Get all sellers
app.get('/api/sellers', async (req, res) => {
  try {
    const [sellers] = await db.promise().query(
      'SELECT sellerID, name, email, phoneNumber FROM seller'
    );
    res.status(200).json(sellers);
  } catch (error) {
    console.error('Error fetching sellers:', error);
    res.status(500).json({ message: 'Server error while fetching sellers.' });
  }
});

// Get a single seller by ID
app.get('/api/seller/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [sellers] = await db.promise().query(
      'SELECT sellerID, name, email, phoneNumber FROM seller WHERE sellerID = ?',
      [id]
    );

    if (sellers.length === 0) {
      return res.status(404).json({ message: 'Seller not found.' });
    }

    res.status(200).json(sellers[0]);
  } catch (error) {
    console.error('Error fetching seller:', error);
    res.status(500).json({ message: 'Server error while fetching seller.' });
  }
});

// Get all vehicle listings
app.get('/api/vehicles', async (req, res) => {
  try {
    const [vehicles] = await db.promise().query('SELECT * FROM listedvehicles');
    res.status(200).json(vehicles);
  } catch (err) {
    console.error('Error fetching vehicle listings:', err);
    res.status(500).json({ message: 'Server error fetching vehicle listings.' });
  }
});

/* ---- ADMIN Update & Delete Buyers ---- */

// ✅ GET Buyer by ID
app.get('/api/admin/buyer/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.promise().query(
      'SELECT * FROM buyer WHERE buyerID = ?', [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('❌ Error fetching buyer:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ PUT Update Buyer
app.put('/api/admin/buyer/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phoneNumber } = req.body;

  if (!name || !email || !phoneNumber) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await db.promise().query(
      'UPDATE buyer SET name = ?, email = ?, phoneNumber = ? WHERE buyerID = ?',
      [name, email, phoneNumber, id]
    );

    res.status(200).json({ message: 'Buyer updated successfully' });
  } catch (error) {
    console.error('❌ Error updating buyer:', error);
    res.status(500).json({ message: 'Server error during update' });
  }
});

// ✅ DELETE Buyer (optional)
app.delete('/api/admin/buyer/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db.promise().query('DELETE FROM buyer WHERE buyerID = ?', [id]);
    res.status(200).json({ message: 'Buyer deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting buyer:', error);
    res.status(500).json({ message: 'Server error during deletion' });
  }
});


/* ---- ADMIN Update & Delete Sellers ---- */
app.put('/api/admin/seller/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phoneNumber } = req.body;

  if (!name || !email || !phoneNumber) {
    return res.status(400).json({ message: 'Name, email, and phone number are required.' });
  }

  try {
    await db.promise().query(
      'UPDATE seller SET name = ?, email = ?, phoneNumber = ? WHERE sellerID = ?',
      [name, email, phoneNumber, id]
    );

    res.status(200).json({ message: 'Seller updated successfully.' });
  } catch (error) {
    console.error('Error updating seller:', error);
    res.status(500).json({ message: 'Server error during seller update.' });
  }
});

app.delete('/api/admin/seller/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db.promise().query('DELETE FROM seller WHERE sellerID = ?', [id]);
    res.status(200).json({ message: 'Seller deleted successfully.' });
  } catch (error) {
    console.error('Error deleting seller:', error);
    res.status(500).json({ message: 'Server error during seller deletion.' });
  }
});

/* ---- ADMIN Delete Vehicle Listing ---- */
app.delete('/api/admin/vehicle/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db.promise().query('DELETE FROM listedvehicles WHERE vehicleID = ?', [id]);
    res.status(200).json({ message: 'Vehicle listing deleted successfully.' });
  } catch (error) {
    console.error('Error deleting vehicle listing:', error);
    res.status(500).json({ message: 'Server error during vehicle deletion.' });
  }
});

/* ------------------------------
   SERVER START
-------------------------------- */
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
