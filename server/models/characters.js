/**
 * Created by Taru on 29.2.2016.
 */

/**
 * Model for the characters owned by different users.
 * Stored in the 'Characters' collection
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Character', {

    // fields go here
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    totalExperience: {
        type: Number,
        required: false
    },
    remainingExperience: {
        type: Number,
        required: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});