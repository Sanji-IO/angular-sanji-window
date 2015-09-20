class SanjiWindowService {
  constructor() {
    this.collection = [];
  }

  static factory() {
    return new SanjiWindowService();
  }

  _addInstance(instance) {
    this.collection.push(instance);
  }

  destroy() {
  }

  create(options) {
    let instance = null;
    options = options || {};
    class sanjiWindowInstance {
      constructor(options) {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.name = options.name || '';
        this.navigateContent = options.navigateContent || '';
      }

      setWindowName(name) {
        this.name = name;
      }

      getWindowName() {
        return this.name;
      }

      navigateTo(state) {
        this.navigateContent = state;
      }

      getWindowStatus() {
        return this.navigateContent;
      }

      isEqualToCurrentState(state) {
        return (this.navigateContent === state ) ? true : false;
      }

      goToProcessingState() {
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
        this.navigateTo('sanji-connection-problem');
      }
    }
    instance = new sanjiWindowInstance(options);
    this._addInstance(instance);
    return instance;
  }

}
export default SanjiWindowService;
