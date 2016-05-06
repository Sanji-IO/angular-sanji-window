const $inject = ['$rootScope', '$scope', 'sanjiWindowService'];
class SanjiWindowController {
  constructor(...injects) {
    SanjiWindowController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.sanjiWindowMgr = this.sanjiWindowService.create(this.windowId, {name: this.windowName});
  }

  $onDestroy() {
    this.sanjiWindowMgr.clearStates();
    this.sanjiWindowService.destroy(this.sanjiWindowMgr.getId());
  }

  register(state) {
    let sanjiWindowMgr = this.sanjiWindowMgr;
    if (state.isDefault) {
      sanjiWindowMgr.navigateTo(state.name);
    }
    sanjiWindowMgr.addState(state);
  }

  refresh() {
    this.$rootScope.$broadcast('sj:window:refresh', {
      id: this.windowId,
      promise: this.sanjiWindowMgr.promise
    });
  }
}
SanjiWindowController.$inject = $inject;
export default SanjiWindowController;
