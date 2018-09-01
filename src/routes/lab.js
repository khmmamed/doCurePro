/**
 * Created by khm@med on 21/03/17.
 */

var Lab = require('../../Core/lab');



module.exports = function (router) {

    router.get('/search/', Lab.autoCompleteSearchTest);
    router.get('/Lab/', Lab.searchShowing);
    router.get('/Lab/tests', Lab.testTable);
    router.get('/member/:user/Lab', function (req, res, next) {
        res.render('./lab/lab',{
            user: req.user
        });

        next();
    } );
    router.get('/member/:user/Lab/tests/:test', Lab.testViewing);
    router.get('/member/:user/Lab/tests', Lab.testListingAll);
    router.post('/admin/:member/Lab/:test', Lab.testUpdating);
    router.get('/Lab/Laboratory', Lab.laboShowing);

};