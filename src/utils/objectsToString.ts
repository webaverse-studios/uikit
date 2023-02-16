import objectsToArray from './objectsToArray';

export default function objectsToString(object: Record<string | number | symbol, unknown>) {
  return objectsToArray(object).join(' ');
}
