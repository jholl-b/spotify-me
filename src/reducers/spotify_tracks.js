import * as actions from '../actions';

const spotify_tracks = (state = null, action) => {
    console.log(action);
    switch(action.type) {
        case actions.ACTION_ME:
            return action.payload.data;
        default:
            return state;
    }
}

export default spotify_tracks;