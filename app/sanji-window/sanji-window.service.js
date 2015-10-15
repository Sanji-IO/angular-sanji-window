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
    let idx = this.collection.findIndex(item => item.id === id);
    this.collection.splice(idx, 1);
  }

  _isIdExist(id) {
    return -1 !== this.collection.findIndex(item => item.id === id) ? true : false;
  }

  get(id) {
    return this.collection.find(item => item.id === id);
  }

  create(id, options) {
    let instance = null;
    options = options || {};

    if (this._isIdExist(id)) {
      throw new Error('The window id ' + id + ' is already exist.');
    }

    class sanjiWindowInstance {
      constructor(options) {
        this.states = [];
        this.id = id;
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
