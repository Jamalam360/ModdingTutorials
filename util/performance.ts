export function time<T>(fun: () => T): [T, number] {
  const start = performance.now();
  const result = fun();
  const time = performance.now() - start;
  return [result, time];
}

export async function timeAsync<T>(
  fun: () => Promise<T>,
): Promise<[T, number]> {
  const start = performance.now();
  const result = await fun();
  const time = performance.now() - start;
  return [result, time];
}
