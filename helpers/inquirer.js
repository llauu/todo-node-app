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
        name: 'Complete task',
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
  console.log('  │    '.cyan + 'To Do List'.underline + '    │'.cyan);
  console.log('  └──────────────────┘\n'.cyan);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const enter = await inquirer.prompt([
    {
      type: 'input',
      name: 'pause',
      message: `\nPress ${'ENTER'.magenta} to continue.\n`,
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
  pause,
  input,
};
