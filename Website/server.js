const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const app = express();
const session = require("express-session");

const router = require('./router');
const bodyParser = require('body-parser');

const port = process.env.PORT||3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname,'public')))
app.use('/assets', express.static(path.join(__dirname,'public/assets')))

app.use('/route',router);

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}));

app.get('/',(req, response)=>{
    response.render('main',{title:"Number Conversion System"});
})

app.listen(port, ()=> {console.log("Listening to the server on http://localhost:3000")});