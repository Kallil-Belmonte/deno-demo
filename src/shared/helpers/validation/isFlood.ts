import { tooManyRequests } from '../../../core/router/responses.ts';
import getIp from '../data/getIp.ts';

export const minimunDelayBetweenRequests = 1000; // in milliseconds

const lastSubmission = new Map<string, number>();

/**
 * @function isFlood
 * @description Validates the minimun delay between requests.
 * @param { Request } request - Request object.
 */

const isFlood = (request: Request) => {
  const now = Date.now();
  const last = lastSubmission.get(getIp(request));

  // Demand at least 1 second between requests
  if (last && now - last < minimunDelayBetweenRequests) {
    return tooManyRequests(request, { messages: ['Too many requests.'] });
  }

  lastSubmission.set(getIp(request), now);
  return null;
};

export default isFlood;
