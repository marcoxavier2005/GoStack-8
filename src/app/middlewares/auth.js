import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req,res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
//usou essa virgula na desestruturação para pegar apenas a segunda parte do array
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token,authConfig.secret);

    req.userId = decoded.Id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid'});
  };
};
