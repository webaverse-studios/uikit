export default function objectsToArray(object: object) {
  let result: unknown[] = [];

  Object.values(object).forEach((value) => {
    if (typeof value === 'string') {
      result = [...result, value];
    } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      result = [...result, ...objectsToArray(value as Record<string | number | symbol, unknown>)];
    }

    return undefined;
  });

  return result;
}
