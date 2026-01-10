import { isArray, isObject } from '../data/typeCheckers.ts';

const { entries } = Object;
const { parse } = JSON;

/**
 * @function sanitize
 * @description Sanitizes the body.
 * @param bodyText - Body text.
 */

const sanitize = (bodyText: string) => {
  if (!bodyText || typeof bodyText !== 'string') return bodyText;

  const body = parse(bodyText);

  const sanitizeValue = (value: string) =>
    value.replace(/<[^>]*>?/gm, '') // Remove HTML tags
      .replace(/[{}`$]/g, '') // Remove dangerous characters
      .trim();

  const sanitizeBody = (data: any) => {
    entries(data).forEach(([key, value]: [key: string, value: any]) => {
      if (typeof value === 'string') {
        data[key] = sanitizeValue(value);
      } else if (isObject(value) || isArray(value)) {
        sanitizeBody(value);
      }
    });
  };

  sanitizeBody(body);

  return body;
};

export default sanitize;
