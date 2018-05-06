import React, { Component } from 'react'
import Character from '../item/Hoc'
import Pager from '../pager/Hoc'

class View extends Component {

    componentDidMount() {
        this.props.paginate(this.props.numPage);
    }

    render() {
        return (
            <div className="wrap">
                <Pager />
                <ul className="heroes-list">
                    {this.props.characters.length > 0 && this.props.characters.map((character, index) => (
                        <Character key={index} character={character} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default View