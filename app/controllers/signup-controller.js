/**
 * Created by Taru on 26.2.2016.
 */
(function(){
    angular.module('TimeWaste')
        .controller('SignupCtrl', ['$scope','$state', '$http', '$location', function($scope, $state, $http, $location){
            $scope.createUser = function(){
                console.log($scope.newUser);
                $http.post('api/user/signup', $scope.newUser).success(function(res){
                        $location.path('/');
                    }).error(function(error){
                        console.log('Error occurred');
                    });
            };

            $scope.cancelSignup = function(){
                $location.path('/');
            }

        }]);
}());