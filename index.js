const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('The Dragon News Running Port 5000');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`The Dragon News Server Running Port ${port}`);
})