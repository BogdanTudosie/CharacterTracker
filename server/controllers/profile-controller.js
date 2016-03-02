/**
 * Created by Taru on 29.2.2016.
 */
var User = require('../models/users');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req, res) {
    var file = req.files.file;
    var userId = req.body.userId;

    console.log("User " + userId + " is uploading ", file);

    var uploadDate = new Date().toISOString();
    uploadDate = uploadDate.replace(".","");
    uploadDate = uploadDate.replace("-", "");
    uploadDate = uploadDate.replace(":", "");

    var tempPath = file.path;
    var targetPath = path.join(__dirname + "../../uploads/" + userId + uploadDate + file.name);
    var savePath = "/uploads/" + userId + uploadDate + fileName;

    fs.rename(tempPath, targetPath, function(error) {
        if(error) {
            console.log(error);
        }
        else {
            User.findById(userId, function(error, userData){
                var user = userData;
                user.image = savePath;
                user.save(function(error) {
                   if(error) {
                       console.log("Save failed");
                   } else {
                       console.log("Save successful");
                   }
                })
            })
        }
    });
}