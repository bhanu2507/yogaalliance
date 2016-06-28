'use strict';

/**
 * @ngdoc function
 * @name yogafireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yogafireApp
 */
angular.module('yogafireApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
