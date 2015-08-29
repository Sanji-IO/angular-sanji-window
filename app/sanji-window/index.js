import './sanji-window.scss';
import './sanji-window.tpl.html';
import SanjiWindowService from './sanji-window.service';
import SanjiWindowController from './sanji-window.controller';
import SanjiWindowDirective from './sanji-window.directive';

angular.module('sanji.window', [])
  .service('sanjiWindowService', SanjiWindowService)
  .controller('SanjiWindowController', SanjiWindowController)
  .directive('sanjiWindow', SanjiWindowDirective.directiveFactory);
