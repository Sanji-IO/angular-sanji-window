class SanjiWindowService {
  constructor() {
    this.collection = [];
  }

  static factory() {
    return new SanjiWindowService();
  }

  findById(id) {
    return this.collection.find(model => model.id === id);
  }

  register(scope, instance) {
    scope.$emit('init-sanji-window', instance);
  }

  _addInstance(instance) {
    this.collection.push(instance);
  }

  create(options) {
    let instance = null;
    options = options || {};
    class sanjiWindowInstance {
      constructor(options) {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.name = options.name || '';
        this.navigateContent = options.navigateContent || '';
        this.recordState = options.recordState || [];
        this.setContentBackCallback = null;
        this.oneTimeBackCallback = null;
      }

      setWindowName(name) {
        this.name = name;
      }

      getWindowName() {
        return this.name;
      }

      navigateTo(state) {
        if (-1 === this.recordState.indexOf(state)) {
          this.recordState.push(state);
          this.navigateContent = state;
        }
      }

      getWindowStatus() {
        return this.navigateContent;
      }

      isEqualToCurrentState(state) {
        return (this.navigateContent === state ) ? true : false;
      }

      goToProcessingState() {
        this.reset();
        this.navigateTo('sanji-processing');
      }

      goToInfoState() {
        this.navigateTo('sanji-info');
      }

      goToEditState() {
        this.navigateTo('sanji-edit');
      }

      goToAddState() {
        this.navigateTo('sanji-add');
      }

      goToProblemState() {
        this.reset();
        this.navigateTo('sanji-connection-problem');
      }

      goBack() {
        let states = this.recordState;

        if (null !== this.setContentBackCallback &&
            angular.isFunction(this.setContentBackCallback)) {
          this.setContentBackCallback();
        }

        if (null !== this.oneTimeBackCallback &&
            angular.isFunction(this.oneTimeBackCallback)) {
          this.oneTimeBackCallback();
          this.oneTimeBackCallback = null;
        }

        states.pop();
        this.navigateContent = states[states.length - 1];
      }

      reset() {
        this.recordState.length = 0;
      }
    }
    instance = new sanjiWindowInstance(options);
    this._addInstance(instance);
    return instance;
  }

}
export default SanjiWindowService;
