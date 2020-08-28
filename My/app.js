(function () {
  'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
  $scope.name = "Aslam";
  $scope.sayHello =  function () {
    return 'Hello Coursera';
  }
});

})();
