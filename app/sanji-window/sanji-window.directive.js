const injectMap = new WeakMap();
const $inject = ['$log'];
class SanjiWindowDirective {
  constructor(injects) {
    SanjiWindowDirective.directiveFactory.$inject.forEach((item, index) => {
      SanjiWindowDirective[item] = injects[index];
      injectMap.set(SanjiWindowDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-window.tpl.html';
    this.restrict = 'EA';
    this.replace = true;
    this.scope = {
      windowName: '@',
      windowStates: '='
    };
    this.transclude = true;
    this.controller = 'SanjiWindowController';
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  static directiveFactory(...injects) {
    SanjiWindowDirective.instance = new SanjiWindowDirective(injects);
    return SanjiWindowDirective.instance;
  }
}
SanjiWindowDirective.directiveFactory.$inject = $inject;
export default SanjiWindowDirective;
