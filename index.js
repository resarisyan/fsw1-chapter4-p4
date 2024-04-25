import { volumeBalok, luasPermukaanBalok } from './balok.js';
import { volumeKubus, luasPermukaanKubus } from './kubus.js';
import { volumePrisma, luasPermukaanPrisma } from './prisma.js';

console.log(volumeBalok(2, 3, 4));
console.log(luasPermukaanBalok(2, 3, 4));

console.log(volumeKubus(3));
console.log(luasPermukaanKubus(3));

console.log(volumePrisma(2, 3, 4));
console.log(luasPermukaanPrisma(2, 3, 4));
