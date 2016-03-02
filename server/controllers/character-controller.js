/**
 * Created by Taru on 29.2.2016.
 */

var Character = require('../models/characters');

// functions go here
/**
 * Adds a character for the current user
 * @param req
 * @param res
 */

module.exports.addCharacter = function(req, res) {
    console.log(req.body);

    var newCharacter = new Character(req.body);
    newCharacter.save();

    res.json(req.body);
}

/**
 * Lists characters for the current user
 * @param req
 * @param res
 */
module.exports.listCharacters = function(req, res) {

    var ownerId = req.query.ownerId;
    Character.find({owner: ownerId}, function(err, charactersData) {
        if(err) {
            console.log('Error occurred');
        } else {
            res.json(charactersData);
            console.log(charactersData);
        }
    })
}

/**
 * Executes an update for selected character
 * @param req
 * @param res
 */
module.exports.updateCharacter = function(req, res) {

}

/**
 * Deletes currently selected character
 * @param req
 * @param res
 */
module.exports.deleteCharacter = function(req, res) {

}