const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 80

//Express related things
// app.use(express.static('static', options))
app.use('/static', express.static('static'))//This code print as it is on the webpage which is present in static folder, This serves the static page
app.use(express.urlencoded())
//Pug related things
app.set('view engine', 'pug') // Setting the template engine as pug
app.set('views', path.join(__dirname, 'views')) //This line let code know from which directory it have to read html.

app.get('/',(req, res)=>{
    // const con = "This is what it sholud be and what it should be is how it have to";
    const params = {}
    res.status(200).render('index.pug', params)
})

app._router.post('/',(req,res)=>{

})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})