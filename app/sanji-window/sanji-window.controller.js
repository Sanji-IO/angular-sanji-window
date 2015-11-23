const $inject = ['$rootScope', '$scope', 'sanjiWindowService', '$http', '$q'];
class SanjiWindowController {
  constructor(...injects) {
    SanjiWindowController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.sanjiWindowMgr = this.sanjiWindowService.create(this.windowId, {name: this.windowName});
    this.$scope.$on('$destroy', () => {
      this.sanjiWindowMgr.clearStates();
      this.sanjiWindowService.destroy(this.sanjiWindowMgr.getId());
    });
  }

  register(state) {
    let sanjiWindowMgr = this.sanjiWindowMgr;
    if (state.isDefault) {
      sanjiWindowMgr.navigateTo(state.name);
    }
    sanjiWindowMgr.addState(state);
  }

  refresh() {
    this.sanjiWindowMgr.showLoading();
  }
}
SanjiWindowController.$inject = $inject;
export default SanjiWindowController;
