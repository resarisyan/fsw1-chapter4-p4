import { volumeBalok, luasPermukaanBalok } from './src/balok.js';
import { volumeKubus, luasPermukaanKubus } from './src/kubus.js';
import { volumePrisma, luasPermukaanPrisma } from './src/prisma.js';
import { savePeople, loadPeople, initialPeople } from './src/people.js';
// console.log(volumeBalok(2, 3, 4));
// console.log(luasPermukaanBalok(2, 3, 4));

// console.log(volumeKubus(3));
// console.log(luasPermukaanKubus(3));

// console.log(volumePrisma(2, 3, 4));
// console.log(luasPermukaanPrisma(2, 3, 4));
initialPeople({
  id: 11,
  name: 'Clementina DuBuque 2',
  username: 'Moriah.Stanton 2',
  email: 'Rey.Padberg@karina.biz',
});
// saveData({
//   id: 11,
//   name: 'Clementina DuBuque 2',
//   username: 'Moriah.Stanton 2',
//   email: 'Rey.Padberg@karina.biz',
// });

console.log(loadPeople());
