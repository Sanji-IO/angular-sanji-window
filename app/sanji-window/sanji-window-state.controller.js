const $inject = ['$log', '$scope'];
class SanjiWindowStateController {
  constructor(...injects) {
    SanjiWindowStateController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  init(topCtrl, attrs) {
    this.sanjiWindowMgr = topCtrl.sanjiWindowMgr;
    if (undefined !== this.stateName) {
      topCtrl.register({
        name: this.stateName,
        linkName: this.linkName,
        icon: this.icon,
        isDefault: undefined !== attrs.defaultState ? true : false
      });
    }
  }
}
SanjiWindowStateController.$inject = $inject;
export default SanjiWindowStateController;
