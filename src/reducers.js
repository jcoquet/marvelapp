import { combineReducers } from 'redux'
import {
    GET_CHARACTERS
} from './actions'

function characters(state = {}, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return Object.assign({}, state, action.json.data.results)
        default:
            return state
    }
}

const marvelApp = combineReducers({
    characters
})

export default marvelApp