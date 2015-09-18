const $inject = ['$log', '$scope'];
class SanjiWindowController {
  constructor(...injects) {
    SanjiWindowController.$inject.forEach((item, index) => this[item] = injects[index]);
    let deregistration = this.$scope.$on('init-sanji-window', (event, instance) => {
      this.sanjiWindowMgr = instance;
    });
    this.$scope.$on('$destroy', deregistration);
  }
}
SanjiWindowController.$inject = $inject;
export default SanjiWindowController;
