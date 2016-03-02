/**
 * Created by Taru on 2.3.2016.
 */
(function(){
    angular.module('TimeWaste')
        .controller('AddCharacterController', ['$scope', '$state', '$http', function($scope, $state, $http){

            // check if we have user Data
            if(localStorage['User-Data'] !== undefined) {
                $scope.user = JSON.parse(localStorage['User-Data']);
            }

            $scope.addCharacter = function() {

                $scope.newCharacter.owner = $scope.user.id;

                $http.post('api/characters/newcharacter', $scope.newCharacter)
                    .success(function(res){

                    })
                    .error(function(err){
                        if(err) {
                            console.log(err);
                        }
                    })
            }

        }]);
}());