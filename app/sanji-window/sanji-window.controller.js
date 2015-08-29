const $inject = ['$log', '$scope', 'sanjiWindowService'];
class SanjiWindowController {
  constructor(...injects) {
    SanjiWindowController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.$scope.sanjiWindowMgr = angular.copy(this.sanjiWindowService);
  }
}
SanjiWindowController.$inject = $inject;
export default SanjiWindowController;
