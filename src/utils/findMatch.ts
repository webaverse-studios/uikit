function findMatch<T>(data: T[], find, defaultValue): T {
  const founded = data.findIndex((el) => el === find);
  return founded >= 0 ? find : defaultValue;
}

export default findMatch;
