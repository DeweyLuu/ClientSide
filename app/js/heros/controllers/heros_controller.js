'use strict';

module.exports = function(app) {
	app.controller('herosController', ['$scope', '$http', function($scope, $http) {
		$scope.heros = [];
		$scope.errors = [];

		$scope.getAll = function() {
			$http.get('/api/heros')
				.then(function(res) {
					$scope.heros = res.data;
				}, function(res) {
					$scope.errors.push(res.data);
					console.log(res.data);
				});
		};

		$scope.create = function(hero) {
			$scope.newHero = null;
			$http.post('/api/heros', hero)
				.then(function(res) {
					$scope.heros.push(res.data);
				}, function(res) {
					console.log(res.data);
					$scope.errors.push(res.data);
				});
		};

		$scope.destroy = function(hero) {
			$http.delete('/api/heros/' + hero._id)
				.then(function(res) {
					$scope.heros.splice($scope.heros.indexOf(hero), 1);
				}, function(res) {
					console.log(res.data);
					$scope.errors.push(res.data);
				});
		};

		$scope.update = function(hero) {
			$http.put('/api/heros/' + hero._id, hero)
				.then(function(res) {
					hero.edit = false;
				}, function(res) {
					hero.edit = false;
					console.log(res.data);
				});
		};

	}]);
};
