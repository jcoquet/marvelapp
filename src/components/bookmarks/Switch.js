// Render a button to toggle the bookmark

import React from 'react'
import { connect } from 'react-redux'
import { addBookmark, removeBookmark } from '../../actions'
import findIndex from 'lodash/findIndex'
import { MAX_BOOKMARKS } from '../../constants'

const View = ({ bookmark, handleBookmark, canBookmark, character }) => (
  <div>
    { canBookmark && !bookmark && <span onClick={() => handleBookmark(character, bookmark)}>bookmark this</span> }
    { bookmark && <span onClick={() => handleBookmark(character, bookmark)}>remove from bookmarks</span> }
  </div>
)

const mapStateToProps = (state, ownProps) => {
    return {
        character: ownProps.character, // pass the wohle hero
        bookmark: findIndex(state.bookmarks, ['id', ownProps.character.id]) !== -1, // already bookmarked ?
        canBookmark: state.bookmarks.length < MAX_BOOKMARKS // toggle the button if we reach the limit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleBookmark: (character, bookmarkStatus) => {
            if (bookmarkStatus) { // dispatch the add or remove action depending on the bookmark status
                dispatch(removeBookmark(character.id));
            } else {
                dispatch(addBookmark(character));
            }
        }
    }
}

const Switch = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default Switch