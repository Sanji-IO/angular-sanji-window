import ngMaterial from 'angular-material';

import './sanji-window.scss';
import './sanji-window.tpl.html';
import SanjiWindowService from './sanji-window.service';
import SanjiWindowController from './sanji-window.controller';
import SanjiWindowDirective from './sanji-window.directive';

let app = angular.module('sanji.window', [ngMaterial]);
app.service('sanjiWindowService', SanjiWindowService);
app.controller('SanjiWindowController', SanjiWindowController);
app.directive('sanjiWindow', SanjiWindowDirective.directiveFactory);
export default app = app.name
