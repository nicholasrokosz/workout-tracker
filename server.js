const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
// const User = require('./userModel.js');

const PORT = process.env.PORT || 3000;
const app = express();

//////////////////////////////////////////////////////////
///////// MIDDLEWARE
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

//////////////////////////////////////////////////////////
///////// DB CONNECTION
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`Running! Go to localhost:${PORT}!`);
});
