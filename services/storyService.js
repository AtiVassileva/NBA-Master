const storiesURL = 'https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=67ab9aa2a29d896368e8047429caf05e&hash=d1f82078d832b8a13c1f0fbbd964746e';

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors'
};

export const getStoriesList = async () => {
    let stories = [];

    await fetch(storiesURL, requestOptions)
        .then(response => response.json())
        .then(result =>  stories = result.data.results);

        console.log(stories);
    return stories;
};