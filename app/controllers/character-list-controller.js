/**
 * Created by Taru on 2.3.2016.
 */
/**
 * This is the Character List controller
 */

(function(){
    angular.module('TimeWaste')
        .controller('CharacterListController',['$scope', '$state', '$http','$location', function($scope, $state, $http, $location){

            // Do I have any user Data?
            if(localStorage['User-Data']) {
                console.log("We have user data stored");
            }
            else {
                console.log("Unable to find any user Data");
            }

            // Functions for our controller

            /**
             * showAddForm() - reroutes to the add character view
             */
            $scope.showAddForm = function(){
                $location.path('/add-character');
            }

            /**
             * listAll - lists the characters for the current user in the database
             */
            $scope.listAll = function() {

                var ownerId = localStorage.getItem('User-Data')._id;
                console.log(ownerId);

                $http({
                    url: '/api/characters/list',
                    method: 'GET',
                    params: {
                        owner: ownerId
                    }
                }).success(function(response){

                }).error(function(error){
                    if(error) {
                        console.log(error);
                    }
                })

                // OLD code do not delete it please

                /*$http.get('api/characters/list', params: {owner: owner_id})
                 .success(function(response){
                 console.log(data);
                 console.log("Something");
                 })
                 .error(function(error){
                 console.log(error);
                 })*/

            }

            /**
             * Update character
             */
            $scope.updateCurrentCharacter = function(req, res) {

            }

            /**
             * Delete character
             */
            $scope.deleteSelectedCharacter = function(req, res){

            }

        }]);

}());