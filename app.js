//importing express for dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//initializing the app
const app = express();
//requiring the dotenv files
require('dotenv').config();

//all my middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// static files setup
app.use(express.static('public'));

//setting up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting the port
const port = process.env.PORT || 3000;
// app listening on 3000
app.listen(port, () => {
    console.log(`Surviving on port ${port}`);
})

//index route
app.get('/', (req, res) => {
    res.render('index', {
        message: 'Welcome to APP On My Feet!',
        currentPage: 'home',
    });
});

//importing routes
const memberRoutes = require('./routes/member-routes');
app.use('/members', memberRoutes);




// Error handler
app.get('*', (req, res) => {
    res.status(404).send('Page not founf :((')
});