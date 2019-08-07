const api = 'https://pandas-urlshortener-server.herokuapp.com/api/item';
const shortBaseUrl = 'https://pandas-urlshortener-server.herokuapp.com'

//Post request
export const shortURL = data => {
    return fetch(api, {
        method: 'POST',
        body: JSON.stringify({
            'originalUrl': data,
            shortBaseUrl
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            console.log('Success:', (response.shortUrl))
            return response.shortUrl
        })
        .catch(error => console.error('Error:', error));


}