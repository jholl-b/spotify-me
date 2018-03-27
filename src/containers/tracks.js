import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Tracks extends Component {
    componentWillMount() {
        if (this.props.token !== '')
            this.props.myTracks(this.props.token);
    }

    render() {
        return (
            <div>bla</div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        token: state.token,
        tracks: state.spotify_tracks
    };
}

export default connect(mapStateToProps, actions)(Tracks);