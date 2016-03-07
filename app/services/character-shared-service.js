/**
 * Created by Taru on 7.3.2016.
 */
(function() {
    angular.module('TimeWaste',[])
        .factory(characterSharedService, function($rootScope){

            var characterSharedService = {};

            characterSharedService.prepForPublish = function(character) {
                this.sharedCharacter = character;
                this.publishCharacter();
            }

            characterSharedService.publishCharacter = function() {
                $rootScope.$broadcast('handlePublish');
            }

            return characterSharedService;
        })
}());
