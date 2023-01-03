import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'PATCH') {
	}
	res.statusCode = 405;
	return res.end();
};
