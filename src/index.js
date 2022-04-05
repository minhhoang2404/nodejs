const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes')
const db = require('./config/db')

db();

app.use(morgan('combined'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
