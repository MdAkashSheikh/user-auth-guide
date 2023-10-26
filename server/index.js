require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routeAll = require('./routes/route');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5001;

mongoose.connect(process.env.DB_CON)
.then(() => console.log('DB Connected Successfully'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send({
        message: "This is Message..."
    })
})

app.use(routeAll);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})