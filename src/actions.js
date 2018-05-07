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
export const BOOKMARK_ADD = "BOOKMARK_ADD";
export const BOOKMARK_REMOVE = "BOOKMARK_REMOVE";
export const FETCHING = "FETCHING";


/* Update the pagination object
direction : page num | next | prev */
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

/* Fetch characters
use pagination object to build the request */
export function fetchCharacters() {
    return dispatch => {

        dispatch(fetching(true));

        return fetch(`${c.API}${c.CHARACTERS}?offset=${pagination.offset}&limit=${pagination.limit}&apikey=${c.KEY}`)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                if (json.code === 200) {
                    // dispatch GET_CHARACTER
                    dispatch(getCharacters(json));

                    // update the browser history
                    if(pagination.numPage > 0) {
                        history.push(`/page/${pagination.numPage + 1}`);
                    } else if(pagination.numPage === 0) {
                        history.replace('/');
                    }
                } else {
                    throw Error(json.status);
                }
            })
            .catch(error => dispatch(message(error.message)))
            .then(() => dispatch(fetching()));
    }
}

/* GET_CHARACTERS action */
export function getCharacters(json) {
    return { type: GET_CHARACTERS, json }
}

/* Fetch a character by ID */
export function fetchCharacter(id) {
    return dispatch => {

        dispatch(fetching(true));
        
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
            .catch(error => dispatch(message(error.message)))
            .then(() => dispatch(fetching()));
    }
}

/* GET_CHARACTER action */
export function getCharacter(json) {
    return { type: GET_CHARACTER, json }
}

/* An action that could be used to display message.
Not 'reduced' at the moment */
export function message(text) {
    return { type: MESSAGE, text }
}

/* Remove the current character from the state
This allow to clean the single view */
export function unsetCurrentCharacter() {
    return { type: UNSET_HERO }
}

/* Add a character to the bookmarks
hero : character json to add */
export function addBookmark(hero) {
    return {
        type: BOOKMARK_ADD,
        hero
    }
}

/* Remove from the bookmarks
id : id of the character to remove */
export function removeBookmark(id) {
    return {
        type: BOOKMARK_REMOVE,
        id
    }
}

/* Fetching status
used around async action
isFetching : true|false */
export function fetching(isFetching = false) {
    return {
        type: FETCHING,
        isFetching
    }
}