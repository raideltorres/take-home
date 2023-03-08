const permute = (strings, ...args) => {
  const index = args.findIndex((arg) => typeof arg === 'object');

  if (index < 0) {
    // There are no more objects that we need to replace. We can now recompose the string and return it.
    return (
      String.raw(strings, ...args.map((o) => o ?? ''))
        // It's possible that the output has chained multiple dividers together. Replace 'a__--b' with 'a--b'.
        .replace(/[_-]+(__|--)/g, (_, s) => s)
        // Trim leading/trailing dividers. Replace '__a--' with 'a'.
        .replace(/^[_-]+|[_-]+$/g, '')
    );
  }

  const target = {
    '': true,
    ...args[index],
  };
  // Convert the object to an array of keys that have a truthy values.
  /*eslint-disable no-unused-vars */
  const items = Object.entries(target)
    .filter(([key, val]) => val)
    .map(([key]) => key);

  // For each item we need to create a new "args" and recursively call this function.
  return items
    .map((item) => {
      const arr = [...args];
      arr[index] = item;
      return arr;
    })
    .map((newArgs) => permute(strings, ...newArgs))
    .filter(Boolean)
    .join(' ');
};

export default permute;
