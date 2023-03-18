require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer.js');

console.clear();
let opt;

const main = async () => {
  do {
    opt = await inquirerMenu();
    console.log(opt);
    
    await pause();
  } while (opt !== 0);
};

main();
