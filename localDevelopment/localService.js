angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).factory('datasource.with.dot', [
	'$log', '$timeout', function (console, $timeout) {
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

		return datasource;
	}
]);

