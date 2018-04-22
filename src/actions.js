import * as c from './constants';

/*
 * action types
 */

export const GET_CHARACTERS = 'GET_CHARACTERS';

/*
 * action creators
 */

export function fetchCharacters(offset) {
    return dispatch => {
        return fetch(`${c.API}${c.CHARACTERS}?offset=${offset}&apikey=${c.KEY}`)
            .then(response => response.json())
            .then(json => dispatch(getCharacters(json)))
    }
}

export function getCharacters(json) {
    return { type: GET_CHARACTERS, json }
}