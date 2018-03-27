import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
    componentWillMount() {
        const me = this.hashToLogin();

        if ( me !== null ) {
            this.setState({ message: 'Logado' });
            this.props.authentication(me.access_token);
        }
        else
            this.setState({ message: 'Não Logado' });
    }

    hashToLogin() {
        var obj = null;
        if (this.props.location.hash !== '') {
            obj = {};
            this.props.location.hash.replace('#', '').split('&').map( (val) => {
                return obj[val.split('=')[0]] = val.split('=')[1];
            } );
            window.location.hash = '';
            this.props.authentication(obj.access_token);
        }  
        return obj;
    }

    render() {
        if (this.props.token !== null) {
            return (
                <div>
                    Logado
                </div>
            );
        }
        else {
            return (
                <div>
                    Não logado
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return { 
        token: state.token,
        spotify: state.spotify 
    };
}

export default connect(mapStateToProps, actions)(Home);