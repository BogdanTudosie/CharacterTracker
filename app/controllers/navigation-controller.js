/**
 * Created by Taru on 26.2.2016.
 */
(function(){
    angular.module('TimeWaste')
        .controller('NavigationController',['$scope', '$state', '$http', '$location',
                    function($scope, $state, $http, $location){

            if(localStorage['User-Data']) {
                $scope.loggedIn = true;
            } else {
                $scope.loggedIn = false;
            }

            $scope.logUserIn = function() {
                $http.post('api/user/login', $scope.login).success(function(response){
                    localStorage.setItem('User-Data', JSON.stringify(response));
                    $scope.loggedIn = true;
                    $location.path('/');
                }).error(function(error){
                    $location.path('/');
                    console.log(error);
                });
            }

            $scope.logOut = function() {
                localStorage.clear();
                $scope.loggedIn = false;
                $location.path('/');
            }
        }]);
}());