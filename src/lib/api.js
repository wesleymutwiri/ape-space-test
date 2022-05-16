const base = import.meta.env.BASE_URL;
const token = import.meta.env.AUTHORIZATION_TOKEN;

/**
 * @param {any} method
 * @param {any} resource
 * @param {any} data
 */
export function api(method, resource, data) {
    return fetch(`${base}/${resource}`, {
        method,
        headers: {
            'content-type' : 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: data && JSON.stringify(data)
    });
}