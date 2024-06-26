const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('The Dragon News Running Port 5000');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    const categoryNews = news.filter(n => parseInt(n.category_id) === id);
    res.send(categoryNews);
})

app.listen(port, () => {
    console.log(`The Dragon News Server Running Port ${port}`);
})