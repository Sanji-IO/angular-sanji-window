import 'angular';
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
  .controller('AppController', AppController)
  .controller('EthernetController', EthernetController);
