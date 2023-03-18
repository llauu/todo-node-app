require('colors');
const { showMenu, pause } = require('./helpers/messages');

console.clear();
let opt;

const main = async () => {
  do {
    opt = await showMenu();
    console.log(opt);
    
    await pause();
  } while (opt !== '0');
};

main();
