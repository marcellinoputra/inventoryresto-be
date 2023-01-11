import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export default function authenticateToken(req: Request, res:Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token);
  if (token == null) {
    return res.status(401).json({
      message: 'Token Not Found',
    });
  }
  jwt.verify(token, 'secret', (err, result) => {
    if (err) {
      return res.status(401).json({
        message: 'User Unauthorized',
      });
    }
  });

  next();
}

