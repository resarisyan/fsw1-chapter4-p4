import { volumeBalok, luasPermukaanBalok } from './src/balok.js';
import { volumeKubus, luasPermukaanKubus } from './src/kubus.js';
import { volumePrisma, luasPermukaanPrisma } from './src/prisma.js';
import {
  savePeople,
  getPeople,
  initialPeople,
  getPeopleById,
} from './src/people.js';
// console.log(volumeBalok(2, 3, 4));
// console.log(luasPermukaanBalok(2, 3, 4));

// console.log(volumeKubus(3));
// console.log(luasPermukaanKubus(3));

// console.log(volumePrisma(2, 3, 4));
// console.log(luasPermukaanPrisma(2, 3, 4));

const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
  },
];

initialPeople(data);
savePeople({
  id: 11,
  name: 'Clementina DuBuque 2',
  username: 'Moriah.Stanton 2',
  email: 'Rey.Padberg@karina.biz',
});
// console.log(getPeople());
getPeopleById(1);
