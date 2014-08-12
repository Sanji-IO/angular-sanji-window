;(function() { 'use strict';
  angular.module('sanji.window')
    .service('sanjiWindowService', function($http, $q, sanjiWindowFactory, _) {

      var self = this;

      self.data = [];

      self.init = function() {
        var deferred = $q.defer();
        $http
          .get('/scripts/bundle.json')
          .then(function(res) {
            var obj = new sanjiWindowFactory(res.data.view, 'auto');
            self.add(obj);
            deferred.resolve(obj);
          }, function(res) {
            deferred.reject(res);
          });
        return deferred.promise;
      };

      self.get = function() {
        return self.data;
      };

      self.add = function(sanjiWindow) {
        self.data.push(sanjiWindow);
      };

      self.delete = function(obj) {
        var i, tmp = this.data, len = tmp.length;
        for (i = 0; i < len; i++) {
          if (obj.id === tmp[i].id) {
            tmp.splice(i, 1);
            break;
          }
        }
      };

      self.getSettingByTitle = function(title) {
        return _.find(self.data, {title: title});
      };

      self.fetch = function(title) {
        var setting = self.getSettingByTitle(title);
        return $http.get(setting.contentJson.resources.uri);
      };

      self.put = function(title, data) {
        var setting = self.getSettingByTitle(title);
        return $http.put(setting.contentJson.resources.uri, data);
      };
    });
}());
