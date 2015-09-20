const injectMap = new WeakMap();
const $inject = ['$log'];
class SanjiWindowStateDirective {
  constructor(injects) {
    SanjiWindowStateDirective.directiveFactory.$inject.forEach((item, index) => {
      SanjiWindowStateDirective[item] = injects[index];
      injectMap.set(SanjiWindowStateDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.replace = true;
    this.transclude = true;
    this.scope = {};
    this.require = ['sanjiWindowState', '^sanjiWindow'];
    this.controller = 'SanjiWindowStateController';
    this.controllerAs = 'vm';
    this.bindToController = {
      stateName: '@',
      linkName: '@',
      icon: '@'
    };
    this.template = `<div ng-show="vm.sanjiWindowMgr.navigateContent === vm.stateName" ng-transclude></div>`;
  }

  link(scope, element, attrs, ctrl, transclude) {
    ctrl[0].init(ctrl[1], attrs);
  }

  static directiveFactory(...injects) {
    SanjiWindowStateDirective.instance = new SanjiWindowStateDirective(injects);
    return SanjiWindowStateDirective.instance;
  }
}
SanjiWindowStateDirective.directiveFactory.$inject = $inject;
export default SanjiWindowStateDirective;
