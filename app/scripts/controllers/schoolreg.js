/**
 * Created by bhanu on 5/7/16.
 */
'use strict';
/**
 * @ngdoc function
 * @name yogafireApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('yogafireApp')
  .controller('SchoolRegCtrl', function ($scope, Auth, $location, $q, Ref, $timeout) {

    $scope.createSchool = function() {
      console.log("here1");
        // var ref = Ref.child('users', user.uid), def = $q.defer();


        var ref = Ref.child('schools'), def = $q.defer();
        ref.set({schoolName: $scope.schoolName, ownerName: $scope.ownerName, qualify: $scope.qualify}, function(err) {
          $timeout(function() {
            if( err ) {
              def.reject(err);
            }
            else {
              def.resolve(ref);
            }
          });
        });
        return def.promise;
    };



    function redirect() {
      $location.path('/#');
    }

    function showError(err) {
      $scope.err = err;
    }


  });
