// Require Dependencies
const express = require('express');
const fruits = require('./models/fruits');
const app = express();

console.log(fruits)

// Express Web Server Port Variable
const port = 3000;






// INDEX
app.get('/fruits/', (req, res) => {
 res.render('index.ejs', {allFruits: fruits});
});

// N

// D

// U

// C

// E

// SHOW
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  // render is a special methods that informs the template engine to render a template
  // we just provided the name as a string
    res.render('show.ejs',{
      fruit:fruits[req.params.indexOfFruitsArray] // this references a single fruits
      // and passes it to the template so we can access it there
    });
});


// tell the app to listen
app.listen(port, () =>{
    console.log(`Listening on port`, port)
});
