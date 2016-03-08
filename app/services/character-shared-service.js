/**
 * Created by Taru on 7.3.2016.
 */
var app = angular.module('TimeWaste',[]);

app.factory('CharacterData', function() {
    var data = {
        Name: '',
        Description: '',
        TotalExperience: 0,
        RemainingExperience: 0
    }

    return {
        getName: function() {
            return data.Name;
        },

        setName: function(name) {
            data.Name = name;
        },

        getDescription: function() {
            return data.Description;
        },

        setDescription: function(description) {
            data.Description = description;
        },

        getTotalExperience: function() {
            return data.TotalExperience;
        },

        setTotalExperience: function(totalxp) {
            data.TotalExperience = totalxp;
        },

        getRemainingExperience: function() {
            return data.RemainingExperience;
        },

        setRemainingExperience: function(exp) {
            data.RemainingExperience = exp;
        }
    };
});