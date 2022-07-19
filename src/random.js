import { removeElementAt } from "./utility";

export const getRandomInteger = (from, to) => (
  from + Math.round(Math.random() * (to - from - 1))
);

export const chooseRandomElement = array => {
  if (array.length === 0) {
    return undefined;
  }

  return array[getRandomInteger(0, array.length)];
};

export const chooseRandomElements = (array, n) => {
  let source = array;
  const result = Array(n).fill();

  for (let i = 0; i < n; i += 1) {
    if (source.length === 0) {
      result.push(undefined);
    } else {
      const index = getRandomInteger(0, source.length);

      result.push(source[index]);
      source = removeElementAt(source, index);
    }
  }

  return result;
};
