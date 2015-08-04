'use strict';

require('angular/angular');

var cars = angular.module('cars', []);

var carController = cars.controller('carController',
	['$scope', function($scope) {
		$scope.make = 'acura';
		$scope.model = 'integra';
		$scope.year = 1999;
		$scope.carLoader = function() {
			$scope.car = $scope.year + " " + $scope.make + " " + $scope.model;
		}
		$scope.anotherCar = function() {
			$scope.car = "2006 Toyota 4Runner";
		}
}]);
