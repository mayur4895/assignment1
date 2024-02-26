// pages/api/todos/[id].ts

import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
 // Import your generated Prisma Client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PATCH') {
    const { title, desc, due_date } = req.body;

    try {
      const updatedTodo = await db.todo.update({
        where: { title: id as string },
        data: { title, desc, due_date },
      });

      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error updating todo' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await db.todo.delete({ where: { id: id as string } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting todo' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
