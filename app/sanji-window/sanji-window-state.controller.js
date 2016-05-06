const $inject = [];
class SanjiWindowStateController {
  constructor(...injects) {
    SanjiWindowStateController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.sanjiWindowMgr = null;
  }

  $onInit() {
    this.sanjiWindowMgr = this.parent.sanjiWindowMgr;
    console.log(this.sanjiWindowMgr);
    if (undefined !== this.stateName) {
      this.parent.register({
        name: this.stateName,
        linkName: this.linkName,
        icon: this.icon,
        isDefault: undefined !== this.defaultState ? true : false
      });
    }
  }
}
SanjiWindowStateController.$inject = $inject;
export default SanjiWindowStateController;
