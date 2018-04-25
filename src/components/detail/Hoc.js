import { connect } from 'react-redux'
import View from './View'
import { fetchCharacter, unsetCurrentCharacter } from '../../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        characterId: ownProps.match.params.id,
        character: state.character
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHeroById: function(characterId) {
            dispatch(fetchCharacter(characterId));
        },
        unsetCurrentCharacter: function() {
            dispatch(unsetCurrentCharacter());
        }
    }
}

const CharacterDetail =  withRouter( connect(
    mapStateToProps,
    mapDispatchToProps
)(View) )

export default CharacterDetail