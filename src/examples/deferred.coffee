angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).controller('mainController',
	[ '$scope', '$log', '$timeout'
		($scope, console, $timeout)->
			datasource = {}

			datasource.get = (index, count, success)->
				$timeout () ->
					result = []
					for i in [index..index + count - 1]
						item = {}
						item.id = i
						item.content = "item #" + i
						result.push item
					success result
				, 250

			$scope.datasource = datasource


	])

angular.bootstrap(document, ["application"])

###
//# sourceURL=src/scripts/deferred.js
###