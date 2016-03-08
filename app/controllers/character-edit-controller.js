/**
 * Created by Taru on 7.3.2016.
 */
(function(){
    angular.module('TimeWaste')
        .controller('CharacterEditController', ['$scope', '$state', '$http', '$location',
                    function ($scope, $state, $http, $location){

            /**
             *
             */
            $scope.readCharacter = function() {
                /* $scope.currentCharacter.name = CharacterData.getName();
                $scope.currentCharacter.description = CharacterData.getDescription();
                $scope.currentCharacter.totalExperience = CharacterData.getTotalExperience();
                $scope.currentCharacter.remainingExperience = CharacterData.getRemainingExperience();*/
            }


            /**
             * Saves current character
             */
            $scope.saveCharacter = function() {

            }


            /**
             * Returns to the character list
             */
            $scope.back = function() {
                $location.path('/list-characters');
            }
        }]);
}());