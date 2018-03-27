import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Profile extends Component {
    componentWillMount() {
        if (this.props.token !== '')
            this.props.myProfile(this.props.token);
    }

    render() {
        if (this.props.profile !== null) {
            return (
                <div className='App-body'>
                    <img 
                        className='profile' 
                        src={ this.props.profile.images[0].url } 
                        alt='Profile'
                    />
                    <div>
                        <p> id: { this.props.profile.id } </p>
                        <p> name: { this.props.profile.display_name } </p>
                        <p> email: { this.props.profile.email } </p>
                        <p> birthdate: { this.props.profile.birthdate } </p>
                    </div>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        token: state.token,
        profile: state.spotify_profile
    };
}

export default connect(mapStateToProps, actions)(Profile);