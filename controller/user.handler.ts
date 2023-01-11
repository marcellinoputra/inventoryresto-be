import { Request, Response } from "express";
import userModel from "../model/user.model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function signup(req: Request, res: Response) {
  const saltRound = 10;
  const salt = bcrypt.genSaltSync(saltRound);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const createUser = await userModel.create({
    nama: req.body.nama,
    username: req.body.username,
    password: hash,
    avatar: req.file?.originalname as string
  });

  res.status(201).send({
    status: 201,
    data: createUser,
    message: 'Berhasil Membuat Akun',
  });
}

export async function signin(req: Request, res: Response) {
  const findUser = await userModel.findAll({
    where: {
      username: req.body.username,
    },
  });
  // console.log(token);
  // console.log(findUser[0].password);
  // console.log(req.body.password);

  try {
    let data = bcrypt.compareSync(req.body.password, findUser[0].password);
    console.log(data);

    if (data) {
      let token = jwt.sign(
        {
          data: {
            id: findUser[0].id,
            username: findUser[0].username,
          },
        },
        'secret',
        { expiresIn: '1h' }
      );
      return res.status(200).send({
        data: {
          id: findUser[0].id,
          username: findUser[0].username,
          nama: findUser[0].nama,
        },
        token: token,
      });
    } else {
      res.status(400).send({
        message: 'Wrong Username or Password',
      });
    }
  } catch (err) {
    return res.status(400).send({
      message: 'Something Went Wrong',
    });
  }
}

module.exports = {
  signin,
  signup,
};
