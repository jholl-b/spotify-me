const SPOTIFY_CLIENT_ID = 'df75bfccf6a5476d9ae66751a0ff04bf';

export const SPOTIFY_URL = 'https://accounts.spotify.com';
export const SPOTIFY_URL_API = 'https://api.spotify.com/v1';

const SPOTIFY_SCOPE = encodeURIComponent('user-read-private user-read-email user-read-birthdate user-library-read');
const SPOTIFY_REDIRECT_URI = encodeURIComponent('http://localhost:3000');

export const login = `${SPOTIFY_URL}/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${SPOTIFY_SCOPE}`;