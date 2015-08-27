import './sanji-window.scss';
import './sanji-window.tpl.html';
import SanjiWindowService from './sanji-window.service';
import SanjiWindowDirective from './sanji-window.directive';

angular.module('sanji.window', [])
  .service('sanjiWindowService', SanjiWindowService)
  .directive('sanjiWindow', SanjiWindowDirective.directiveFactory);
