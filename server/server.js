
const helmet=require('helmet');
const express = require('express');
const app = express();
const compression=require('compression');
//const db =  require('../models/index');
const home = require('../routes/home');
//const courses = require('../routes/courses');
const bookInfo = require('../routes/bookInfo');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());

app.use(helmet());
app.use(compression());

app.use('/', home);
//app.use('/api/courses', courses);
app.use('/api/books', bookInfo);

const port=process.env.port||3000
app.listen(port,()=>console.log(`listening on port ${port}`));