import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = (state, ownProps) => {
    return {
        characters: Object.values(state.bookmarks)
    }
}

const Bookmarks = connect(
    mapStateToProps
)(View)

export default Bookmarks