import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  console.log(id);

  const users = [{ id: 1, name: 'jonathan' }];
  return res.json(users);
};
