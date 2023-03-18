require('colors');

const showMenu = () => {
  return new Promise((res) => {
    console.clear();
    console.log('+--------------------+'.green);
    console.log('|  Choose an option  |'.green);
    console.log('+--------------------+\n'.green);

    console.log(`${'1.'.green} Create task`);
    console.log(`${'2.'.green} List tasks`);
    console.log(`${'3.'.green} List completed tasks`);
    console.log(`${'4.'.green} List pending tasks`);
    console.log(`${'5.'.green} Complete task`);
    console.log(`${'6.'.green} Delete task`);
    console.log(`${'0.'.green} Leave\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('Option: ', (answer) => {
      readline.close();
      res(answer);
    });
  });
};

const pause = () => {
  return new Promise((res) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${'ENTER'.green} to continue.\n`, (ans) => {
      readline.close();
      res();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
