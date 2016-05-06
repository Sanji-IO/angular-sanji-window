const SanjiWindowStateComponent = {
  transclude: true,
  require: {
    parent: '^sanjiWindow'
  },
  bindings: {
    defaultState: '@',
    stateName: '@',
    linkName: '@',
    icon: '@'
  },
  template: `<div ng-if="vm.sanjiWindowMgr.navigateContent === vm.stateName" ng-transclude></div>`,
  controller: 'SanjiWindowStateController',
  controllerAs: 'vm'
};
export default SanjiWindowStateComponent;
