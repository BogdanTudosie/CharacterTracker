/**
 * Created by Taru on 7.3.2016.
 */
(function(){
    angular.module('TimeWaste')
        .controller('CharacterEditController', ['$scope', '$state', '$http', '$location', function ($scope, $state, $http, $location){

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