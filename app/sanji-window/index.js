import 'bootstrap';
import 'angular';
// import 'angular-animate';

import './sanji-window.scss';
import './sanji-window.tpl.html';
import SanjiWindowConfig from './sanji-window.service';
import SanjiWindowDirective from './sanji-window.directive';

angular.module('sanji.window', [])
  .service('sanjiWindowConfig', SanjiWindowConfig)
  .directive('sanjiWindow', SanjiWindowDirective.directiveFactory);
