const SanjiWindowComponent = {
  transclude: true,
  bindings: {
    windowId: '@',
    windowName: '@',
    showLoadingBtn: '@'
  },
  templateUrl: 'sanji-window.tpl.html',
  controller: 'SanjiWindowController',
  controllerAs: 'vm'
};
export default SanjiWindowComponent;
