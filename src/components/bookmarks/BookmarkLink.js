// Render a link to the bookmarks with total

import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const View = ({ count }) => (
    <Link to='/bookmarks'>Bookmarks{count > 0 && ` (${count})`}</Link>
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