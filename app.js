const express = require('express');
const app = express();
const {json,urlencoded}= express;

//esto es para parsear el body o la informacion que trae las peticiones
app.use(json());
app.use(urlencoded({
    extended: false
}));

require('./component/bicicleta/bicicleta.routes')(app);


module.exports = app;