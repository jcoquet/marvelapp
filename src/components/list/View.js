import React, { Component } from 'react'
import Character from '../item/Hoc'
import Pager from '../pager/Hoc'
import Pagination from '../../pagination'

class View extends Component {

    componentDidMount() {
        this.props.paginate(this.props.numPage);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.numPage !== this.props.numPage) {
            this.props.paginate(this.props.numPage);
        }
    }

    render() {

        if (this.props.numPage > Pagination.total / Pagination.limit) {
            return <p className="wrap">Oops, nothing to show.<br />sorry :)<br />Please try another page.</p>
        }

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