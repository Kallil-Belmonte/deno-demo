/**
 * @function arrayToString
 * @description Displays an array as a string.
 * @param { string[] } array - Array to convert.
 */

const arrayToString = (array: string[]) => {
  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });
  return formatter.format(array);
};

export default arrayToString;
