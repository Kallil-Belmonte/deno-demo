import type { ObjectType, RequestError } from '@/shared/files/types.ts';
import { badRequest } from '@/routes/_files/responses.ts';
import arrayToString from '../array/arrayToString.ts';
import validateObject from './validateObject.ts';

const { parse } = JSON;

const getNotFoundMessage = (array: string[]): RequestError => ({
  messages: [`Properties not found: ${arrayToString(array)}.`],
});

const getWrongTypeMessage = (array: string[]): RequestError => ({
  messages: [`Properties with wrong type: ${arrayToString(array)}.`],
});

const getExtraMessage = (array: string[]): RequestError => ({
  messages: [`Extra properties: ${arrayToString(array)}.`],
});

/**
 * @function validateBody
 * @description Validates the body request.
 * @param { string } bodyText - Body in string format.
 * @param { ObjectType } schema - Schema for validation.
 */

const validateBody = (bodyText: string, schema: ObjectType) => {
  if (!bodyText) return badRequest({ messages: ['Body is required.'] });

  const body: ObjectType = parse(bodyText);
  const { notFound, wrongType, extra } = validateObject(body, schema);

  if (notFound.length) return badRequest(getNotFoundMessage(notFound));
  if (wrongType.length) return badRequest(getWrongTypeMessage(wrongType));
  if (extra.length) return badRequest(getExtraMessage(extra));
};

export default validateBody;
