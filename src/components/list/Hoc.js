import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = state => {
    return {
        characters: Object.values(state.characters)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCharacterClick: id => {
            //dispatch(toggleTodo(id))
        }
    }
}

const CharacterList = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default CharacterList