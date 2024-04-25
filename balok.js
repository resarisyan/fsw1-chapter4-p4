const volumeBalok = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};

const luasPermukaanBalok = (panjang, lebar, tinggi) => {
  return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
};

export { volumeBalok, luasPermukaanBalok };
