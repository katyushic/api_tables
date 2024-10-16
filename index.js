const express = require('express')
const database = require('./services/database')

const app = express()

app.get('/category', (req, res) => {
    database.pool.query('SELECT * FROM category')
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            return res.status(500).json({ error: error.message });
        });
});

app.listen(3000, () => console.log('Server started on port 3000'));