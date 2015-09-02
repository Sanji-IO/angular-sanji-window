import './app.scss';
import 'angular-material.css';
import 'angular';
import 'angular-material';
import './sanji-window';

class AppController {
  constructor(...injects) {
    AppController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.alert = () => {
      this.$window.alert('Go back callback alert!');
    };
  }
}
AppController.$inject = ['$window'];
export default AppController;

class EthernetController {
  constructor(...injects) {
    EthernetController.$inject.forEach((item, index) => this[item] = injects[index]);
    let sanjiWindowMgr = this.$scope.sanjiWindowMgr;
    this.ethernet = {
      ip: '192.168.31.204',
      netmask: '255.255.255.0',
      gateway: '192.168.31.254'
    };
    sanjiWindowMgr.goToInfoState();
  }
}
EthernetController.$inject = ['$scope', '$window'];
export default EthernetController;

angular.module('webapp', ['sanji.window'])
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register a default set of SVG icon definitions
    $mdIconProvider.defaultIconSet('webapp')
      .icon('webapp:more-vert', 'app/assets/svg/more_vert.svg')
      .icon('webapp:menu', 'app/assets/svg/ic_menu_white_24px.svg')
      .icon('webapp:backward', 'app/assets/svg/ic_keyboard_backspace_black_24px.svg')
      .icon('webapp:save', 'app/assets/svg/ic_save_white_24px.svg')
      .icon('webapp:settings', 'app/assets/svg/ic_settings_black_24px.svg')
      .icon('webapp:refresh', 'app/assets/svg/ic_refresh_black_24px.svg')
      .icon('webapp:ethernet-settings', 'app/assets/svg/ic_settings_ethernet_black_24px.svg');

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
  .run(($http, $templateCache) => {
    // Pre-fetch icons sources by URL and cache in the $templateCache...
    // subsequent $http calls will look there first.
    let urls = [
      'app/assets/svg/more_vert.svg',
      'app/assets/svg/ic_menu_white_24px.svg',
      'app/assets/svg/ic_keyboard_backspace_black_24px.svg',
      'app/assets/svg/ic_save_white_24px.svg',
      'app/assets/svg/ic_settings_black_24px.svg',
      'app/assets/svg/ic_refresh_black_24px.svg',
      'app/assets/svg/ic_settings_ethernet_black_24px.svg'
    ];
    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });
  })
  .controller('AppController', AppController)
  .controller('EthernetController', EthernetController)
