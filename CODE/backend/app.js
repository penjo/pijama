var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors'); 

const mongoose = require('mongoose');

// Khai bao router de tao API
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRouter');

var app = express();

require('dotenv').config()

//=========Connect mongoDB bằng localhost========= 
//Khởi tạo connect tới database mongoDB
//configure mongoose
mongoose.connect(
  process.env.DB_CONNECT_STRING || "mongodb://localhost:27017/PijamaDB",
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("DB connection Error: ",err);
    } else {
      console.log("Connected to MongoDB!!!");
    }
  }
);
//=========END Connect mongoDB bằng localhost=========

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors()); 


app.use('/', indexRouter);
app.use('/api/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/// dsadsadasa dsadas dsadsads 
