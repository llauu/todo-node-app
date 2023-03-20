const fs = require('fs');

const saveData = (data) => {
  const filePath = './db/data.txt';

  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = {
  saveData,
};
