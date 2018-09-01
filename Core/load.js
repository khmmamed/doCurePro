/***********************************************
 *          load.js file
 *    Created by KHM@MED Co(r)p
 *
 * - Created on 03-15-2017
 **********************************************/


module.exports = {
    
    module : {
        users       : require('../Modules/users'),
        tests       : require('../Modules/tests'),
        counters    : require('../Modules/counters'),
        labos       : require('../Modules/laboratories')
    }

    //todo : Sanitize data before saving
    
};