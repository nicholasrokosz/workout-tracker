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

//////////////////////////////////////////////////////////
///////// ROUTES
require('./routes/api.js')(app);
require('./routes/view.js')(app);

//////////////////////////////////////////////////////////
///////// DB CONNECTION
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`Running! Go to localhost:${PORT}!`);
});
