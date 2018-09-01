/**
 * Created by khm@med Co(r)p on 13/01/17.
 *
 */

var     User         = require('../Modules/users'),
        _            = require('underscore'),
        passport     = require('passport');
    

module.exports = {

    privilege : Boolean,

    //define users role
    role : {
         100    :       'supadmin'  ,
         1      :       'admin'     ,
         2      :       'moderator' ,
         3      :       'morals'    ,
         4      :       'director'  ,
         5      :       'surgeon'   ,
         6      :       'specialist',
         7      :       'generalist',
         8      :       'nurse'     ,
         9      :       'student'   ,
         10     :       'physician' ,
         11     :       'assistant' ,
         12     :       'pharmacist'
    },

    /**
     *
     * 
     * @returns string
     */
    getUserRole : function () {

        return userRole;
    },

    /**
     * only supAdmin
     * can use this
     * @param user
     * @param selectedEmail
     * @param newRole
     * @return
     */
    addRoleToUser : function (user, selectedEmail, newRole) {
        if (this.getRole(user) !== 'supadmin')
            return '[004] : You are not allowed for this action';
        User.find({email : selectedEmail },'role' ,function (err, doc) {
            if(err) return '[005] : ' + err;
            doc.role = newRole;
            doc.save(function (e) {
                if (e) return '[006] : ' + e;
            });
        })
    },

    /**
     * list all users
     * @param req res
     * @return result
     */
    listAllUsers : function (req, res) {

        User.find().lean().exec(function (err, users) {

            return res.render( './admins/users',{   users : users,
                                                    user : req.user
                                                });
        })
    },

    updateRole : function () {
        
    },
    
    userIs : function() {
        
        role = this.role;
        
        return this;
    },

    userCan : function () {
        if(this.role == 'admin'){
            action = 'all';
        }
        
        return action;
    },
    
    viewUser : function () {
        
    },

    addUser : function () {

    },

    createAccount : function () {

    },

    updateAccount : function () {

    },

    /**
     * findUserById
     * @param req
     * @param res
     * @return page render
     */
    findUserByEmail : function (req, res) {



    },

    findUserById : function () {

    },

    deleteAccount : function () {

    }
    
};

