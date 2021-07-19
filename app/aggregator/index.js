const cors = require('cors');
const express = require('express');
const Aggregate_Users = require('./routes/aggregate-users')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const corsOptions = {
    exposedHeaders: ['token', 'Authorization ', 'Content-Type', 'Host']
};
app.use(cors(corsOptions));
app.set('trust proxy', true)

app.use("/aggregator", Aggregate_Users);

console.log("listening to port 4000")
app.listen(4000);