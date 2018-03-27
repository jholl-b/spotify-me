import axios from 'axios';

import { SPOTIFY_URL_API } from '../Spotify';

export const ACTION_AUTHENTICATION = 'authentication';
export const ACTION_ME = 'me';
export const ACTION_TRACKS = 'tracks';

export function authentication(token) {
    return {
        type: ACTION_AUTHENTICATION,
        payload: token
    };
}

export function myProfile(token) {
    const request = axios.get(`${SPOTIFY_URL_API}/me`, { headers: { 'Authorization': `Bearer ${token}` } });

    return { 
        type: ACTION_ME, 
        payload: request 
    }; 
};

export function myTracks(token) {
    const request = axios.get(`${SPOTIFY_URL_API}/me/tracks`, { headers: { 'Authorization': `Bearer ${token}` } });
    
    return {
        type: ACTION_TRACKS,
        payload: request
    }
}