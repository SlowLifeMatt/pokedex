const express = require('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000;
const methodOverride = require('method-override');


app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));


// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { 
    allPokemon: pokemon });
});
// new
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { 
        allPokemon: pokemon[req.params.id],

    });
});

// create
 //post route
 app.post('/pokemon', (req,res) => {
    console.log(req.body)
    
    let stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed
    }
    let newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.types,
        stats: stats,

    }
    pokemon.push(newPokemon)
    // res.send('Data have been received')
  
    res.redirect('/pokemon')
  })

// delete 
app.delete('/pokemon/:id', (req,res) => {
    console.log("delete route")
    pokemon.splice(req.params.id,1);
    res.redirect('/pokemon')
})

//edit
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs',  {
        allPokemon: pokemon[req.params.id],
        id: req.params.id, 
      }
    );
  });
 // update
 app.put('/pokemon/:id', (req,res) => {
    pokemon[req.params.id] = req.body
    res.redirect('/pokemon')
 }) 


// listener
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  });






