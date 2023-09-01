import { FetchError } from './fetchError';
import { fetchAuthToken } from './util';

export async function handleFetch() {
  try {
    const token = await fetchAuthToken();
    throw 'invalid fetch'
    return token;
  } catch (error) {
    return new FetchError('FETCH_API_ERROR', { data: error });
  }
}