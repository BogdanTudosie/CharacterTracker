/**
 * Created by Taru on 26.2.2016.
 */
var mongoose = require('mongoose');
var User = require('../models/users');

module.exports.signup = function(req, res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save();

    res.json(req.body);
}

module.exports.login = function(req, res) {
    User.find(req.body, function(err, results){

        if(err) {
            console.log(err);
        }
        if(results && results.length === 1) {

            var UserData = results[0];
            res.json({
                    email: req.body.email,
                    id: UserData._id
            });
        }
    })
}