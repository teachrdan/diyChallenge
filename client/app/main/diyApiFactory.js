'use strict';

angular.module('diyApp')
  .factory('diyApiFactory', function ($http) {
    var getComments = function() {
			return $http({
				method: 'GET',
				url: 'https://api.diy.org/makers/hivetest/projects/770936/comments'
			})
			.then(function(result){
				return result.data.response;
			});
		};

		var getFavorites = function() {
			return $http({
				method: 'GET',
				url: 'https://api.diy.org/makers/hivetest/favorites'
			})
			.then(function(result){
				return result.data.response;
			});
		};

    var getProject = function() {
			return $http({
				method: 'GET',
				url: 'https://api.diy.org/makers/hivetest/projects/731175'
			})
			.then(function(result){
        return result.data.response;
			});
		};

    var getUser = function() {
			return $http({
				method: 'GET',
				url: 'https://api.diy.org/makers/hivetest'
			})
			.then(function(result){
				return result.data.response;
			});
		};

    var submitComment = function(text){
      return $http.post(
        'https://api.diy.org/makers/hivetest/projects/731175/comments',
        {msg:text})
      .success(function(data, status){ console.log('post status', status); })
      .error(function(data, status){ console.log('post error', status); });
    };

		return {
      getComments: getComments,
      getFavorites: getFavorites,
      getProject: getProject,
			getUser: getUser,
      submitComment: submitComment
		};
	});
