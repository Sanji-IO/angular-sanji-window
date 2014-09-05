/* global describe before it beforeEach browser protractor by $ */
'use strict';

describe('The demo page', function() {

  var ptor;

  beforeEach(function() {
    browser.get('http://localhost:3000');
    ptor = protractor.getInstance();
  });

  it('should load demo page', function() {
    var elm = $('.header');
    expect(ptor.isElementPresent(elm)).toBe(true);
  });

});

describe('The sanji window navigation behavior', function() {
  var ptor;
  var panelElm;

  beforeEach(function() {
    ptor = protractor.getInstance();
    panelElm = element.all(by.css('.panel')).first();
  });

  it('should load data and show bundle information', function() {
    panelElm
    .element(by.css('.slide-left'))
    .then(function(elm) {
      var state = elm.getAttribute('ng-switch-when');
      expect(state).toMatch('sanji-info');
    });
  });

  it('should show edit form when clicking edit button', function() {
    panelElm
    .element(by.css('button:first-child'))
    .click()
    .then(function() {
      panelElm
      .element(by.css('.slide-left'))
      .then(function(elm) {
        var state = elm.getAttribute('ng-switch-when');
        expect(state).toMatch('sanji-edit');
      });
    });
  });

  it('should show information when clicking back button', function() {
    panelElm
    .element(by.css('.panel-footer'))
    .element(by.tagName('button'))
    .click()
    .then(function() {
      panelElm
      .element(by.css('.slide-left'))
      .then(function(elm) {
        var state = elm.getAttribute('ng-switch-when');
        expect(state).toMatch('sanji-info');
      });
    });
  });

});
