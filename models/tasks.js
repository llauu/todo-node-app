const Task = require('./task.js');

class Tasks {
  _list = {};

  // getter
  get listArr() { 
    const list = [];

    // Object.keys(this._list) -> this returns an array of all keys
    Object.keys(this._list).forEach((key) => {
      // Object.keys extracts each of the keys found in an object
      list.push(this._list[key]);
    });

    return list;
  }

  constructor() {
    this._list = {};
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}

module.exports = Tasks;
