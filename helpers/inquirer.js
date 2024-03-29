const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?'.bold,
    prefix: '',
    choices: [
      {
        value: 1,
        name: 'Create task',
      },
      {
        value: 2,
        name: 'List tasks',
      },
      {
        value: 3,
        name: 'List completed tasks',
      },
      {
        value: 4,
        name: 'List pending tasks',
      },
      {
        value: 5,
        name: 'Complete tasks',
      },
      {
        value: 6,
        name: 'Delete task',
      },
      {
        value: 0,
        name: 'Leave',
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('  ┌──────────────────┐'.cyan);
  console.log('  │    '.cyan + 'To Do List'.bold + '    │'.cyan);
  console.log('  └──────────────────┘\n'.cyan);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const listTasksToDelete = async (tasks) => {
  console.log();

  const choices = tasks.map((task, i) => {
    const id = `${i + 1}.`.cyan;

    return {
      value: task.id,
      name: `${id} ${task.desc}`,
    };
  });

  choices.push({
    value: 0,
    name: `${'0.'.cyan} Cancel`,
  });

  const { id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'id',
      message: 'Which task do you want to delete?'.bold,
      prefix: '',
      choices: choices,
    },
  ]);

  return id;
};

const listTasksToComplete = async (tasks) => {
  console.log();

  const choices = tasks.map((task, i) => {
    const id = `${i + 1}.`.cyan;

    return {
      value: task.id,
      name: `${id} ${task.desc}`,
      checked: task.completed ? true : false,
    };
  });

  const { ids } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Which tasks do you want to complete?'.bold,
      prefix: '',
      choices: choices,
    },
  ]);

  return ids;
};

const confirm = async (message) => {
  const { ok } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'ok',
      message,
      prefix: '',
    },
  ]);

  return ok;
};

const pause = async () => {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'pause',
      message: `\nPress ${'ENTER'.yellow} to continue.\n`,
      prefix: '',
    },
  ]);
};

const input = async (message) => {
  const { inputData } = await inquirer.prompt([
    {
      type: 'input',
      name: 'inputData',
      message: message,
      prefix: '',
      validate(value) {
        if (value.length === 0) {
          return `${'[ERROR]'.red} Please enter a value.`;
        }
        return true;
      },
    },
  ]);

  return inputData; // inputData its what we give in the 'name: ' property
};

module.exports = {
  inquirerMenu,
  listTasksToDelete,
  listTasksToComplete,
  confirm,
  pause,
  input,
};
