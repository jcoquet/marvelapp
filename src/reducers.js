import { combineReducers } from 'redux'
import {
    GET_CHARACTERS,
    GET_CHARACTER,
    MESSAGE,
    UNSET_HERO
} from './actions'

function characters(state = {}, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return Object.assign({}, state, action.json.data.results)
        default:
            return state
    }
}

function character(state = null, action) {
    switch (action.type) {
        case GET_CHARACTER:
            return Object.assign({}, state, action.json.data.results[0])
        case UNSET_HERO:
            return null
        default:
            return state
    }
}

function ui(state = {}, action) {
    switch (action.type) {
        case MESSAGE:
            return Object.assign({}, state, action.text)
        default:
            return state
    }
}

const marvelApp = combineReducers({
    characters,
    character,
    ui
})

export default marvelApp