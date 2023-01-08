const makananModel = require('../model/makanan.model');

async function getMakanan(req, res) {
  const makanan = await makananModel.Makanan.findAll();
  res.status(200).send({
    data: makanan,
    message: 'Berhasil Mendapatkan List Makanan',
  });
  console.log(
    makanan.every((makanan) => makanan instanceof makananModel.Makanan)
  );
  console.log('All Product: ', JSON.stringify(makanan));
}

async function postMakanan(req, res, next) {
  const addMakanan = await makananModel.Makanan.create({
    nama_makanan: req.body.nama_makanan,
    harga: req.body.harga,
  });

  res.status(201).send({
    status: 201,
    data: {
      makanan: addMakanan,
    },
    message: 'Berhasil Menambahkan Makanan ke List Makanan',
  });
}

module.exports = {
  getMakanan,
  postMakanan,
};
