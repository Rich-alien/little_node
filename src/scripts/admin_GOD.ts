export function deleteProduct (url: string, id: string): Promise<Response> {
    return fetch(url, {
        method: 'DELETE'
    });
}