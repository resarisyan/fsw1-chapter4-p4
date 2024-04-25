import fs from 'fs/promises';

const initialPeople = async (value) => {
  fs.writeFile('./data/result.json', JSON.stringify(value), 'utf8');
};

const savePeople = async (value) => {
  try {
    const data = await fs.readFile('./data/result.json', 'utf8');
    const parsedData = JSON.parse(data);
    parsedData.push(value);
    await fs.writeFile(
      './data/result.json',
      JSON.stringify(parsedData),
      'utf8'
    );

    console.log('Data has been added');
  } catch (error) {
    console.error(error);
  }
};

const getPeople = async () => {
  try {
    const data = await fs.readFile('./data/result.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getPeopleById = async (id) => {
  const data = await getPeople();
  const people = data.find((item) => item.id === id);
  console.log(Object.values(people));
};

export { savePeople, getPeople, initialPeople, getPeopleById };
