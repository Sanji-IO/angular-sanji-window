class SanjiWindowService {
  constructor() {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.title = '';
    this.contentUrl = '';
    this.navigateContent = 'sanji-loading';
    this.recordState = [this.navigateContent];
    this.animateClass = 'slide-left';
    this.isProcessing = false;
    this.excludeStatusArray = [
      'sanji-loading',
      'sanji-info',
      'sanji-processing',
      'sanji-connection-problem'
    ];
    this.setContentBackCallback = null;
    this.oneTimeBackCallback = null;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setContentUrl(url) {
    this.contentUrl = url;
  }

  navigateTo(state) {
    this.recordState.push(state);
    this.navigateContent = state;
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

  isShowFooter() {
    return (-1 !== this.excludeStatusArray.indexOf(this.navigateContent)) ? false : true;
  }

  addHideFooterStatus(status) {
    this.excludeStatusArray.push(status);
  }
}
export default SanjiWindowService;
