"use server";

import { kv } from "@vercel/kv";

export async function getAll(): Promise<string[][]> {
  let cursor = "0";
  const keys = [];

  do {
    const [nextCursor, batchKeys] = await kv.scan(cursor, {
      match: "*",
      count: 100,
    });
    cursor = nextCursor;
    keys.push(...batchKeys);
  } while (cursor !== "0");

  const dataPromises = keys.map(async (key) => {
    const value = await kv.get(key);
    return [key, value as string];
  });

  const data = await Promise.all(dataPromises);

  return data;
}
