'use strict';

/**
 * Created by khm@med Co(r)p on 05/01/17.
 */

var fs = require('fs'),
    path = require('path'),
    password      = 'd6F3Efeq',
    crypto        = require('crypto'),
    __            = require('lodash'),
    sanitizeHtml  = require('sanitize-html'),
    algorithm     = 'aes-128-cbc';


module.exports = {

    /**
     *
     * @param modulesPaths
     * @param excludeDir
     * @param callback
     */
    walk : function (modulesPaths, excludeDir, callback) {
            fs.readdirSync(modulesPaths).forEach(function (file) {
                var newPath = path.join(modulesPaths, file);
                var stat = fs.statSync(newPath);
                if (stat.isFile() && /(.*)\.(js|coffee)$/.test(file)) {
                    callback(newPath);
                } else if (stat.isDirectory() && file !== excludeDir) {
                    walk(newPath, excludeDir, callback);
                }
            });
        },

    /**
     *
     * @param text
     * @returns {*}
     */
    encrypt : function (text) {
        var cipher = crypto.createCipher(algorithm, password);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },

    /**
     *
     * @param text
     * @returns {*}
     */
    decrypt : function (text) {
        var decipher = crypto.createDecipher(algorithm, password);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    },

    /**
     *
     * @param html
     * @returns {*}
     */
    sanitize : function (html) {
        html = sanitizeHtml(html);
        html = __.replace(html, '/', '-');
        
        return html;
    },

    /**
     * 
     * @param data
     * @returns {Array}
     */
    dataPrefetching : function (data) {

        var newData = [];

        __.forEach(data, function (value, key) {

            newData = value;
        });

        return newData;
    },

    /**
     * 
     * 
     * @param obj
     * @param userID
     * @returns {Array}
     */
    findUserEntryByID : function (obj, userID) {

        var userEntry = [];
    
        for(var i=0; i<obj.length; i++) {
            if (userID == obj[i].user){
                userEntry[i] = obj[i];
            } else {
                userEntry[i] = null;
            }
        }

        return __.remove(userEntry, null);
    }

};