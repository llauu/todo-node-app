const { inquirerMenu, pause, input } = require('./helpers/inquirer.js');
const Task = require('./models/task.js');
const Tasks = require('./models/tasks.js');
const { saveData } = require('./helpers/saveFile.js');

console.clear();

let opt;
const tasks = new Tasks();

const main = async () => {
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await input('Description:');
        tasks.createTask(desc);
        break;

      case 2:
        console.log(tasks.listArr);
        break;

      case 3:
        break;

      case 4:
        break;

      case 5:
        break;

      case 6:
        break;

      case 0:
        break;
    }

    saveData(tasks.listArr);

    await pause();
  } while (opt !== 0);
};

main();
