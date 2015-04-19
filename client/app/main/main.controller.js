'use strict';

angular.module('diyApp')
  .controller('MainCtrl', function($scope, $http, diyApiFactory){
    var commentObject = diyApiFactory.getComments();
    var faveObject = diyApiFactory.getFavorites();
    var projectObj = diyApiFactory.getProject();
    var userObject = diyApiFactory.getUser();

    $scope.comments = [];
    $scope.favorites1 = [];
    $scope.favorites2 = [];
    $scope.projectPic = '';
    $scope.project = '';
    $scope.user = [];

    commentObject.then(function(data){
      angular.forEach(data, function(item){
        $scope.comments.push(item); });
      });

    faveObject.then(function(data){
      angular.forEach(data, function(item, index){
        if (index === 0 || index % 2 === 0){
          $scope.favorites1.push(item); }
        else { $scope.favorites2.push(item); }
      });
    });

    projectObj.then(function(data){
      $scope.project = data;
      $scope.projectPic = data.clips[0].assets.original.url; });

    userObject.then(function(data){
      $scope.user = data; });

    $scope.submitComment = function(){
      diyApiFactory.submitComment($scope.commentText);
      $scope.commentText = '';
    };

  });
