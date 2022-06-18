// This module parses and saves the front matter from a markdown file.

import { parse as parseYaml } from "$std/encoding/yaml.ts";
import { join } from "$std/path/mod.ts";

export interface FrontMatter {
  // A path to a markdown file in the `/content/special/prerequisites` directory.
  prerequisites?: string;
  // A path to a markdown file in the `/content/special/next_steps` directory.
  nextSteps?: string;
}

const FRONT_MATTERS: FrontMatter[] = [];

export function hasFrontMatter(content: string): boolean {
  return content.indexOf("---") == 0;
}

// Takes the contents of a markdown file, and writes its parsed front matter
// to the `processed/index.json` file, with it's path as the key.
// Returns the contents without the front matter.
export function removeFrontMatter(content: string): string {
  const frontMatter = parseFrontMatter(content);
  if (frontMatter) {
    FRONT_MATTERS.push(frontMatter);
  }

  return content.split("---")[2];
}

export async function writeFrontMatters(): Promise<void> {
  await Deno.writeTextFile(
    join(Deno.cwd(), "processed/index.json"),
    JSON.stringify(FRONT_MATTERS, null, 2),
  );
}

// Capture the YAML front matter from a markdown file.
function parseFrontMatter(content: string): FrontMatter | undefined {
  return parseYaml(content.split("---")[1]) as FrontMatter;
}
