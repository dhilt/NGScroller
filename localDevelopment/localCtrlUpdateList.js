angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).controller('mainController', [
	'$scope', '$log', '$timeout', function ($scope, console, $timeout) {
		var datasource = {};

		datasource.get = function (index, count, success) {
			return $timeout(function () {
				var i, item, result, _i, _ref;
				result = [];
				for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
					item = {};
					item.content = "item #" + i;
					result.push(item);
				}
				return success(result);
			}, 100);
		};

		$scope.datasource = datasource;

		$scope.firstListProcessing = {};
		$scope.second = {
			list: {
				processing: {}
			}
		};

		$scope.updateList1 = function () {
			$scope.firstListProcessing.update(function (scope) {
				scope.item.content += ' upd';
			});
		};

		$scope.updateList2 = function () {
			$scope.second.list.processing.update(function (scope) {
				scope.item.content += ' upd';
			});
		};

	}
]);

