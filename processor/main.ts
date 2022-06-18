// The processor module reads all the content from the `/content` directory
// and processes it into HTML, inserting regions, so the frontend does not
// need to do anything (it is effectively static).

import { emptyDir, ensureDir, walk } from "$std/fs/mod.ts";
import { join } from "$std/path/mod.ts";
import { cyan, green } from "$std/fmt/colors.ts";
import { render as renderMarkdown } from "$markdown/mod.ts";

import { timeAsync } from "util/performance.ts";

import { getRegion, removeOtherRegionTags } from "./regions.ts";
import {
  hasFrontMatter,
  removeFrontMatter,
  writeFrontMatters,
} from "./frontMatter.ts";

const CONTENT_DIRECTORY = join(Deno.cwd(), "content");
const PROCESSED_DIRECTORY = join(Deno.cwd(), "processed");

await emptyDir(PROCESSED_DIRECTORY);

export async function main() {
  let count = 0;

  const [, timeTaken] = await timeAsync(async () => {
    for await (const entry of walk(CONTENT_DIRECTORY)) {
      if (entry.isFile) {
        if (entry.path.endsWith(".md")) {
          let processed = await processMarkdown(
            await Deno.readTextFile(entry.path),
          );

          if (!entry.path.includes("special") && hasFrontMatter(processed)) {
            processed = removeFrontMatter(processed);
          }

          processed = renderMarkdown(processed, {
            allowIframes: false,
            baseUrl: "", // TODO(Jamalam360): Fill in with the base URL of the website.
          });

          const path = join(
            PROCESSED_DIRECTORY,
            entry.path.split(CONTENT_DIRECTORY)[1].split(".md")[0] + ".html",
          );

          await ensureDir(
            entry.path.replace("content", "processed").split(entry.name)[0],
          );

          await Deno.writeTextFile(
            path,
            processed,
          );

          count++;
        }
      }
    }

    await writeFrontMatters();
  });

  console.log(
    `${cyan(count.toString())} files processed in ${
      green(timeTaken.toFixed(2).toString())
    }ms`,
  );
}

// This function locates references to multiple regions in markdown files, defined with
// ```{{filePath}@{regionName}}``` and replaces them with the contents of the region.
async function processMarkdown(markdown: string): Promise<string> {
  const regex = /\`\`\`{(.*?)@(.*?)}[^]*?\`\`\`/g;
  let match;

  // This should match all regions in the markdown file.
  while ((match = regex.exec(markdown)) !== null) {
    const [, filePath, regionName] = match;
    const fileExtension = filePath.split(".")[1];

    const region = await getRegion(
      join(Deno.cwd(), "mod", filePath),
      regionName,
    );

    markdown = markdown.replace(
      match[0],
      `\`\`\`${fileExtension}
${region.trim()}
\`\`\`
    `,
    );
  }

  return removeOtherRegionTags(markdown);
}

await main();
