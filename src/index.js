const express = require('express');
const app = express();
const port = 3000;

// ejs view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// static files from 'public' directory
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
  });
  
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/jobs', (req, res) => {
    res.render('jobs');
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
