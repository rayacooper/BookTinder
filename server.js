const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance);
        console.log('Db is connected');
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.send('Cool Beans Dude');
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));