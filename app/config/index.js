import { fetchUtils } from 'react-admin';

export const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'posts');
    return fetchUtils.fetchJson(url, options);
}