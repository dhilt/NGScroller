angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).controller('mainController',
		[ '$scope', '$log', '$timeout'

			($scope, console, $timeout)->

				datasource = {}

				datasource.get = (index, count, success)->
					$timeout(
						->
							result = []
							for i in [index..index + count-1]
								item = {}
								item.content = "item #" + i
								result.push item
							success(result)
						100
					)

				$scope.datasource =  datasource

				$scope.firstListProcessing = {}
				$scope.second = {
					list: {
						processing: {}
					}
				}

				$scope.updateList1 = () ->
					$scope.firstListProcessing.update (scope) ->
						scope.item.content += ' upd';

				$scope.updateList1 = () ->
					$scope.second.list.processing.update (scope) ->
						scope.item.content += ' upd';

		])

angular.bootstrap(document, ["application"])

###
//# sourceURL=src/scripts/scopeDatasource.js
###