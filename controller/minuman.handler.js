const minumanModel = require('../model/minuman.model');

async function getMinuman(req, res) {
  const minuman = await minumanModel.Minuman.findAll();
  res.status(200).send({
    data: minuman,
    message: 'Berhasil Mendapatkan List Makanan',
  });
  console.log(
    minuman.every((minuman) => minuman instanceof minumanModel.Minuman)
  );
  console.log('All Product: ', JSON.stringify(minuman));
}

async function postMinuman(req, res, next) {
  const addmMinuman = await minumanModel.Minuman.create({
    nama_minuman: req.body.nama_minuman,
    harga: req.body.harga,
  });

  res.status(201).send({
    status: 201,
    data: {
      makanan: addmMinuman,
    },
    message: 'Berhasil Menambahkan Minuman ke List Minuman',
  });
}

module.exports = {
  getMinuman,
  postMinuman,
};
