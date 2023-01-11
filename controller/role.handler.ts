import { Request, Response } from "express";
import roleModel from "../model/role.model";

export async function getRole(req: Request, res: Response) {
  const role = await roleModel.findAll();
  res.status(200).send({
    data: role,
    message: 'Berhasil Mendapatkan List Role',
  });
}


