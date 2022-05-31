/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const expressEjsLayouts = require('express-ejs-layouts');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

mongoose.connect(process.env.DB)
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(expressEjsLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('layout', './layouts/base');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', require('./routes/main.routes'));
app.use('/blog', require('./routes/blog.routes'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
