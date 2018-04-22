import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = (state, ownProps) => {
    return {
        character: ownProps.character
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const Character = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default Character