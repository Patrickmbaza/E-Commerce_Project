require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


// For demo purposes a static product list or simple DB call
const PRODUCTS = [
{ id: 1, name: 'T-shirt', price: 2000 },
{ id: 2, name: 'Sneakers', price: 12000 }
];


app.get('/api/products', (req, res) => {
res.json(PRODUCTS);
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend listening on ${port}`));