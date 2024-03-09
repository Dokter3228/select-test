const moveZeros = (array: unknown[]) => {
  let pointer1 = 0;
  let pointer2 = 0;

  array.forEach(() => {
    if (array[pointer1] !== 0) {
      [array[pointer1], array[pointer2]] = [array[pointer2], array[pointer1]];
      pointer2++;
    }
    pointer1++;
  });

  return array;
};

const moveZeros2 = (array: unknown[]) => {
  const zeros = array.filter((value) => value === 0);
  const notZeros = array.filter((value) => value !== 0);

  return [...notZeros, ...zeros];
};
