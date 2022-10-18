const express = require('express');
const Pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000;
const methodOverride = require('method-override');


app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { 
    data: Pokemon });
});
// new
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { 
        data: Pokemon[req.params.id]
    });
});

// create
app.post('/pokemon', (req,res) => {
    console.log(req.body)
    Pokemon.push(req.body)
    res.redirect('/pokemon')
})
// delete 
app.delete('/pokemon/:id', (req,res) => {
    console.log("delete route")
    Pokemon.splice(req.params.id,1);
    res.redirect('/pokemon')
})

// edit
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs',  {
        data: Pokemon[req.params.id],
        id: req.params.id, 
      }
    );
  });
 // update
 app.put('/pokemon/:id', (req,res) => {
    Pokemon[req.params.id] = req.body
    res.redirect('/pokemon')
 }) 
 //post route
app.post('/pokemon', (req,res) => {
    console.log(req.body)
  
    Pokemon.push(req.body)
    // res.send('Data have been received')
  
    res.redirect('/pokemon')
  })

// listener
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  });






