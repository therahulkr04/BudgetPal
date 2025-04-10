'use server';

import {redirect} from 'next/navigation';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function createUser({email, password}: any) {
  try {
    await dbConnect();

    const existingUser = await User.findOne({email});

    if (existingUser) {
      return {error: 'Email already registered'};
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return {success: true};
  } catch (error: any) {
    return {error: error.message};
  }
}

export async function signIn({email, password}: any) {
  try {
    await dbConnect();

    const user = await User.findOne({email});

    if (!user) {
      return {error: 'Invalid credentials'};
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return {error: 'Invalid credentials'};
    }

    return {success: true};
  } catch (error: any) {
    return {error: error.message};
  }
}

// export async function getUserSession() {
//   const session = await getSession();
//   return session?.user ?? null;
// }
