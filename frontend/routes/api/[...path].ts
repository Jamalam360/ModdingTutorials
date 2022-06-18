import { HandlerContext } from "$fresh/server.ts";

interface Cache {
  [key: string]: string;
}

const CACHE: Cache = {};
const BASE_URL =
  "https://api.github.com/repos/Jamalam360/ModdingTutorials/contents/processed";

async function fetchPath(path: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/${path}.html`, {
    headers: { Accept: "application/vnd.github.v3.raw" },
  });
  const text = await res.text();
  return text;
}

export const handler = async (
  ctx: HandlerContext,
): Promise<Response> => {
  if (!Object.keys(CACHE).includes(ctx.match.path)) {
    CACHE[ctx.match.path] = await fetchPath(ctx.match.path);
  }

  console.log(CACHE[ctx.match.path]);

  return new Response(CACHE[ctx.match.path], {
    headers: { "Content-Type": "text/html" },
  });
};
