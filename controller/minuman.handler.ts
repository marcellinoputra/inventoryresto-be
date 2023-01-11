import { Request, Response } from 'express';
import minumanModel from '../model/minuman.model'

export async function getMinuman(req: Request, res: Response) {
  const minuman = await minumanModel.findAll();
  res.status(200).send({
    data: minuman,
    message: 'Berhasil Mendapatkan List Makanan',
  });
}

export async function postMinuman(req: Request, res: Response) {
  const addmMinuman = await minumanModel.create({
    nama_minuman: req.body.nama_minuman,
    harga: req.body.harga,
  });

 try {
  res.status(201).send({
    status: 201,
    data: {
      makanan: addmMinuman,
    },
    message: 'Berhasil Menambahkan Minuman ke List Minuman',
  });
 } catch (err) {
  res.status(400).send({
    message: err
  })
 }
}