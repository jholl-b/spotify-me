import { combineReducers } from 'redux';
import spotify_profile from './spotify_profile';
import spotify_tracks from './spotify_tracks';
import token from './spotify_login';

export default combineReducers({
    token,
    spotify_profile,
    spotify_tracks
});