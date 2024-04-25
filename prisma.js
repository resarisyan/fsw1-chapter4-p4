const volumePrisma = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};

const luasPermukaanPrisma = (panjang, lebar, tinggi) => {
  return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
};

export { volumePrisma, luasPermukaanPrisma };
