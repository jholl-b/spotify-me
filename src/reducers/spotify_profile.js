import * as actions from '../actions';

const spotify_profile = (state = null, action) => {
    switch(action.type) {
        case actions.ACTION_ME:
            return action.payload.data;
        default:
            return state;
    }
}

export default spotify_profile;