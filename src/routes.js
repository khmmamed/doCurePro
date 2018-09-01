const 	express		= require('express'),
		router  	= express.Router(),
		babelify   	= require('express-babelify-middleware'),
		//lab     	= require('../Core/lab'),
        passport    = require('passport'),
		User 		= require('./member/login'),
        Lab        = require('./lab');




//No Authentification Required Area (NARA)
    
    /**Pages**/
router.get(     '/'               , (req, res, next)=>{ res.render('Layout.js',{title: 'eLab', page:'MedApp - Home', script: '/index.js'}) });
router.get(     '/userMenu'       , (req, res, next)=>{ req.user ? res.send({user : req.user }) : res.send({user : '' } ) })
router.get(     '/index.js'       , (req, res, next)=>{ next()},babelify('views/main.js',{minify: true}))
router.get(     '/eLab'           , (req, res, next)=>{ res.render('Layout.js',{title: 'eLab', page:'eLab home page', script: '/eLab.js'}) });
router.get(     '/eLab.js'        , (req, res, next)=>{ next() },babelify('views/frontApi/eLab/eLab.js',{minify: true}));
router.get(     '/Login'          , (req, res)=>{ res.render('Layout.js',{script: '/Login.js'})});
router.post(    '/users'          , passport.authenticate('local-login'), (req, res)=>{ res.send({msg : 'success'}) });
router.get(     '/success'        , (req, res)=>{res.send('success')});
router.get(     '/failure'        , (req, res)=>{res.send('failure')});
router.get(     '/Login.js'       , babelify('views/Login.js',{minify: true }),(req, res)=>{console.log('work')});
router.post(    '/Login'          , (req,res)=>{console.log(req.body)});

    /** API **/
router.get(     '/users/:email'   , User.searchEmailEntry);
router.get(     '/eLab/tests'     , (res,req,next)=>{ next() } ,Lab.autoCompleteSearchTest);

//SupAdmin Area


//Admin Area
router.get(     '/admlab.js'     ,  babelify('views/adminApi/AdmLab.js',{minify: true }));
router.get(     '/:user'         ,  (req, res, next) => { res.render('Layout.js', {title: 'Administration', page : 'Admin Home page', script : '/admlab.js'}); next(); });

//Organism Area

//Professional Area 

//User area

router.get('/:user/eLab/tests', Lab.testTable);
router.post('/:user/eLab/tests', Lab.editTest.saveTestFinance);
router.post('/:user/eLab/tests/Reference', Lab.editTest.saveTestReference);
router.get('/:user/eLab/tests/show/:test', Lab.editTest.showTest);
router.get('/:user/eLab/tests/:test', Lab.editTest.showTestUpdate);

module.exports = function (app) {
	app.use('/', router);
}