import * as c from './constants';

/*
 * action types
 */

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const MESSAGE = 'MESSAGE';
export const UNSET_HERO = 'UNSET_HERO';

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

export function fetchCharacter(id) {
    return dispatch => {
        return fetch(`${c.API}${c.CHARACTERS}/${id}?apikey=${c.KEY}`)
            .then(response => response.json())
            .then(json => {
                if (json.code === 200) {
                    dispatch(getCharacter(json))
                } else {
                    dispatch(message(json.status))
                }
            })
    }
}

export function getCharacter(json) {
    return { type: GET_CHARACTER, json }
}

export function message(text) {
    return { type: MESSAGE, text }
}

export function unsetCurrentCharacter() {
    return { type: UNSET_HERO }
}