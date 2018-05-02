import { combineReducers } from 'redux'
import {
    GET_CHARACTERS,
    GET_CHARACTER,
    MESSAGE,
    UNSET_HERO,
    BOOKMARK_ADD,
    BOOKMARK_REMOVE
} from './actions'
import filter from 'lodash/filter'

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

// Try to get bookmarked heroes from session storage
let initialBookmarks = []
try {
    initialBookmarks = sessionStorage.getItem('bookmarks')? JSON.parse(sessionStorage.getItem('bookmarks')) : [];
} catch(e) {
    initialBookmarks = [];
}

export function bookmarks(state = initialBookmarks, action) {
    switch (action.type) {
        case BOOKMARK_ADD:
            let addedState = [...state, action.hero]; // add the hero to the state
            sessionStorage.setItem('bookmarks', JSON.stringify(addedState)); // update session storage
            return addedState;
        case BOOKMARK_REMOVE:
            let removedState = filter(state, function (o) { return o.id !== action.id; }); // remove by id, thanks lo :)
            sessionStorage.setItem('bookmarks', JSON.stringify(removedState)); // update session storage
            return removedState;
        default:
            return state;
    }
}

const marvelApp = combineReducers({
    characters,
    character,
    ui,
    bookmarks
})

export default marvelApp