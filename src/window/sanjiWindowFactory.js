;(function() { 'use strict';
  angular.module('sanji.window')
    .factory('sanjiWindowFactory', function() {

      var genId = function() {

        return '_' + Math.random().toString(36).substr(2, 9);

      };

      var SettingFactory = function(config, type) {

        if ('auto' === type) {
          angular.extend(this, config);
        } else {
          this.url = config.url;
        }
        this.id = genId();
        this.isProcessing = false;
        this.navigateContent = config.state || '';
        this.recordState = [this.navigateContent];
        this.toggleStatus = false;
        this.animateClass = config.animateClass || 'slide-left';

      };

      return SettingFactory;

    });
}());
