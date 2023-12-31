import type { ObjectType } from '@/shared/files/types.ts';

/**
 * @function queryStringToObject
 * @description Converts a query string to object.
 * @param { string } url - URL.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/oNJdrMe}
 */

const queryStringToObject = <Type = ObjectType>(url: string): Type => {
  const { search, searchParams } = new URL(url);

  return search.split('&').reduce((accumulator, currentValue) => {
    const param = currentValue.split('=')[0].replace(/\?/, '');
    return {
      ...accumulator,
      [param]: searchParams.get(param),
    };
  }, {} as Type);
};

export default queryStringToObject;
