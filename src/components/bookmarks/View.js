import React, { Component } from 'react'
import Character from '../item/Hoc'

class View extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.characters.length > 0 && this.props.characters.map((character, index) => (
                        <Character key={index} character={character} />
                    ))}
                    {this.props.characters.length === 0 &&
                        'No bookmarks yet' }                    
                </ul>
            </div>
        )
    }
}

export default View