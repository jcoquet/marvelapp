import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookmarkLink from './bookmarks/BookmarkLink';

class App extends Component {
    render() {
        return (
            <div>
                <Link to='/page/1'>Home</Link>
                <BookmarkLink />
                {this.props.children && React.cloneElement(this.props.children)}
            </div>
        );
    }
}

export default App;
