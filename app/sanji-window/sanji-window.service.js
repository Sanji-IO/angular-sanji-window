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

  destroy(id) {
    let idx = this.collection.findIndex((item) => item.id === id);
    this.collection.splice(idx, 1);
  }

  create(options) {
    let instance = null;
    options = options || {};
    class sanjiWindowInstance {
      constructor(options) {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.states = [];
        this.name = options.name || '';
        this.navigateContent = options.navigateContent || '';
      }

      getId() {
        return this.id;
      }

      navigateTo(state) {
        this.navigateContent = state;
      }

      addState(state) {
        this.states.push(state);
      }

      clearStates() {
        this.states.length = 0;
      }
    }
    instance = new sanjiWindowInstance(options);
    this._addInstance(instance);
    return instance;
  }

}
export default SanjiWindowService;
