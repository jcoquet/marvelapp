import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = (state, ownProps) => {
    return {
        character: ownProps.character
    }
}

const Character = connect(
    mapStateToProps
)(View)

export default Character