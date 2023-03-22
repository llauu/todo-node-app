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

  loadTasksFromArray(tasks) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }
  s;

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  deleteTask(id) {
    if(this._list[id]) {
      delete this._list[id];
    }
  }

  toggleCompleted(ids) {
    ids.forEach(id => {
      const task = this._list[id];

      if(!task.completed) {
        task.completed = true;
      }
    })

    // si el id no viene en el array de ids quiere decir que la tarea no esta completada, por lo que la ponemos en false 
    // esto causaba un problema porque si por ejemplo desmarcaba una tarea que ya estaba completada antes, esa tarea seguia apareciendo como completada
    // entonces con esto lo q hago es "barrer" y formatear por asi decirlo todas las tareas las cuales no fueron seleccionadas a completed=false
    this.listArr.forEach(task => {
      if(!ids.includes(task.id)) { // If the task.id doesnt exist in the ids array
        this._list[task.id].completed = false; // Mark as task not completed
      }
    })
  }

  fullList() {
    console.log();

    this.listArr.forEach((task, i) => {
      const index = `${i + 1}`.cyan;
      const { desc, completed } = task;
      const state = completed ? 'Completed'.green : 'Pending'.red;

      console.log(`${index}. ${desc} :: ${state}`);
    });
  }

  listCompletedOrPending(completed = true) {
    console.log();
    const state = completed ? 'Completed'.green : 'Pending'.red;
    let i = 0;

    this.listArr.forEach((task) => {
      if (task.completed === completed) {
        i++;
        const index = `${i}`.cyan;
        const { desc } = task;

        console.log(`${index}. ${desc} :: ${state}`);
      }
    });
  }
}

module.exports = Tasks;
