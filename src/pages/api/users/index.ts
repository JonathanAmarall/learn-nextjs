/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'jonathan' },
    { id: 1, name: 'jonathan' },
    { id: 1, name: 'jonathan' },
  ];
  return res.json(users);
};
