import fs from 'fs';
const initialPeople = (value) => {
  fs.writeFileSync('./data/result.json', JSON.stringify(value), 'utf8');
};
const savePeople = async (value) => {
  try {
    const data = JSON.parse(fs.readFileSync('./data/result.json', 'utf8'));
    data.push(value);
    await fs.writeFile('./data/result.json', JSON.stringify(data), 'utf8');
    console.log('Data has been added');
  } catch (error) {
    console.error(error);
  }
};

const loadPeople = () => {
  try {
    return JSON.parse(fs.readFileSync('./data/result.json', 'utf8'));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { savePeople, loadPeople, initialPeople };
