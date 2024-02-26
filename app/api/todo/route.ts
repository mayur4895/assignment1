import { NextApiRequest, NextApiResponse } from 'next';
import { auth, clerkClient } from '@clerk/nextjs'; // Adjust the path to your auth module
import { db } from '@/lib/db'; // Adjust the path to your database module
import { NextResponse } from 'next/server';
import { currentProfile } from '@/lib/currentProfile';
import exp from 'constants';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, desc, due_date } = body;

    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' });
    }

    let currentUser = await clerkClient.users.getUser(userId);
    let username = `${currentUser.firstName} + ${currentUser.lastName}`;

    // Check if the user profile exists
    const existingUser = await db.user.findUnique({
      where: { userId },
    });

    let user;
    if (existingUser) {
      user = existingUser;
    } else {
      user = await db.user.create({
        data: {
          userId,
          username,
        },
      });
    }

    const Todo = await db.todo.create({
      data: {
        title,
        desc,
        due_date,
        userId,
      },
    });

    return NextResponse.json(Todo);
  } catch (error) {
    console.error('Error creating Todo:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
 

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' });
    }

    const profile = await currentProfile();

    const Todos = await db.todo.findMany({
      where: {
        userId: profile?.userId,
      },
    });
    return NextResponse.json(Todos, { status: 200 });
  } catch (error) {
    console.error('Error creating Todo:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}