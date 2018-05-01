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

export function ui(state = { nextButton: false, prevButton: false }, action) {
    switch (action.type) {
        case MESSAGE:
            return Object.assign({}, state, action.text)
        case GET_CHARACTERS:
            let prevButton = action.json.data.offset > 0;
            let nextButton = action.json.data.offset < action.json.data.total - action.json.data.limit;
            return Object.assign({}, state, { prevButton, nextButton });
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