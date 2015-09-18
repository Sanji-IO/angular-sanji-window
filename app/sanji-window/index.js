import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';

import './sanji-window.scss';
import './sanji-window.tpl.html';
import SanjiWindowService from './sanji-window.service';
import SanjiWindowController from './sanji-window.controller';
import SanjiWindowDirective from './sanji-window.directive';

let app = angular.module('sanji.window', [ngMaterial, ngMdIcons]);
app.factory('sanjiWindowService', SanjiWindowService.factory);
app.controller('SanjiWindowController', SanjiWindowController);
app.directive('sanjiWindow', SanjiWindowDirective.directiveFactory);
export default app = app.name
