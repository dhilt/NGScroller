angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).controller('mainController',
	[ '$scope', '$log', '$timeout'
		($scope, console, $timeout)->

			datasource = {}

			datasource.cache = {
				isEnabled: true

				items: {}

				toggle: () ->
					this.isEnabled = not this.isEnabled
					this.items = {}

				saveItem: (item, index) ->
					return if not this.isEnabled
					this.items[index] = item

				get: (index, count, success) ->
					return if not this.isEnabled
					result = []
					isCached = true

					for i in [index..index + count - 1] by 1
						if not this.items.hasOwnProperty(i)
							isCached = false
							return
						result.push(this.items[i])

					success(result)
					return true
			}

			datasource.get = (index, count, success)->
				self = this

				return if self.cache and self.cache.get(index, count, success)

				$timeout () ->
					result = []

					for i in [index..index + count - 1]
						item = {}
						item.content = "item ##{i}"
						result.push item
						self.cache.saveItem(item, i) if self.cache

					success(result)
				, 100

			$scope.datasource = datasource

	])

angular.bootstrap(document, ["application"])

###
//# sourceURL=src/scripts/cache.js
###