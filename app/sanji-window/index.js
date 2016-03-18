import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import 'angular-busy';

import './sanji-window.scss';
import './sanji-window.tpl.html';
import './sanji-window-loading.tpl.html';
import SanjiWindowService from './sanji-window.service';
import SanjiWindowController from './sanji-window.controller';
import SanjiWindowStateController from './sanji-window-state.controller';
import SanjiWindowDirective from './sanji-window.directive';
import SanjiWindowStateDirective from './sanji-window-state.directive';

let app = angular.module('sanji.window', [ngMaterial, ngMdIcons, 'cgBusy']);
app.factory('sanjiWindowService', SanjiWindowService.factory);
app.controller('SanjiWindowController', SanjiWindowController);
app.controller('SanjiWindowStateController', SanjiWindowStateController);
app.directive('sanjiWindow', SanjiWindowDirective.directiveFactory);
app.directive('sanjiWindowState', SanjiWindowStateDirective.directiveFactory);
export default app = app.name
