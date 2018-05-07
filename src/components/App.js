import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookmarkLink from './bookmarks/BookmarkLink';
import logo from '../assets/MarvelLogo.svg';
import Loader from './Loader';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="wrap">
                        <Link to='/page/1'><img alt="Marvel logo" src={logo} width="100px" /></Link>
                        <BookmarkLink />
                    </div>
                </header>
                {this.props.children && React.cloneElement(this.props.children)}
                <Loader />
            </div>
        );
    }
}

export default App;
