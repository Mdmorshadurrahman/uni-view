const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourUser',
    password: 'yourPassword',
    database: 'yourDatabase'
});

app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;
    console.log(username)
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
            if (err) {
                console.error('Error in database operation', err);
                return res.status(500).json({ success: false });
            }
            res.json({ success: true });
        });
    } catch (error) {
        console.error('Error while hashing password', error);
        res.status(500).json({ success: false });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));
