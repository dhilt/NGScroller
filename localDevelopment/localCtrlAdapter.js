angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).controller('mainController', [
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


		var idList1, idList2;

		$scope.firstListAdapter = {
			remain: true
		};

		$scope.updateList1 = function() {
			return $scope.firstListAdapter.applyUpdates(function(item, scope) {
				return item.content += " *";
			});
		};

		$scope.removeFromList1 = function() {
			return $scope.firstListAdapter.applyUpdates(function(item, scope) {
				if (scope.$index === 2) {
					return [];
				}
				/*return;
				if (scope.$index % 2 === 0) {
					return [];
				}*/
			});
		};

		idList1 = 1000;

		$scope.addToList1 = function() {
			return $scope.firstListAdapter.applyUpdates(function(item, scope) {
				var newItem;
				if (scope.$index === 2) {
					newItem = {
						id: idList1,
						content: 'a new one #' + idList1
					};
					idList1++;
					return [item, newItem];
				}
			});
		};


		$scope.updateList2 = function() {
			return $scope.second.list.adapter.update(function(scope) {
				return scope.item.content += ' *';
			});
		};

		$scope.removeFromList2 = function() {
			$scope.second.list.adapter["delete"](function(scope) {
				return scope.item.id % 2 !== 0;
			});
		};

		idList2 = 2000;

		$scope.addToList2 = function() {
			$scope.second.list.adapter.insert(4, {
				id: idList2,
				content: 'a new one #' + idList2
			});
			idList2++;
		};

	}
]);

