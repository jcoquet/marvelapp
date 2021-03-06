import { connect } from 'react-redux'
import View from './View'
import { paginate, fetchCharacters } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        numPage: ownProps.match.params.num,
        characters: Object.values(state.characters)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        paginate: numPage => {
            dispatch(paginate(numPage));
            dispatch(fetchCharacters());
        }
    }
}

const CharacterList = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default CharacterList