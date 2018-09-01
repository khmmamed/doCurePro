/**
 * Created by khm@med Co(r)p on 27/04/16.
 */

var express      = require('express'),
    app          = express(),
    mongoose     = require('mongoose'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    core         = require('./Core/core'),
    cookieParser = require('cookie-parser'),
    session      = require('express-session')
    bodyParser   = require('body-parser'),
    passport     = require('passport'),
    config       = require('./config'),
    _            = require('lodash');



app.use('basedir', express.static(__dirname));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/MPAPP", {
        useMongoClient: true
    })
    .then(() => { console.log('MongoDB connected...')})
    .catch(err => console.log(err));

// sync models and redirect dir
var appPath = process.cwd();
core.walk(appPath + '/Modules', null, function (path) {
    require(path);
});
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/react-table')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/jquery-validation/dist')); // redirect JS jquery validation
app.use('/js', express.static(__dirname + '/node_modules/jquery-typeahead/dist')); // redirect JS jquery validation
app.use('/js', express.static(__dirname + '/public/js')); // redirect js public
app.use('/js', express.static(__dirname + '/public/assets/js')); // redirect js public
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/public/css')); // redirect CSS public
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/fonts')); // redirect font public
app.use('/fonts', express.static(__dirname + '/node_modules/public/fonts')); // redirect font public
app.use('/img', express.static(__dirname + '/Assets/images')); // redirect img public
//app.use('/css', less(__dirname + '/public/css'));

//define views folder
//app.set('views', path.join(__dirname, 'views/'));
//app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
//app.set('view engine', 'html');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());
//app.engine('html', require('ejs-mate'));
//app.locals._layoutFile = 'layout.html';


//define locals
_.extend(app.locals,{
    config : config,
    _ : _
});


//favicon
app.use(favicon(__dirname + '/public/assets/app/imgs/phi.ico'));

//secure session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'khm@medCo(r)p'
    /*,
     store: new RedisStore*/
}));
app.use(passport.initialize());
app.use(passport.session());
require('./Core/pass')(passport);
//app.use(csrf({}));
// error handler
/*
app.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);

    // handle CSRF token errors here
    else if (err.code === 'EBADCSRFTOKEN'){
        return res.redirect('back');
    }
    next();
});
*/
//request params

app.use(function (req,res,next) {
    req.header('X-Powered-By', 'khm@med Co(r)p');
    //res.locals.token = req.csrfToken();
    if(req.session.email){
        res.locals.email = req.session.email;
    }

    next();
});

//MTRoutes
require('./src/routes')(app);




app.listen(8081);


console.log('server running on 8081 port\n');