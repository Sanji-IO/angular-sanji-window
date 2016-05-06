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
import SanjiWindowComponent from './sanji-window.component';
import SanjiWindowStateComponent from './sanji-window-state.component';

let app = angular.module('sanji.window', [ngMaterial, ngMdIcons, 'cgBusy']);
app.factory('sanjiWindowService', SanjiWindowService.factory);
app.controller('SanjiWindowController', SanjiWindowController);
app.controller('SanjiWindowStateController', SanjiWindowStateController);
app.component('sanjiWindow', SanjiWindowComponent);
app.component('sanjiWindowState', SanjiWindowStateComponent);
export default app = app.name
