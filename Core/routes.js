/**
 * Created by khm@med Co(r)p on 06/01/17.
 */

var express = require('express'),
    router  = express.Router(),
    tests   = require('./tests'),
    lab   = require('./lab'),
    babelify   = require('express-babelify-middleware'),
    passport= require('passport'),
    ejs     = require('ejs'),
    cssify     = require('cssify'),
    page     = require('../vendor/admins/profile'),
    role    = require('./roles'),
    layout  = require('../vendor/layout'),
    tgglbtn  = require('../vendor/sidebarToggleButton'),
    rtnavbar  = require('../vendor/navbarright');

//export Router to src files
require('../src/routes/visitor')(router);
require('../src/routes/member')(router);
require('../src/routes/lab')(router);


module.exports = function (app) {
    app.use('/', router);
};






//todo : Create a modified path to proxy to

//visitor area

router.get('/index.js', babelify('views/component/index.js',{minify: true, transform:[cssify]}));
router.get('/index', function(req, res, next){
    res.render('Layout.js',{title: 'index', page:'index home page', script: '/index.js'})
});

router.get('/table.js', babelify('views/component/Table.js',{minify: true}));
router.get('/header.js', babelify('views/component/Header.js',{minify: true}));
router.get('/tabl', (req, res, next) => {

    res.render('Table.js', {title: 'Express', foo: {bar: 'baz'}});

    next();
});

router.get('/test.json', function (req, res, next) {

    var data = {username : 'khm@med', password: '6666666'}
    data = JSON.stringify(data);

    res.send(data);
});


router.get('/eLab',(req, res, next)=>{

    res.render('Layout.js',{title: 'eLab', page:'eLab home page', script: '/js/eLab.js'})
    });
router.get('/:user/eLab',(req, res, next)=>{

    res.render('Layout.js',{title: 'eLab', page:'eLab home page', script: '/eLab.js'})
    });
router.post('/Login', (req,res)=>{console.log('work')});
router.get('/Login.js',babelify('views/Login.js',{minify: false, transform:[cssify]}));
/*

router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});
//router.get('/analyse', tests.one);
//router.get('/labo', function (req,res) {});
//router.get('/contactus', function (req,res) {});
//router.get('/about', function (req,res) {});*/


router.get('/api', function (req, res, next) {
    res.send({
    'express' : req.user
  })
});





