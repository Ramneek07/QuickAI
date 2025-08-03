import dotenv from 'dotenv';
dotenv.config();

import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is not defined');
}

export const sql = neon(connectionString);