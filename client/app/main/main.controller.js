'use strict';

angular.module('diyApp')
  .controller('MainCtrl', function($scope, $http, diyApiFactory){
    $scope.favorites1 = [];
    $scope.favorites2 = [];
    var faveObject = diyApiFactory.getFavorites();
    faveObject.then(function(data){
      angular.forEach(data, function(item, index){
        if (index === 0 || index % 2 === 0){
          $scope.favorites1.push(item);
        } else {
          $scope.favorites2.push(item);
        }
      });
    });

    $scope.comments = [];
    var commentObject = diyApiFactory.getComments();
    commentObject.then(function(data){
      $scope.comments = data;
    });

    $scope.user = [];
    var userObject = diyApiFactory.getUser();
    userObject.then(function(data){
      console.log('data', data);
      $scope.user = data;
    })

    // $scope.awesomeThings = [];
    //
    // $http.get('/api/things').success(function(awesomeThings){
    //   $scope.awesomeThings = awesomeThings;
    // });
  });
