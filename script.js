import API_KEY from './config.js'

const img = document.createElement('img');

const imageContainer = document.getElementById('image-container');

const COUNT = 30;
const COLLECTION = 'nature';

const test = API_KEY;

console.log(test);

const API_URL = `https://api.unsplash.com/photos/random/?count=${COUNT}&collections=${COLLECTION}`;

function getImage() {
    fetch(API_URL, {
        headers: {
            'Accept-Version': 'v1',
            'Authorization': API_KEY
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))
}

// getImage();