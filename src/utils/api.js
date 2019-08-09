const api = 'https://pandas-urlshortener-server.herokuapp.com/api/item';
const shortBaseUrl = 'https://pandas-urlshortener-server.herokuapp.com'

//Post request
export const shortURL = async data => {
    const response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify({
            'originalUrl': data,
            shortBaseUrl
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    if (!response) {
        return 'error, no response'
    }
    return response.shortUrl
}