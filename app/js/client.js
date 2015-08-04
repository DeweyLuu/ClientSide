'use strict';

require('angular/angular');

var cars = angular.module('cars', []);

var carController = cars.controller('carController',
	['$scope', function($scope) {
		$scope.make = 'acura';
		$scope.model = 'integra';
		$scope.year = 1999;
}]);
