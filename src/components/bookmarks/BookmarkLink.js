// Render a link to the bookmarks with total

import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

export const View = ({ count }) => (
    <Link className="bookmarks-link" to='/bookmarks'><span className="label">Bookmarks</span>{count > 0 && <span className="count">{count}</span>}</Link>
)

const mapStateToProps = (state) => {
    return {
        count: state.bookmarks.length
    }
}

const BookmarkLink = connect(
    mapStateToProps
)(View)

export default BookmarkLink