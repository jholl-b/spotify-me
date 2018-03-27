import * as actions from '../actions';

const token = (state = '', action) => {
    switch(action.type) {
        case actions.ACTION_AUTHENTICATION:
            return action.payload;
        default:
            return state;
    }
}

export default token;