import fs from 'fs';
const saveData = (value) => {
  try {
    const data = JSON.parse(fs.readFileSync('./data/result.json', 'utf8'));
    data.push(value);
    fs.writeFileSync('./data/result.json', JSON.stringify(data), 'utf8');
    console.log('Data has been added');
  } catch (error) {
    console.error(error);
  }
};

const loadData = async () => {
  try {
    return JSON.parse(fs.readFileSync('./data/result.json', 'utf8'));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { saveData, loadData };
