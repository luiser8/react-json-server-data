const apiurl = import.meta.env.VITE_API_URL;

export const get = async (route) => {
    const url = `${apiurl}${route}`;
    return await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: true
    }).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        } if (response.status === 401) {
            return response.text();
        } else {
            response.json().then((json) => {
                return json;
            });
            return null;
        }
    }).catch(e => console.log(e));
}
