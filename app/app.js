/**
 * Created by Taru on 26.2.2016.
 */
(function(){
   angular.module('TimeWaste', ['ui.router', 'ngFileUpload'])
       .config(function($stateProvider){
          $stateProvider.state('mainpage', {
              url: "/",
              templateUrl: "app/views/main/main.html",
              controller: "MainController"
          }).state('signUp', {
             url: "/signup",
             templateUrl: "app/views/signup/signup.html",
             controller: "SignupCtrl"
          }).state('/navigation', {
              url:'',
              templateUrl: '',
              controller: 'NavigationController'
          }).state('editProfile', {
              url: "/edit-profile",
              templateUrl: "app/views/profile/edit-profile.html",
              controller: "EditProfileController"
          }).state('listAll', {
              url: "/list-characters",
              templateUrl: "app/views/character/character-list-view.html",
              controller: "CharacterListController"
          }).state('addCharacter',{
              url: "/add-character",
              templateUrl: "app/views/character/character-add-view.html",
              controller: "AddCharacterController"
          }).state('editCharacter',{
              url: "/edit-character",
              templateUrl: "app/views/character/character-edit-view.html",
              controller: "CharacterEditController"
          })
       })
}());