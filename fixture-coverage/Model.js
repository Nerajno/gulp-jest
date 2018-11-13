class Model {
  constructor(){
    this.number = 0
  }
  run () {
    return this._doSomething()
  }
  _doSomething(){
    return 1 + this.number
  }
}

module.exports = (...args) => new Model(...args);
