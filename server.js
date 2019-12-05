const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')
const session = require('express-session')



require('dotenv').config();

const app = express();

app.use(express.json()); 
app.use(bodyParser.json()); 
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

massive(process.env.CONNECTION_STRING)
    .then((databaseVariable)=>{
        app.set('db', databaseVariable);
        console.log('Db is connected');
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

app.post('/login', controller.login);
app.post('/register', controller.register);
app.get('/logout', controller.logout);
app.post('/newbook', controller.makeBook);
app.get('/user/photo', controller.getPhoto)

app.get('/ping', (req, res, next) => {
    res.send('This Worked!')
})

const port = process.env.PORT;
function listening(){
    console.log(`Listening on port ${port}`)
}

app.listen(port, listening());