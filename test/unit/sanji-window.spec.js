/* global describe it beforeEach  */
'use strict';

describe('Sanji Window Directive Unit Test', function() {

  describe('App Module', function() {
    var module;

    beforeEach(function() {
      module = angular.module('sanji.window');
    });

    it('should be registerd', function() {
      expect(module).not.toBe(null);
    });

    describe('Dependencies', function() {
      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };

      beforeEach(function() {
        deps = module.value('sanji.window').requires
      });

    });

  });
});
