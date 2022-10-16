const express = require('express');
const Pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000;
const methodOverride = require('method-override');


app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { 
    data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
res.render('show.ejs', { 
    data: Pokemon[req.params.id]
});
});



// listener
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  });