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
                $scope.userData = JSON.parse(localStorage.getItem('User-Data'));
                $scope.ownerId = $scope.userData.id;
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
            $scope.listAll = function(req, res) {
                $http({
                    url: '/api/characters/list?ownerId='+$scope.ownerId,
                    method: 'GET',
                }).success(function(response){
                    $scope.characters = response;

                }).error(function(error){
                    if(error) {
                        console.log(error);
                    }
                })
            }

            /**
             * Update character
             */
            $scope.updateCurrentCharacter = function(characterInfo) {

                $location.path('/edit-character');

            }


            /**
             * Delete character
             */
            $scope.deleteCurrentCharacter = function(req, res){

            }

        }]);

}());