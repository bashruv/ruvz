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

export async function generateRandomPath(length = 6) {
  const cursor = 0;
  const [_, existingPaths] = await kv.scan(cursor, {
    match: "*",
    count: 100,
  });

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  function getRandomString() {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  let newPath;
  do {
    newPath = getRandomString();
  } while (existingPaths.includes(newPath));

  return newPath;
}

interface CreatePathState {
  error: boolean;
  complete: boolean;
  message: string;
}

export async function createPath(
  prevState: CreatePathState,
  formData: FormData,
) {
  const cursor = 0;

  const [_, existingPaths] = await kv.scan(cursor, {
    match: "*",
    count: 100,
  });

  let data = {
    path: formData.get("path") as string,
    dest: formData.get("dest") as string,
  };

  if (!data.path) {
    data.path = await generateRandomPath();
  }

  if (existingPaths.includes(data.path)) {
    return {
      error: true,
      complete: false,
      message: "This Path is Already Used.",
    };
  }

  if (!data.dest.includes("https://")) {
    data.dest = `https://${data.dest}`;
  }

  try {
    await kv.set(data.path, data.dest);

    return {
      error: false,
      complete: true,
      message: "OK",
    };
  } catch (err) {
    return {
      error: true,
      complete: false,
      message: err as string,
    };
  }
}
