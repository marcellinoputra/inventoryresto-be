import { makananModel } from "../model/makanan.model";
import { Request, Response} from "express";

export async function getMakanan(req: Request, res: Response) {
  const makanan = await makananModel.findAll();
  res.status(200).send({
    data: makanan,
    message: 'Berhasil Mendapatkan List Makanan',
  });
  console.log(
    makanan.every((makanan) => makanan instanceof makananModel)
  );
  console.log('All Product: ', JSON.stringify(makanan));
}

export async function postMakanan(req: Request, res: Response) {
  const addMakanan = await makananModel.create({
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