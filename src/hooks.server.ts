import { auth } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
  event.locals.auth = auth.handleRequest(event);
  return await resolve(event);
};