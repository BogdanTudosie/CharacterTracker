/**
 * Created by Taru on 26.2.2016.
 */
(function(){
    angular.module('TimeWaste')
        .controller('SignupCtrl', ['$scope','$state', '$http', function($scope, $state, $http){
            $scope.createUser = function(){
                console.log($scope.newUser);
                $http.post('api/user/signup', $scope.newUser).success(function(res){

                    }).error(function(error){
                        console.log('Error occurred');
                    });
            };
        }]);
}());