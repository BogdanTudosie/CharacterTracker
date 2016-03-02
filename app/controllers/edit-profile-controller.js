    /**
 * Created by Taru on 26.2.2016.
 */
    (function(){
        angular.module('TimeWaste')
            .controller('EditProfileController', ['Upload', '$scope', '$state', '$http', function(Upload, $scope, $state, $http){


                $scope.user = JSON.parse(localStorage['User-Data']) || undefined;
                /**
                 * Function to upload the user's profile photo
                 */
                $scope.$watch(function(){
                    return $scope.file;
                }, function() {
                    $scope.upload($scope.file);
                });

                $scope.upload = function( file ) {
                    if( file ) {

                        console.log('We have a file');
                        Upload.upload({
                            url: 'api/profile/editPhoto',
                            method: 'POST',
                            data: {userId: $scope.user._id},
                            file: file
                        })
                        .progress(function(event) {
                            console.log("File uploading: " + file.name);
                        })
                        .success(function(data){
                            console.log('Success');
                        })
                        .error(function(error){
                            console.log("Error: "+error);
                        })
                    }
                }
            }]);
    }());