const injectMap = new WeakMap();
const $inject = ['$log', 'sanjiWindowService'];
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
      title: '@',
      contentUrl: '@',
      data: '=',
      contentBack: '&'
    };
  }

  link(scope) {
    let config = injectMap.get(SanjiWindowDirective.sanjiWindowService);
    let $log = injectMap.get(SanjiWindowDirective.$log);

    scope.sanjiWindowMgr = angular.copy(config);

    if (scope.contentUrl) {
      scope.sanjiWindowMgr.setContentUrl(scope.contentUrl);
    }
    else {
      $log.error('Sanji window content url not defined!');
    }

    if (scope.title) {
      scope.sanjiWindowMgr.setTitle(scope.title);
    }

    if (angular.isFunction(scope.contentBack)) {
      scope.sanjiWindowMgr.setContentBackCallback = scope.contentBack;
    }
  }

  static directiveFactory(...injects) {
    SanjiWindowDirective.instance = new SanjiWindowDirective(injects);
    return SanjiWindowDirective.instance;
  }
}
SanjiWindowDirective.directiveFactory.$inject = $inject;
export default SanjiWindowDirective;
