/**
 * Created by Taru on 2.3.2016.
 */
/**
 * This is the Character List controller
 */

(function(){
    angular.module('TimeWaste')
        .controller('CharacterListController',['$scope', '$state', '$http', '$location',
                    function($scope, $state, $http, $location){

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
            $scope.updateCurrentCharacter = function(character) {

                // -- assign here all the variables taken from the character parameter
                // and send them via service to the Edit Controller
                console.log("Character name: " + character.name + " Total XP: " +
                                character.totalExperience + " Remaining XP: " + character.remainingExperience);


                /*CharacterData.setName(character.name);
                CharacterData.setDescription(character.description);
                CharacterData.setTotalExperience(character.totalExperience);
                CharacterData.setRemainingExperience(character.remainingExperience);*/

                $location.path('/edit-character');
            }


            /**
             * Delete character
             */
            $scope.deleteCurrentCharacter = function(character){

                var characterId = character._id;
                var index = $scope.characters.indexOf(character);
                console.log('Item found at: ' + index);

                // do an HTTP Delete
                $http({
                    url: '/api/characters/delete/'+characterId,
                    method: 'DELETE'
                }).success(function(response){
                    $state.reload();
                    console.log('Delete successful');
                }).error(function(error){
                    console.log(error);
                })

            }

        }]);

}());