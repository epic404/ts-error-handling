import { FetchError } from './fetchError';

export async function fetchAuthToken() {
  try {
    const token = 'token';
    return token;
  } catch (error) {
    return new FetchError('API_TOKEN_ERROR', { data: error });
  }
}