angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).controller('localCtrl', [
  '$scope', '$log', '$timeout', function($scope, console, $timeout) {
    var datasource;

    datasource = {

      cache: {
        isEnabled: true,

        items: {},

        toggle: function() {
          this.isEnabled = !this.isEnabled;
          this.items = {};
        },

        saveItem: function(item, index) {
          if(!this.isEnabled) {
            return;
          }
          this.items[index] = item;
        },

        get: function(index, count, success) {
          if(!this.isEnabled) {
            return;
          }

          var result = [];
          var isCached = true;

          for (var i = index; i < index + count; i++) {
            if (!this.items.hasOwnProperty(i)) {
              isCached = false;
              return;
            }
            result.push(this.items[i]);
          }

          success(result);
          return true;
        }
      },

      get: function(index, count, success) {
        var self = this;

        if(self.cache.get(index, count, success)) {
          return;
        }

        $timeout(
          function() {
            var i, result, item;

            result = [];

            for (i = index; i < index + count; i++) {

              if (i < -50 || i > 50) {
                continue;
              }

              item = {};
              item.content = "item #" + i;

              result.push(item);

              self.cache.saveItem(item, i);
            }

            success(result);

          }, 100);
      }

    };


    $scope.datasource = datasource;
  }
]);

