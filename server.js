// Require Dependencies
const express = require('express');
const fruits = require('./models/fruits');
const app = express();

console.log(fruits)

// Express Web Server Port Variable
const port = 3000;



//mount middleware
// app.use((req,res,next) =>{
//   console.log(req.body)
//   next()
// })
// this adds data to req.body so we can access it in the create action
app.use(express.urlencoded({ extended: false }))
//mount routes

// INDEX
app.get('/fruits/', (req, res) => {
 res.render('index.ejs', {allFruits: fruits});
});

// New

app.get('/fruits/new',(req,res) =>{
  res.render('new.ejs')
})
// D

// U

// C
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false //do some data correction
  }
  fruits.push(req.body)
  console.log(fruits)
  res.redirect("/fruits")
  res.send("data received")
})


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
