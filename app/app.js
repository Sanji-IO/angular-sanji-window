import 'angular-material.css';
import 'angular-material-icons.css';
import './app.scss';

import 'svg-morpheus';
import 'angular';
import 'angular-material';
import './sanji-window';

class AppController {
  constructor(...injects) {
    AppController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.states = [{name: 'sanji-edit', linkName: 'Settings', icon: 'settings'}];
  }
}
AppController.$inject = [];
export default AppController;

class EthernetController {
  constructor(...injects) {
    EthernetController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.sanjiWindowMgr = this.sanjiWindowService.create();
    this.sanjiWindowService.register(this.$scope, this.sanjiWindowMgr);
    this.ethernet = {
      ip: '192.168.31.204',
      netmask: '255.255.255.0',
      gateway: '192.168.31.254'
    };
    this.sanjiWindowMgr.goToInfoState();
  }
}
EthernetController.$inject = ['$scope', 'sanjiWindowService'];
export default EthernetController;

angular.module('webapp', ['sanji.window'])
  .config(($mdIconProvider, $mdThemingProvider) => {
    $mdThemingProvider.definePalette('moxa-material', {
      '50': '#E6F3F3',
      '100': '#B3DBDB',
      '200': '#80C3C3',
      '300': '#55AFAF',
      '400': '#2A9B9B',
      '500': '#008787',
      '600': '#007676',
      '700': '#006565',
      '800': '#006565',
      '900': '#006565',
      'A100': '#006565',
      'A200': '#006565',
      'A400': '#006565',
      'A700': '#006565',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('default')
    .primaryPalette('moxa-material');
  })
  .controller('AppController', AppController)
  .controller('EthernetController', EthernetController);