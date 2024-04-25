import fs from 'fs';

const volumeBalok = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};

const luasPermukaanBalok = (panjang, lebar, tinggi) => {
  const data = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
  fs.writeFileSync('./data/result.txt', data.toString(), 'utf8');
  return data;
};

export { volumeBalok, luasPermukaanBalok };
