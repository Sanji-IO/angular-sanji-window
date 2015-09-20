import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';

import './sanji-window.scss';
import './sanji-window.tpl.html';
import SanjiWindowService from './sanji-window.service';
import SanjiWindowController from './sanji-window.controller';
import SanjiWindowStateController from './sanji-window-state.controller';
import SanjiWindowDirective from './sanji-window.directive';
import SanjiWindowStateDirective from './sanji-window-state.directive';

let app = angular.module('sanji.window', [ngMaterial, ngMdIcons]);
app.factory('sanjiWindowService', SanjiWindowService.factory);
app.controller('SanjiWindowController', SanjiWindowController);
app.controller('SanjiWindowStateController', SanjiWindowStateController);
app.directive('sanjiWindow', SanjiWindowDirective.directiveFactory);
app.directive('sanjiWindowState', SanjiWindowStateDirective.directiveFactory);
export default app = app.name
