const { v4: uuidv4 } = require('uuid');
// v4: uuidv4 -> (import v4 function but when i use it i will use it as uuidv4)

class Task {
  id = '';
  desc = '';
  completed = false;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.completed = false;
  }
}

module.exports = Task;
