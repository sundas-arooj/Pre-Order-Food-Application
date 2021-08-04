const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
const config = require('./DB');
restRoute = require('./Routes/restRoutes');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{ useUnifiedTopology: true, useNewUrlParser: true})
    .then(
        ()=> {console.log('Database is connected')},
        err => { console.log('Cannot connect to the database '+ err)}
    );
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/restaurant',restRoute);

let port = process.env.PORT || 4000;

const server = app.listen(port,function(){
    console.log('Listening on port ' + port);
});
