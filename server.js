const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')

require('dotenv').config();

const app = express();
app.use(express.json()); app.use(bodyParser.json()); app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance);
        console.log('Db is connected');
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

app.get('/ping', (req, res) => {
    res.send('Cool Beans Dude');
});

app.post('/post', (req, res) => {
    const {string} = req.body;
    console.log(string)
    res.send(`${string}`)
})

app.post('/register', controller.register)

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));