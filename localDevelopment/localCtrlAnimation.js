angular.module('application', ['ui.scroll', 'ui.scroll.jqlite', 'ngAnimate']).controller('mainController', [
	'$scope', '$log', '$timeout', function ($scope, console, $timeout) {
		var datasource = {};

		datasource.get = function (index, count, success) {
			return $timeout(function () {
				var i, item, result, _i, _ref;
				result = [];
				for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
					item = {};
					item.id = i;
					item.content = "item #" + i;
					result.push(item);
				}
				return success(result);
			}, 150);
		};

		$scope.datasource = datasource;


		var idList;

		$scope.adapter = {
			remain: true
		};

		$scope.updateList = function() {
			return $scope.adapter.applyUpdates(function(item, scope) {
				return item.content += " *";
			});
		};

		$scope.removeFromList = function() {
			return $scope.adapter.applyUpdates(function(item, scope) {
				if (scope.$index % 2 === 0) {
					return [];
				}
			});
		};

		idList = 1000;

		$scope.addToList = function() {
			return $scope.adapter.applyUpdates(function(item, scope) {
				var newItem;
				if (scope.$index === 2) {
					newItem = {
						id: idList,
						content: 'a new one #' + idList
					};
					idList++;
					return [item, newItem];
				}
			});
		};


	}
]);

