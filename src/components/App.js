import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Link to='/page/1'>Home</Link>
                {this.props.children && React.cloneElement(this.props.children)}
            </div>
        );
    }
}

export default App;
