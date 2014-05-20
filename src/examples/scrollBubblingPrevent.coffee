angular.module('application', ['ui.scroll', 'ui.scroll.jqlite'])
	.factory( 'datasource',
		[ '$log', '$timeout'

			(console, $timeout)->

				min = -30
				max = 30

				get = (index, count, success)->
					$timeout(
						->
							result = []
							for i in [index..index + count-1]
								if i <= min or i >= max
									break
								result.push "item ##{i}"
							success(result)
						50
					)

				{get}

		])
angular.bootstrap(document, ["application"])

###
//# sourceURL=src/scripts/listScroller.js
###