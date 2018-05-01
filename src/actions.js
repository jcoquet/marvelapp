import * as c from './constants';
import pagination from './pagination';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

/*
 * action types
 */

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const MESSAGE = 'MESSAGE';
export const UNSET_HERO = 'UNSET_HERO';
export const PAGINATION = "PAGINATION";

/*
 * action creators
 */

export function paginate(direction) {

    if (!direction) direction = 1;

    switch (direction) {
        case c.PAGINATION_NEXT:
            pagination.offset = pagination.limit * (pagination.numPage + 1);
            pagination.numPage = pagination.numPage + 1;
            break;

        case c.PAGINATION_PREV:
            pagination.offset = pagination.limit * (pagination.numPage - 1);
            pagination.numPage = pagination.numPage - 1;
            break;

        default:
            pagination.offset = pagination.limit * (direction - 1);
            pagination.numPage = direction - 1;
            break;
    }
    return {
        type: PAGINATION,
        pagination
    }
}

export function fetchCharacters() {
    return dispatch => {
        return fetch(`${c.API}${c.CHARACTERS}?offset=${pagination.offset}&limit=${pagination.limit}&apikey=${c.KEY}`)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                if (json.code === 200) {
                    dispatch(getCharacters(json));
                    if(pagination.numPage > 0) {
                        history.push(`/page/${pagination.numPage + 1}`);
                    } else if(pagination.numPage === 0) {
                        history.replace('/');
                    }
                } else {
                    throw Error(json.status);
                }
            })
            .catch(error => dispatch(message(error.message)));
    }
}

export function getCharacters(json) {
    return { type: GET_CHARACTERS, json }
}

export function fetchCharacter(id) {
    return dispatch => {
        return fetch(`${c.API}${c.CHARACTERS}/${id}?apikey=${c.KEY}`)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                if (json.code === 200) {
                    dispatch(getCharacter(json))
                } else {
                    throw Error(json.status);
                }
            })
            .catch(error => dispatch(message(error.message)));
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