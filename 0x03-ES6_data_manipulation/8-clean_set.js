function cleanSet(set, startSting) {
  const values = [];

  if (!startSting || startSting.length === 0) {
    return values.join('-');
  }

  for (const element of set) {
    if (element && element.startsWith(startSting)) {
      values.push(element.slice(startSting.length));
    }
  }
  return values.join('-');
}
export default cleanSet;
