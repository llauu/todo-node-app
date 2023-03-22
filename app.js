const {
  inquirerMenu,
  listTasksToDelete,
  listTasksToComplete,
  confirm,
  pause,
  input,
} = require('./helpers/inquirer.js');
const Task = require('./models/task.js');
const Tasks = require('./models/tasks.js');
const { saveData, readData } = require('./helpers/dbInteractions.js');

console.clear();

let opt;
const tasks = new Tasks();
const dbTasks = readData();

if (dbTasks) {
  tasks.loadTasksFromArray(dbTasks);
}

const main = async () => {
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1: // create task
        const desc = await input('Description:');
        tasks.createTask(desc);
        break;

      case 2: // list tasks
        tasks.fullList();
        break;

      case 3: // list completed tasks
        tasks.listCompletedOrPending(true);
        break;

      case 4: // list pending tasks
        tasks.listCompletedOrPending(false);
        break;

      case 5: // complete task
        const idsToComplete = await listTasksToComplete(tasks.listArr);
        tasks.toggleCompleted(idsToComplete);
        break;

      case 6: // delete task
        const idToDelete = await listTasksToDelete(tasks.listArr);

        if (idToDelete !== 0) {
          const ok = await confirm('Are you sure?');

          if (ok) {
            tasks.deleteTask(idToDelete);
            console.log('Task deleted.');
          }
        }
        break;

      case 0: // leave
        break;
    }

    saveData(tasks.listArr);

    await pause();
  } while (opt !== 0);
};

main();
