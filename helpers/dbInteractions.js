const fs = require('fs');

const filePath = './db/data.json';

const saveData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data)); // parse an object to a JSON
};

const readData = () => {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const info = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const data = JSON.parse(info); // parse a JSON to an object

  console.log(data);

  return data;
};

module.exports = {
  saveData,
  readData,
};
