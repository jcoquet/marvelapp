import { ui, bookmarks } from '../reducers';
import { GET_CHARACTERS, BOOKMARK_ADD, BOOKMARK_REMOVE } from '../actions';

describe('ui reducer', () => {
    it('should return the initial state', () => {
        expect(ui(undefined, {})).toEqual(
            { "nextButton": false, "prevButton": false }
        )
    })
    it('should show only the next button', () => {
        expect(ui(undefined, {
            type: GET_CHARACTERS,
            json: {
                data: {
                    offset: 0,
                    limit: 20,
                    total: 40
                }
            }
        })).toEqual(
            { "nextButton": true, "prevButton": false }
        )
    })
    it('should show only the prev button', () => {
        expect(ui(undefined, {
            type: GET_CHARACTERS,
            json: {
                data: {
                    offset: 20,
                    limit: 20,
                    total: 40
                }
            }
        })).toEqual(
            { "nextButton": false, "prevButton": true }
        )
    })
    it('should show both', () => {
        expect(ui(undefined, {
            type: GET_CHARACTERS,
            json: {
                data: {
                    offset: 20,
                    limit: 20,
                    total: 60
                }
            }
        })).toEqual(
            { "nextButton": true, "prevButton": true }
        )
    })
})

const bookmarksInitialState = [
    {
        id: 24,
        name: 'Bobotron'
    },
    {
        id: 54321,
        name: 'Big Hero'
    }
];

const hero = {
    id: 15,
    name: 'Angular Women'
}

describe('bookmarks reducer', () => {
    beforeEach(function () {
        global.sessionStorage = jest.genMockFunction();
        global.sessionStorage.setItem = jest.genMockFunction();
    })

    it('should return the initial state', () => {

        expect(bookmarks(bookmarksInitialState, {})).toEqual(
            bookmarksInitialState
        );

        let initialState = [];

        expect(bookmarks(initialState, {})).toEqual(
            initialState
        );
    })

    it('should add a bookmark', () => {
        expect(bookmarks(bookmarksInitialState, {
            type: BOOKMARK_ADD,
            hero
        })).toEqual(
            [ ...bookmarksInitialState, hero ]
        )
        expect(global.sessionStorage.setItem.mock.calls.length).toBe(1);
    })

    it('should remove a bookmark', () => {
        expect(bookmarks(bookmarksInitialState, {
            type: BOOKMARK_REMOVE,
            hero
        })).toEqual(
            [ ...bookmarksInitialState ]
        )
        expect(global.sessionStorage.setItem.mock.calls.length).toBe(1);
    })
})