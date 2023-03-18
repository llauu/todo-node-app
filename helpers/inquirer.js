const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
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
  console.log('+--------------------+'.green);
  console.log('|  Choose an option  |'.green);
  console.log('+--------------------+\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const enter = await inquirer.prompt([
    {
      type: 'input',
      name: 'pause',
      message: `\nPress ${'ENTER'.green} to continue.\n`,
      prefix: '',
    },
  ]);
};

module.exports = {
  inquirerMenu,
  pause,
};
