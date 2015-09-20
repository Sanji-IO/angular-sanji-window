const $inject = ['$log', '$scope', 'sanjiWindowService'];
class SanjiWindowController {
  constructor(...injects) {
    SanjiWindowController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.states = [];
    this.sanjiWindowMgr = this.sanjiWindowService.create();
  }

  register(state) {
    if (state.isDefault) {
      this.sanjiWindowMgr.navigateTo(state.name);
    }
    this.states.push(state);
  }
}
SanjiWindowController.$inject = $inject;
export default SanjiWindowController;
