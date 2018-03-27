import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { login } from '../Spotify';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <a href={login}>Login</a>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/tracks'>Tracks</Link>
            </header>
        );
    };
}

export default Header;