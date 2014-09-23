/* global describe before it beforeEach browser protractor by $ */
'use strict';

describe('The demo page', function() {

  var ptor;

  beforeEach(function() {
    browser.get('/');
    ptor = protractor.getInstance();
  });

  it('should load demo page', function() {
    var elm = $('.header');
    expect(ptor.isElementPresent(elm)).toBe(true);
  });

});

// describe('The sanji window navigation behavior', function() {
  // var ptor;
  // var panelElm;

  // beforeEach(function() {
    // var httpBackendMock = function() {
      // angular.module('httpBackendMock', ['demoApp', 'ngMockE2E'])
      // .run(function($httpBackend) {
        // $httpBackend.whenGET('/api/bundles').respond(200, [
          // {
            // "title": "snmp",
            // "url": {
              // "template": "bundle/snmp/main.html",
              // "controller": "bundle/snmp/controller.js",
              // "service": "bundle/snmp/service.js"
            // }
          // },
          // {
            // "title": "map",
            // "url": {
              // "template": "bundle/map/main.html",
              // "controller": "bundle/map/controller.js",
              // "service": "bundle/map/service.js"
            // }
          // },
          // {
            // "title": "lineChart",
            // "url": {
              // "template": "bundle/lineChart/main.html",
              // "controller": "bundle/lineChart/controller.js",
              // "service": "bundle/lineChart/service.js"
            // }
          // }
        // ]);
      // })
    // };
    // ptor = protractor.getInstance();
    // browser.addMockModule('httpBackendMock', httpBackendMock);
    // browser.get('/');
    // panelElm = element.all(by.css('.panel')).first();
  // });

  // it('should load data and show bundle information', function() {
    // panelElm
    // .element(by.css('.slide-left'))
    // .then(function(elm) {
      // var state = elm.getAttribute('ng-switch-when');
      // expect(state).toMatch('sanji-info');
    // });
  // });

  // it('should show edit form when clicking edit button', function() {
    // panelElm
    // .element(by.css('button:first-child'))
    // .click()
    // .then(function() {
      // panelElm
      // .element(by.css('.slide-left'))
      // .then(function(elm) {
        // var state = elm.getAttribute('ng-switch-when');
        // console.log(state);
        // expect(state).toMatch('sanji-edit');
      // });
    // });
  // });

  // it('should show information when clicking back button', function() {
    // panelElm
    // .element(by.css('.panel-footer'))
    // .element(by.tagName('button'))
    // .click()
    // .then(function() {
      // panelElm
      // .element(by.css('.slide-left'))
      // .then(function(elm) {
        // var state = elm.getAttribute('ng-switch-when');
        // expect(state).toMatch('sanji-info');
      // });
    // });
  // });

// });
