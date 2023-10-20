import { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '@/types';

import { products } from './';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const { id } = req.query;
  const product = products.find((x) => x.id === Number(id));

  if (!product) {
    return res.status(404);
  }

  return res.status(200).json(product);
}
