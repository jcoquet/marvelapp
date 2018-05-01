import { connect } from 'react-redux'
import View from './View'
import { paginate, fetchCharacters } from '../../actions';

const mapStateToProps = state => {
    return {
        prev: state.ui.prevButton,
        next: state.ui.nextButton
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: direction => {
            dispatch(paginate(direction));
            dispatch(fetchCharacters());
        }
    }
}

const Pager = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default Pager