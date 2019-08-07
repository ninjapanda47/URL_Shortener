const api = (process.env.NODE_ENV === 'production') ? 'https://pandas-urlshortener-server.herokuapp.com/api/item' : 'http://localhost:7000/api/item';
const shortBaseUrl = (process.env.NODE_ENV === 'production') ? 'https://pandas-urlshortener-server.herokuapp.com' : 'http://localhost:7000'

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