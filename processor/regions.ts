// Take a file path, and a region name, and return the contents of that region
// in the file.

// Regions are marked by `//region:regionName` and `//endregion:regionName`

export async function getRegion(
  filePath: string,
  regionName: string,
): Promise<string> {
  const contents = await Deno.readTextFile(filePath);
  const regionStart = `//region:${regionName}`;
  const regionEnd = `//endregion:${regionName}`;

  const start = contents.indexOf(regionStart);
  const end = contents.indexOf(regionEnd);

  if (start === -1 || end === -1) {
    throw new Error(`Region ${regionName} not found in ${filePath}`);
  }

  return contents.substring(start + regionStart.length, end);
}

export function removeOtherRegionTags(
  contents: string,
): string {
  const startRegex = /\s*\/\/region:.*/g;
  const endRegex = /\s*\/\/endregion:.*/g;
  contents = contents.replaceAll(startRegex, "");
  contents = contents.replaceAll(endRegex, "");
  return contents;
}
