import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'PATCH') {
		try {
			const todoId = Number(req.query.id);
			const todo = Data.todo.exist({ id: todoId });
			if (!todo) {
				res.statusCode = 404;
				res.end();
			}
		} catch (e) {
			console.log(e);
			res.statusCode = 500;
			res.send(e);
		}
	}
	res.statusCode = 405;
	return res.end();
};
