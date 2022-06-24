import { Handler, HandlerContext } from "$fresh/server.ts";

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

export const handler: Handler = async (
  ctx: HandlerContext,
): Promise<Response> => {
  const { path } = ctx.match;

  if (!Object.keys(CACHE).includes(path)) {
    CACHE[path] = await fetchPath(path);
  }

  return new Response(CACHE[path], {
    headers: { "Content-Type": "text/html" },
  });
};
