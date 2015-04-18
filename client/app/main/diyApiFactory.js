'use strict';

angular.module('diyApp')
  .factory('diyApiFactory', function ($http) {
		var getFavorites = function() {
			return $http({
				method: 'GET',
				url: 'https://api.diy.org/makers/hivetest/favorites'
			})
			.then(function(result){
				return result.data.response;
			});
		};

		var getComments = function() {
			return $http({
				method: 'GET',
				url: 'https://api.diy.org/makers/hivetest/projects/770936/comments'
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

		return {
			getFavorites: getFavorites,
			getComments: getComments,
			getUser: getUser
		};
	});
